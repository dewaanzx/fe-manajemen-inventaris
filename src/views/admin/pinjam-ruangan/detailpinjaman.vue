<template>
  <!-- main content -->
  <div class="mx-auto text-pinjamin flex flex-col gap-8">
    <!-- bagian form request -->
    <form
      action=""
      class="p-3 md:p-9 rounded-lg md:rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9"
    >
      <!-- form pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Peminjam</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Nama</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">
                {{ roomTransactionStore.room_transactions.borrower }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Acara</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">
                {{ roomTransactionStore.room_transactions.event }}
              </p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p class="md:text-[14px] w-[90%]">
                {{ roomTransactionStore.room_transactions.description }}
              </p>
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
          <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-4 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Tanggal</label>
                <p class="md:text-[14px]">
                {{ roomTransactionStore.room_transactions.date }}
                </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Mulai</label>
                <p class="md:text-[14px]">
                {{ roomTransactionStore.room_transactions.time_start }}
              </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Selesai</label>
                <p class="md:text-[14px]">
                {{ roomTransactionStore.room_transactions.time_end }}
                </p>
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
                <p class="md:text-[14px]">
                {{ roomTransactionStore.room_transactions.participant }} orang</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Konsumsi</label>
                <p class="md:text-[14px]" v-if="roomTransactionStore.room_transactions.consumption == 0">Tidak</p>
                <p class="md:text-[14px]" v-if="roomTransactionStore.room_transactions.consumption == 1">Pakai</p>
              </div>
            </div>
            <div class="text-[12px] flex flex-col gap-1">
              <label for="" class="md:text-[16px]">Deskripsi </label>
              <p class="md:text-[14px]">
                {{ roomTransactionStore.room_transactions.note }}
              </p>
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
              <p class="font-semibold md:text-[14px]">
                <a
                  :class="
                    roomTransactionStore.room_transactions.status == 'Diterima'
                      ? 'text-green-600'
                      : roomTransactionStore.room_transactions.status == 'Ditolak'
                      ? 'text-red-600'
                      : roomTransactionStore.room_transactions.status == 'Dicek'
                      ? 'text-gray-600'
                      : roomTransactionStore.room_transactions.status == 'Selesai'
                      ? 'text-gray-600'
                      : roomTransactionStore.room_transactions.status ==
                        'Digunakan'
                      ? 'text-orange-400'
                      : ''
                  "
                >
                  {{ roomTransactionStore.room_transactions.status }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>

    <!-- box mobil -->
    <div
      v-if="roomTransactionStore.room_transactions.status == 'Diterima'"
      class="rounded-lg md:rounded-[36px] border border-[#D9D9D9] p-4 md:p-9 flex flex-col md:flex-row gap-3 md:gap-2"
    >
      <div class="w-[50%] md:w-[20%] h-[12vmax] rounded-sm m-auto md:m-0">
        <img
          src="../../../assets/car.png"
          class="w-full h-[14vmax] md:h-[10vmax] md:w-[13vmax] rounded-md md:rounded-[20px]"
          style="object-fit: cover"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-2 md:w-[80%] md:gap-2">
        <!-- Merk dan tipe mobil -->
        <div class="flex flex-col gap-2">
          <p
            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
          >
            {{ roomStore.rooms.name }}
          </p>
          <p class="text-[12px] md:text-[14px] text-center md:text-left">
            {{ roomStore.rooms.description }}
          </p>
        </div>
        <!-- Kapasitas -->
        <div class="flex flex-col">
          <p
            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
          >
            Kapasitas
          </p>
          <p class="text-[12px] md:text-[14px] text-center md:text-left">
            {{ roomStore.rooms.capacity }} orang
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoomTransactionStore } from "../../../stores/room_transaction.store";
import { useRoomStore } from "../../../stores/room.store";

export default {
  data() {
    return {
      roomTransactionStore: useRoomTransactionStore(),
      roomStore: useRoomStore(),
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.roomTransactionStore.show(id).then(() => {
      const roomId = this.roomTransactionStore.room_transactions.room_id;

      this.roomStore.show(roomId);
    });
  },
};
</script>
