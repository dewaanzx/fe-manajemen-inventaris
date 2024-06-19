<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-2">
    <!-- bagian breadcrumb -->
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
    <!-- bagian form request -->
    <form
      action=""
      @submit.prevent="addpinjam()"
      class="p-3 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5"
    >
      <!-- form pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tujuan</label>
              <input
                class="rounded-lg w-[100%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="text"
                required
                v-model="mobilStore.tujuan"
                placeholder="Masukkan Tujuan Anda"
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <textarea
                class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9]"
                required
                v-model="mobilStore.deskripsi"
                cols="30"
                rows="10"
                placeholder="Deskripsi tujuan anda"
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
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tanggal</label>
              <input
                v-model="mobilStore.tanggal"
                class="rounded-lg md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="date"
                required
              />
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Jam</label>
              <input
                v-model="mobilStore.waktu"
                class="rounded-lg w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="time"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%]"
            >Tanggal & Jam</span
          >

          <div class="grid grid-cols-2 gap-2">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tanggal</label>
              
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Jam</label>
              
            </div>
          </div>
        </div>
      </div> -->
      <!-- penumpang & driver -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Panumpang & Sopir</span
          >
          <div class="grid grid-rows-2 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Penumpang</label>
                <input
                  v-model="mobilStore.penumpang"
                  class="rounded-lg w-full md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                  type="number"
                  required
                />
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Sopir</label>
                <select
                  required
                  v-model="mobilStore.sopir"
                  class="rounded-lg w-full md:w-[30%] h-[3vmax] px-3 border border-[#D9D9D9]"
                >
                  <option value="1">Pakai</option>
                  <option value="0">Tidak Pakai</option>
                </select>
              </div>
            </div>
            <div class="text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <textarea
                v-model="mobilStore.keterangan"
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
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[10%]"
        >
          Selanjutnya
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { useMobilStore1 } from "../../../stores/stores";

export default {
  data() {
    return {
      mobilStore: useMobilStore1(),
      tujuan: "",
      deskripsi: "",
      tanggal: "",
      waktu: "",
      penumpang: "",
      sopir: "",
      keterangan: "",
    };
  },
  methods: {
    addpinjam() {
      // this.mobilStore.addpinjam(this.tujuan);
      // this.mobilStore.addpinjam(this.deskripsi);
      // this.mobilStore.addpinjam({
      //   tujuan: this.tujuan,
      //   deskripsi: this.deskripsi,
      // });

      this.$router.push("/users/detail-pengajuan-mobil");
    },
  },
};
</script>
