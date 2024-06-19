<script>
import { defineComponent } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";
import { useRuangStore1 } from "../../../stores/stores2";
import { useRoomStore } from "../../../stores/room.store";
import { useRoomTransactionStore } from "../../../stores/room_transaction.store";

let eventGuid = 0;

export function createEventId() {
  return String(eventGuid++);
}

export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      roomTransactionStore: useRoomTransactionStore(),
      roomStore: useRoomStore(),

      calendarKey: 0,
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "title",
          right: "prev,next",
        },
        initialView: "dayGridMonth",
        initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      formData: {
        date: null,
      },
      currentEvents: [],

      ruangStore: useRuangStore1(),
      tanggal: "",
    };
  },
  methods: {
    updateEvents() {
      const roomTransactions = this.roomTransactionStore.room_transactions;
      console.log("roomTransactions:", roomTransactions);

      // Update INITIAL_EVENTS based on room_transactions data
      const updatedEvents = roomTransactions.map((transaction) => ({
        id: createEventId(),
        title: transaction.event,
        start: new Date(transaction.date),
      }));

      // Assign the updatedEvents directly to trigger reactivity
      this.calendarOptions.initialEvents = updatedEvents;

      console.log("Updated initialEvents:", this.calendarOptions.initialEvents);

      // Increment the calendarKey to force a re-render
      this.calendarKey += 1;
    },

    addtanggal(data) {
      // this.tujuan = tujuan.data;
      // console.log(data);
      let formattanggal = formattanggal(data.start, {
        month: "long",
        year: "numeric",
        day: "numeric",
        locale: "id",
      });

      this.tanggal = formattanggal;
      this.tanggal = data.tanggal;

      this.$router.push("/users/detail-pengajuan-mobil");
    },

    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },
    handleDateSelect(selectInfo) {
      let dateFormat = formatDate(selectInfo.start, {
        weekday: "long",
        month: "long",
        year: "numeric",
        day: "numeric",
        locale: "id",
      });

      let selectedDate = formatDate(selectInfo.start, {
        month: "numeric",
        year: "numeric",
        day: "numeric",
      });

      let dateString = new Date(selectedDate).toISOString();
      let dateFormats = dateString.split("T")[0];
      console.log(dateFormats);

      // let thistitle = prompt('a day has been clicked!')
      this.modalTitle = "A day has been clicked!";
      this.openModal();

      this.formData.date = dateFormat;

      this.ruangStore.tanggal = dateFormats;

      let calendarApi = selectInfo.view.calendar;

      calendarApi.unselect(); // clear date selection

      if (this.modalTitle) {
        calendarApi.addEvent({
          id: createEventId(),
          title: this.modalTitle,
          allDay: selectInfo.allDay,
        });
      }
    },
    openModal() {
      let modal = this.$refs.myModal;
      modal.style.display = "block";
    },
    closeModal() {
      let modal = this.$refs.myModal;
      modal.style.display = "none";
    },

    // handleEventClick(clickInfo) {
    //   this.modalTitle = "A day has been clicked!";
    //   // this.openModal()
    //   if (
    //     confirm(
    //       `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //     )
    //   ) {
    //     clickInfo.event.remove();
    //   }
    // },
    handleEvents(events) {
      this.currentEvents = events;
    },
  },
  mounted() {
    this.roomTransactionStore.fetchByStatus("Diterima").then(() => {
      console.log("Data fetched successfully");
      this.updateEvents();
    });
  },
});
</script>

<template>
  <main class="md:w-[80vw] mx-auto flex flex-col gap-8">
    <header class="bg-red-200">Ini Breadcumb</header>

    <nav
      class="bg-[#FDEDCA] p-2 rounded-sm md:rounded-[6px] text-[11px] md:text-[16px] inline-block"
    >
      anda dapat melakukan pengajuan dengan memilih tanggal dan jam yang
      tersedia {{ roomTransactionStore.room_transactions }}
    </nav>
    <input type="date" class="hidden" />
    <section class="border rounded-[60px]">
      <div class="demo-app">
        <div class="demo-app-main">
          <FullCalendar
            class="demo-app-calendar"
            :key="calendarKey"
            :options="calendarOptions"
          >
            <template v-slot:eventContent="arg">
              <p class="warna">{{ arg.event.title }}</p>
              <i></i>
            </template>
          </FullCalendar>
        </div>
      </div>
    </section>
  </main>

  <div ref="myModal" class="modal">
    <!-- Konten modal di sini -->

    <div
      class="modal-content my-[20%] md:my-[10%] mx-[20%] md:mx-[40%] rounded-lg shadow-lg"
    >
      <span
        class="close h-[33px] w-[33px] hover:bg-slate-100 rounded-full flex justify-center items-center text-[30px] md:m-[10px]"
        @click="closeModal"
        >&times;</span
      >
      <br />
      <br />
      <div class="flex flex-col gap-3">
        <!-- tanggal -->
        <h1 class="text-[16px] md:text-[20px]">{{ formData.date }}</h1>
        <!-- rectangle -->
        <div class="bg-[#E5E5E5] h-[1px]"></div>

        <li class="bg-[#2B9FDC4D] p-2 rounded-[8px] flex flex-col gap-1">
          <p style="line-height: 1.2em" class="text-[12px]">
            {{ roomTransactionStore.room_transactions.event }}
          </p>
          <p style="line-height: 1.2em" class="text-[10px]">13:00 - 14:00</p>
        </li>

        <button
          @click="$router.push('/users/pinjam-ruangan/pengajuan')"
          class="bg-[#E26B00] text-white text-[12px] p-[10px] rounded-[8px]"
        >
          Pengajuan Ruangan
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="css">
h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b {
  /* used for event dates/times */
  margin-right: 3px;
  background: black;
}

.demo-app {
  display: flex;
  min-height: 100%;

  font-size: 14px;
}

.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  /* margin: 20% 40vw; */
  padding: 20px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.warna {
  background: #c1e9ff;
  width: 100%;
  border-radius: 2px;
  padding: 4px;
}
</style>
