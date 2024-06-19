<template>
  <main class="w-[80vw] mx-auto text-pinjamin flex flex-col rounded-md gap-2">
    <nav class="flex" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <button
            @click="$router.push('/users')"
            class="inline-flex items-center text-sm md:text-lg text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </button>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              class="ms-1 text-sm md:text-lg text-gray-500 md:ms-2 dark:text-gray-400"
              >Pengajuan</span
            >
          </div>
        </li>
      </ol>
    </nav>

    <!-- bagian step section -->
    <div
      class="py-[15px] flex flex-row space-x-5 justify-center md:gap-6 cursor-default"
      style="line-height: 1.2em"
    >
      <!-- step 1 -->
      <div class="flex flex-col items-center gap-[6px] w-[7vh]">
        <div
          class="h-[4vh] w-[4vh] md:h-[7vh] md:w-[7vh] flex items-center justify-center rounded-full bg-[#034E76] hover:bg-[#034476]"
        >
          <span class="text-lg font-medium md:text-[30px] text-white">1</span>
        </div>
        <span class="text-[12px] md:text-lg text-[#034E76]">Pengajuan</span>
      </div>
      <!-- rectangle -->
      <div class="bg-[#D9D9D9] h-1 w-[10%] my-6"></div>
      <!-- step 2 -->
      <div class="flex flex-col items-center gap-[6px] w-[7vh]">
        <div
          class="h-[4vh] w-[4vh] md:h-[7vh] md:w-[7vh] flex items-center justify-center rounded-full bg-white border-[#034E76] border-4"
        >
          <span class="text-lg font-medium md:text-[30px] text-[#034E76]"
            >2</span
          >
        </div>
        <span class="text-[12px] md:text-lg text-[#034E76]">Detail </span>
      </div>
    </div>

    <!-- bagian form pengajuan -->
    <form
      @submit.prevent="addpinjam()"
      class="border rounded-lg md:rounded-[36px] p-3 md:p-[36px] border-[#D9D9D9] flex flex-col gap-2 md:gap-9"
    >
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Ruangan</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Ruangan</label>
              <select
                v-model="ruangStore.ruangan"
                required
                class="rounded-lg w-full md:w-[100%] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option v-for="room in roomStore.rooms" :value="room.id">
                  {{ room.name }} - {{ room.capacity }} Orang
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- inputan pinjaman-->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Acara</label>
              <input
                class="rounded-lg w-[100%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="text"
                v-model="ruangStore.acara"
                required
                placeholder="Masukkan Tujuan Anda"
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <textarea
                class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9]"
                required
                v-model="ruangStore.deskripsi"
                cols="30"
                rows="10"
                placeholder="Deskripsi tujuan anda"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Inputan jam -->
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Jam</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Mulai</label>
              <input
                class="rounded-lg md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="time"
                v-model="ruangStore.jammulai"
                required
              />
            </div>
            <div class="grid flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Selesai</label>
              <input
                class="rounded-lg md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="time"
                v-model="ruangStore.jamselesai"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <!-- inputan peserta & knosumsi -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Peserta & Konsumsi</span
          >
          <div class="flex flex-col gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Peserta</label>
                <input
                  class="rounded-lg w-full md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                  type="number"
                  v-model="ruangStore.peserta"
                  required
                />
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Konsumsi</label>
                <select
                  v-model="ruangStore.konsumsi"
                  required
                  class="rounded-lg w-full md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                >
                  <option value="1">Pakai</option>
                  <option value="0">Tidak Pakai</option>
                </select>
              </div>
            </div>
            <div class="text-[12px]">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <textarea
                v-model="ruangStore.keterangan"
                class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9]"
                required
                cols="30"
                rows="10"
                placeholder="Masukan catatan anda terkait penumpang dan sopir"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <!-- rectangle -->
      <div class="h-[1px] bg-[#D9D9D9]"></div>
      <!-- button submit -->
      <div
        class="h-[3vmax] text-[12px] md:text-[16px] flex justify-end items-center gap-5"
      >
        <button
          class="w-[25%] rounded-md md:w-[10%]"
          @click="$router.push('/users')"
        >
          Batal
        </button>
        <button
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white"
        >
          Selanjutnya
        </button>
      </div>
    </form>
  </main>
</template>
<script>
import { useRuangStore1 } from "../../../stores/stores2";
import { useRoomStore } from "../../../stores/room.store";

export default {
  data() {
    return {
      ruangStore: useRuangStore1(),
      roomStore: useRoomStore(),
      acara: "",
      deskripsi: "",
      tanggal: "",
      jammulai: "",
      jamselesai: "",
      peserta: "",
      konsumsi: "",
      keterangan: "",
    };
  },
  methods: {
    addpinjam() {
      this.$router.push("/users/pinjam-ruangan/pengajuan/detail");
    },
  },
  mounted() {
    this.roomStore.fetch();
  },
};
</script>
