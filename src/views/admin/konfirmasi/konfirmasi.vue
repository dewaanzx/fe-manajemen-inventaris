<template>
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
              >Konfirmasi</span
            >
          </div>
        </li>
      </ol>
    </nav>
  <form
    action=""
    @submit.prevent="confirmUpdate"
  >
  <article class="mt-8 p-3 md:p-9 rounded-lg md:rounded-[36px] border border-[#D9D9D9] flex flex-col gap-9">
      <!-- form pinjaman -->

      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pegawai</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Nama</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">
                {{ formData.user_name }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Pengambilan -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Data Material</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Nama Material</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">
                {{ formData.material_name }}
              </p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tujuan</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">
                {{ formData.destination }}
              </p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p class="md:text-[14px] w-[90%]">
                {{ formData.description }}
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
                  {{ formData.date }}
                </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Jam</label>
                <p class="md:text-[14px]">
                  {{ formData.time }}
                </p>
              </div>
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
              <p class="font-semibold md:text-[14px]">
                <a>
                  {{ materialTransactionStore.material_transactions.status }}
				</a>
              </p>
            </div>
          </div>
        </div>
      </div>
  </article>
  <article class="mt-8 p-3 md:p-9 rounded-lg md:rounded-[36px] border border-[#D9D9D9] flex flex-col gap-9">
      <!-- form pinjaman -->
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
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
import { useRoute } from "vue-router";
import { useMaterialStore } from "../../../stores/material.store";
import { useDriverStore } from "../../../stores/driver.store";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      materialStore: useMaterialStore(),
      driverStore: useDriverStore(),
      formData: {
        user_name: null,
        material_name: null,
        date: null,
        time: null,
        destination: null,
        description: null,
        passanger: null,
        passanger_description: null,
        driver: null,
        status: null,
        material_id: null,
        driver_id: null,
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
      if (window.confirm("Apakah anda yakin ingin menambahkan data?")) {
        this.update();
      }
    },
    async update() {
      const driver = this.formData.driver_id;
      const material = this.formData.material_id;
      if (driver == "" || !driver){
        delete this.formData.driver_id;
      }
      if (material == ""){
        delete this.formData.material_id;
      }

      const id = this.$route.params.id;
      let material_transaction = await this.materialTransactionStore.take(id, this.formData);

      if (material_transaction) {
        this.$router.push("/admin/konfirmasi");
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.materialTransactionStore.show(id).then(() => {
      const material_transaction = this.materialTransactionStore.material_transactions;

      this.formData.user_name = material_transaction.user_name;
      this.formData.material_name = material_transaction.material_name;
      this.formData.date = material_transaction.date_start;
      this.formData.time = material_transaction.time_start;
      this.formData.destination = material_transaction.destination;
      this.formData.description = material_transaction.description;
      this.formData.passanger = material_transaction.passanger;
      this.formData.passanger_description = material_transaction.passanger_description;
      this.formData.driver = material_transaction.driver;
      this.formData.status = material_transaction.status;
      this.formData.material_id = material_transaction.material_id;
      this.formData.driver_id = material_transaction.driver_id;
      this.formData.confirmation_note = material_transaction.confirmation_note;
    });

    this.materialStore.fetch();
    this.driverStore.fetch();
  },
};
</script>

../../../stores/material_transaction.store../../../stores/material.store