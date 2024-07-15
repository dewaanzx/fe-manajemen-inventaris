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
              >Tambah Pinjaman</span
            >
          </div>
        </li>
      </ol>
    </nav>

  <section class="mt-4">
    <form
      @submit.prevent="confirmUpdate"
      class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9"
    >
      <!-- form pinjaman -->
      <div class="grid md:flex md:flex-row md:justify-around gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Peminjam</span
        >
        <div class="grid gap-2 md:w-[80%]">
          <div class="flex flex-col text-[12px] gap-1">
            <label for="" class="text-[14px] md:text-[16px]">Nama</label>
            <span class="text-[12px] md:text-[14px]">{{ materialTransactionStore.material_transactions.user_name }}</span>
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
              <label for="" class="text-[14px] md:text-[16px]">Tujuan</label>
              <input
                class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
                type="text"
                required
                placeholder="Masukkan Tujuan Anda"
                v-model="formData.destination"
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
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Jam</label>
              <input
                class="rounded-lg w-[50%] h-[3vmax] text-[14px] md:text-[16px] px-3 border border-[#D9D9D9]"
                type="time"
                required
                v-model="formData.time"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Material</span
        >
        <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
          <div class="grid grid-cols-3 md:grid-cols-4 gap-5">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Material</label>
              <select
                v-model="formData.material_id"
                class="rounded-lg w-full text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option v-for="material in materialStore.materials" :value="material.id">{{ material.name }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="grid md:flex md:flex-row md:justify-start gap-2">
        <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
          >Status</span
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
                <option value="Belum">Belum</option>
                <option value="Dikonfirmasi">Dikonfirmasi</option>
              </select>
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
        <a class="w-[25%] rounded-md md:w-[10%]" @click="goBack">Batal</a>
        <button
          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[10%]"
        >
          Simpan
        </button>
      </div>
    </form>
  </section>
</template>
<script>
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
import { useRoute } from "vue-router";
import { useMaterialStore } from "../../../stores/material.store";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      materialStore: useMaterialStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
        description: null,
        status: null,
        material_id: null,
        confirmation_note: null,
      },
    };
  },  
  methods: {
    goBack() {
      console.log(this.formData)
      this.$router.go(-1);
    },
    confirmUpdate() {
      if (window.confirm("Apakah anda yakin ingin mengedit data?")) {
        this.update();
      }
    },
    async update() {
      const material = this.formData.material_id;
      if (material == ""){
        delete this.formData.material_id;
      }

      const id = this.$route.params.id;
      let material_transaction = await this.materialTransactionStore.update(id, this.formData);

      if (material_transaction) {
        this.$router.push("/admin/menu/Semua");
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.materialTransactionStore.show(id).then(() => {
      const material_transaction = this.materialTransactionStore.material_transactions;

      this.formData.date = material_transaction.date_start;
      this.formData.time = material_transaction.time_start;
      this.formData.destination = material_transaction.destination;
      this.formData.description = material_transaction.description;
      this.formData.passanger = material_transaction.passanger;
      this.formData.passanger_description = material_transaction.passanger_description;
      this.formData.status = material_transaction.status;
      this.formData.material_id = material_transaction.material_id;
      this.formData.confirmation_note = material_transaction.confirmation_note;
    });

    this.materialStore.fetch();
  },
};
</script>
../../../stores/material_transaction.store../../../stores/material.store