<template>
  <!-- Breadcrumb -->

  <section class="mt-4">
    <form
      @submit.prevent="confirmCreate"
      class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9"
    >
      <!-- form pinjaman -->
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Peminjam</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-3 md:grid-cols-4 gap-5">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Peminjam</label>
              <select
                required
                v-model="formData.user_id"
                class="rounded-lg text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option v-for="user2 in user2Store.users2" :value="user2.id">{{ user2.name }}</option>
              </select>
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
              <label for="" class="text-[14px] md:text-[16px]">Acara</label>
              <input
                class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="text"
                required
                placeholder="Masukkan Tujuan Anda"
                v-model="formData.event"
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Deskripsi</label>
              <textarea
                class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9] text-[14px] md:text-[16px]"
                required
                cols="30"
                rows="10"
                placeholder="Deskripsi tujuan anda"
                v-model="formData.description"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <!-- date & time -->
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Tanggal & Jam</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col text-[14px] md:text-[16px] gap-1">
              <label for="" class="md:text-[16px]">Tanggal</label>
              <input
                class="rounded-lg md:w-[50%] h-[3vmax] px-3 border border-[#D9D9D9] text-[14px] md:text-[16px]"
                type="date"
                required
                v-model="formData.date"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Mulai</label>
              <input
                class="rounded-lg w-[50%] h-[3vmax] text-[14px] md:text-[16px] px-3 border border-[#D9D9D9]"
                type="time"
                required
                v-model="formData.time_start"
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Selesai</label>
              <input
                class="rounded-lg w-[50%] h-[3vmax] text-[14px] md:text-[16px] px-3 border border-[#D9D9D9]"
                type="time"
                required
                v-model="formData.time_end"
              />
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
          <div class="flex flex-col gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="text-[14px] md:text-[16px]">Peserta</label>
                <input
                  class="rounded-lg w-full text-[14px] md:text-[16px] md:w-[50%] h-[3vmax] px-3 border border-[#D9D9D9]"
                  type="number"
                  required
                  placeholder="Masukkan jumlah penumpang"
                  v-model="formData.participant"
                />
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="text-[14px] md:text-[16px]"
                  >Konsumsi</label
                >
                <select
                  required
                  class="rounded-lg w-full text-[14px] md:text-[16px] md:w-[50%] h-[3vmax] px-3 border border-[#D9D9D9]"
                  v-model="formData.consumption"
                >
                  <option value="1">Pakai</option>
                  <option value="0">Tidak Pakai</option>
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
                v-model="formData.note"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
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
                class="rounded-lg text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
                v-model="formData.status"
              >
                <option value="Dicek">Dicek</option>
                <option value="Diterima">Diterima</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Ruangan</label>
              <select
                required
                class="rounded-lg w-full text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
                v-model="formData.room_id"
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
        <a class="w-[25%] rounded-md md:w-[10%]" @click="goBack">Batal</a>
        <button
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[10%]"
        >
          Tambah
        </button>
      </div>
    </form>
  </section>
</template>
<script>
import { useRoomTransactionStore } from "../../../stores/room_transaction.store";
import { useRoomStore } from "../../../stores/room.store";
import { useUser2Store } from "../../../stores/user.store";

export default {
  data() {
    return {
      roomTransactionStore: useRoomTransactionStore(),
      roomStore: useRoomStore(),
      user2Store: useUser2Store(),
      formData: {
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
      },
    };
  },
  methods: {
    goBack() {
      console.log(this.formData)
      this.$router.go(-1);
    },
    confirmCreate() {
      if (window.confirm("Apakah anda yakin ingin menambahkan data?")) {
        this.create();
      }
    },
    async create() {
      const room = this.formData.room_id;
      if (room == ""){
        delete this.formData.room_id;
      }

      let room_transaction = await this.roomTransactionStore.add(this.formData);

      if (room_transaction) {
        this.$router.push("/admin/pinjaman-ruangan/Semua");
      }
    },
  },
  mounted() {
    this.roomStore.fetch();
    this.user2Store.fetch();
  },
};
</script>
