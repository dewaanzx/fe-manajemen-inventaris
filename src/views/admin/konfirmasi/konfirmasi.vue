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

      <!-- Pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
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
      <!-- penumpang & driver -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Panumpang & Sopir</span
          >
          <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-4 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Penumpang</label>
                <p class="md:text-[14px]">
                  {{ formData.passanger }} orang
                </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Sopir</label>
                <p v-if="formData.driver == 1">Pakai</p>
                <p v-if="formData.driver == 0">Tidak Pakai</p>
              </div>
            </div>
            <div class="text-[12px] flex flex-col gap-1">
              <label for="" class="md:text-[16px]">Deskripsi </label>
              <p class="md:text-[14px]">
                {{ formData.passanger_description }}
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
              <label for="" class="md:text-[16px]">Status</label>
              <p class="font-semibold md:text-[14px]">
                <a
                  :class="
                    materialTransactionStore.material_transactions.status == 'Diterima'
                      ? 'text-green-600'
                      : materialTransactionStore.material_transactions.status == 'Ditolak'
                      ? 'text-red-600'
                      : materialTransactionStore.material_transactions.status == 'Dicek'
                      ? 'text-gray-600'
                      : materialTransactionStore.material_transactions.status == 'Selesai'
                      ? 'text-gray-600'
                      : materialTransactionStore.material_transactions.status ==
                        'Digunakan'
                      ? 'text-orange-400'
                      : ''
                  "
                >
                  {{ materialTransactionStore.material_transactions.status }}</a
                >
              </p>
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
              <label for="" class="text-[14px] md:text-[16px]">Mobil</label>
              <select
                v-model="formData.material_id"
                class="rounded-lg w-full text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option value="">-</option>
                <option v-for="material in materialStore.materials" :value="material.id">{{ material.name }}</option>
              </select>
            </div>  
            <div class="flex flex-col text-[12px] gap-1" v-if="formData.driver == 1">
              <label for="" class="text-[14px] md:text-[16px]">Sopir</label>
              <select
                v-model="formData.driver_id"
                class="rounded-lg w-full text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option value="">-</option>
                <option v-for="driver in driverStore.drivers" :value="driver.id">{{ driver.name }}</option>
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
      let material_transaction = await this.materialTransactionStore.update(id, this.formData);

      if (material_transaction) {
        this.$router.push("/admin/konfirmasi");
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