<template>
  <header>Area breadcrum</header>
  <form
    action=""
    @submit.prevent="confirmUpdate"
  >
  <article class="mt-8 p-3 md:p-9 rounded-lg md:rounded-[36px] border border-[#D9D9D9] flex flex-col gap-9">
      <!-- form pinjaman -->

      <!-- Pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Peminjam</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Nama</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">{{ formData.borrower }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Acara</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">{{ formData.event }}</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p class="md:text-[14px] w-[90%]">{{ formData.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- date & time -->
      <div>
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Tanggal & Jam</span
          >
          <div class="grid grid-cols-1 gap-1 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-4 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Tanggal</label>
                <p class="md:text-[14px]">{{ formData.date }}</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Jam Mulai</label>
                <p class="md:text-[14px]">{{ formData.time_start }}</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Jam Selesai</label>
                <p class="md:text-[14px]">{{ formData.time_end }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- penumpang & driver -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Peserta & Konsumsi</span
          >
          <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-4 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Peserta</label>
                <p class="md:text-[14px]">{{ formData.participant }} orang</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Konsumsi</label>
                <p v-if="formData.consumption == 1">Pakai</p>
                <p v-if="formData.consumption == 0">Tidak Pakai</p>
              </div>
            </div>
            <div class="text-[12px] flex flex-col gap-1">
              <label for="" class="md:text-[16px]">Catatan </label>
              <p class="md:text-[14px]">{{ formData.note }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Status -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Status</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Status</label>
              <p class="md:text-[14px] w-[90%]">Dicek</p>
            </div>
          </div>
        </div>
      </div>
  </article>
  <article class="mt-8 p-3 md:p-9 rounded-lg md:rounded-[36px] border border-[#D9D9D9] flex flex-col gap-9">
      <!-- form pinjaman -->
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Konfirmasi</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-3 md:grid-cols-4 gap-5">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Status</label>
              <select
                required
                v-model="formData.status"
                class="rounded-lg text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option value="Diterima">Diterima</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Ruangan</label>
              <select
                v-model="formData.room_id"
                class="rounded-lg w-full text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option value="">-</option>
                <option v-for="room in roomStore.rooms" :value="room.id">{{ room.name }}</option>
              </select>
            </div>
          </div>
          <div class="text-[12px] gap-1">
            <label for="" class="text-[14px] md:text-[16px]">Deskripsi</label>
            <textarea
              class="rounded-lg w-[100%] h-[7vmax] p-3 text-[14px] md:text-[16px] border border-[#D9D9D9]"
              required
              cols="30"
              rows="10"
              placeholder="Masukan catatan anda terkait penumpang dan sopir"
              v-model="formData.confirmation_note"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- rectangle -->
      <div class="h-[1px] bg-[#D9D9D9]"></div>
      <!-- button submit -->
      <div
        class="h-[3vmax] text-[12px] md:text-[16px] flex justify-end items-center gap-5"
      >
        <button class="w-[25%] rounded-md md:w-[10%]">Batal</button>
        <button
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[10%]"
        >
          Konfirmasi
        </button>
      </div>
  </article>
  </form>
</template>
<script>
import { useRoomTransactionStore } from "../../../stores/room_transaction.store";
import { useRoute } from "vue-router";
import { useRoomStore } from "../../../stores/room.store";

export default {
  data() {
    return {
      roomTransactionStore: useRoomTransactionStore(),
      roomStore: useRoomStore(),
      formData: {
        room_id: null,
        event: null,
        description: null,
        date: null,
        time_start: null,
        time_end: null,
        participant: null,
        consumption: null,
        note: null,
        status: null,
        confirmation_note: null,
        borrower: null,
      },
    };
  },  
  methods: {
    goBack() {
      console.log(this.formData)
      this.$router.go(-1);
    },
    confirmUpdate() {
      if (window.confirm("Apakah anda yakin ingin menambahkan data?")) {
        this.update();
      }
    },
    async update() {
      const room = this.formData.room_id;
      if (room == ""){
        delete this.formData.room_id;
      }

      const id = this.$route.params.id;
      let room_transaction = await this.roomTransactionStore.update(id, this.formData);

      if (room_transaction) {
        this.$router.push("/admin/konfirmasi-ruangan");
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.roomTransactionStore.show(id).then(() => {
      const room_transaction = this.roomTransactionStore.room_transactions;

      this.formData.room_id = room_transaction.room_id;
      this.formData.event = room_transaction.event;
      this.formData.description = room_transaction.description;
      this.formData.date = room_transaction.date;
      this.formData.time_start = room_transaction.time_start;
      this.formData.time_end = room_transaction.time_end;
      this.formData.participant = room_transaction.participant;
      this.formData.consumption = room_transaction.consumption;
      this.formData.note = room_transaction.note;
      this.formData.status = room_transaction.status;
      this.formData.confirmation_note = room_transaction.confirmation_note;
      this.formData.borrower = room_transaction.borrower;
    });

    this.roomStore.fetch();
  },
};
</script>

