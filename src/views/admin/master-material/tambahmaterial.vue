<template>
  <!-- Breadcrumb -->
  <nav class="flex" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <button
            @click="$router.push('/admin/menu/Semua')"
            class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
          >
            Home
          </button>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-black mx-1"
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
              >Tambah Barang</span
            >
          </div>
        </li>
      </ol>
    </nav>

  <section class="mt-4">
      <form @submit.prevent="confirmCreate" class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9">
	      <div class="">
	        <div class="grid md:flex md:flex-row md:justify-around gap-2">
	          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
	            >Informasi Barang</span
	          >
	          <div class="grid gap-2 md:w-[80%]">
	            <div class="flex flex-col text-[12px] gap-1">
	              <label for="" class="text-[14px] md:text-[16px]">Nama</label>
	              <input
	                class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
	                type="text"
	                required
	                placeholder="Masukkan Nama Mobil"
	                v-model="formData.name"
	              />
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
	              <label for="" class="text-[14px] md:text-[16px]">Nomor Polisi</label>
	              <input
	                class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
	                type="text"
	                required
	                placeholder="Masukkan Nomor Polisi"
	                v-model="formData.license"
	              />
	            </div>
	          <div>
	            <label for="">Foto Mobil</label>
	            <label
	              for="imageinput"
	              class="flex flex-col items-center justify-center border-2 border-dashed md:rounded-[24px] border-[#131A29] rounded-md cursor-pointer hover:bg-slate-100 opacity-60 p-5 h-[400px]"
	            >
	              <div class="grid justify-items-center space-y-2">
	                <img src="../../../assets/camera.svg" alt="" />
	              </div>
	              <input
	                type="file"
	                class="file:hidden w-[45%] text-[11px] md:w-[6%]"
	                id="imageinput"
	                @change="handlePicture"
	                accept=".jpg, .jpeg, .png"
	              />
	            </label>
	          </div>
	          </div>
	        </div>
	      </div>
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
import { useCarStore } from "../../../stores/car.store";

export default {
  data() {
    return {
      carStore: useCarStore(),
      formData: {
        name: null,
        license: null,
        picture: null,
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
    handlePicture(e) {
      const picture = e.target.files[0];
      this.formData.picture = picture;
    },
    async create() {
      let car = await this.carStore.add(this.formData);

      if (car) {
        this.$router.push("/admin/master-material");
      }
    },
  },
};
</script>
