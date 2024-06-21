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
            class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
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
            <button
              @click="$router.push('/users/pengajuanmobil')"
              class="ms-1 text-sm md:text-lg text-black md:ms-2 dark:text-black"
            >
              Ambil Barang
            </button>
          </div>
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
            <button
              @click="$router.push('/users/pengajuanmobil')"
              class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
            >
              Pengajuan
            </button>
          </div>
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
              class="ms-1 text-sm md:text-lg text-black md:ms-2 dark:text-black"
              >Detail</span
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
          class="h-[4vh] w-[4vh] md:h-[7vh] md:w-[7vh] flex items-center justify-center rounded-full bg-[#034E76] hover:bg-[#034476]"
        >
          <span class="text-lg font-medium md:text-[30px] text-white">2</span>
        </div>
        <span class="text-[12px] md:text-lg text-[#034E76]">Detail </span>
      </div>
    </div>
    <!-- bagian form request -->

    <form
      action=""
      @submit.prevent="create"
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
              <p>{{ mobilStore.tujuan }}</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p>{{ mobilStore.deskripsi }}</p>
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
              <p>{{ mobilStore.tanggal }}</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Jam</label>
              <p>{{ mobilStore.waktu }}</p>
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
                <p>{{ mobilStore.penumpang }}</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Sopir</label>
                <p>{{ mobilStore.sopir }}</p>
              </div>
            </div>
            <div class="text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p>{{ mobilStore.keterangan }}</p>
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
          @click="$router.push('/users/pengajuanmobil')"
          class="w-[25%] rounded-md md:w-[10%]"
        >
          Batal
        </button>
        <button
          @submit.prevent="create"
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[17%]"
        >
          Selanjutnya
        </button>
      </div>
    </form>
  </div>

</template>

<script>
import { useMobilStore1 } from "@/stores/stores";
import { useCarTransactionStore } from "../../../stores/car_transaction.store";

export default {
  data() {
    // const mobilStore = useMobilStore1();
    return {
      mobilStore: useMobilStore1(),
      carTransactionStore: useCarTransactionStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
        description: null,
        passanger: null,
        passanger_description: null,
        driver: null,
      },
    };
  },
  methods: {
    async create() {
      this.formData.destination = this.mobilStore.tujuan;
      this.formData.description = this.mobilStore.deskripsi;
      this.formData.date = this.mobilStore.tanggal;
      this.formData.time = this.mobilStore.waktu;
      this.formData.passanger = this.mobilStore.penumpang;
      this.formData.driver = this.mobilStore.sopir;
      this.formData.passanger_description = this.mobilStore.keterangan;

      let car_transaction = await this.carTransactionStore.add(this.formData);

      if (car_transaction) {
        this.$router.push("/users");
      }
    },
  },
};
</script>
