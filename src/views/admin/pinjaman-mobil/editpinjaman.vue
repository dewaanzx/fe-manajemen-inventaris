<template>
  <!-- Breadcrumb -->

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
            <span class="text-[12px] md:text-[14px]">{{ carTransactionStore.car_transactions.borrower }}</span>
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

      <!-- penumpang & driver -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-start gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Panumpang & Sopir</span
          >
          <div class="flex flex-col gap-2 w-[100%] md:w-[80%]">
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="text-[14px] md:text-[16px]"
                  >Penumpang</label
                >
                <input
                  class="rounded-lg w-full text-[14px] md:text-[16px] md:w-[50%] h-[3vmax] px-3 border border-[#D9D9D9]"
                  type="number"
                  required
                  min="1"
                  placeholder="Masukkan jumlah penumpang"
                  v-model="formData.passanger"
                />
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="text-[14px] md:text-[16px]">Sopir</label>
                <select
                  required
                  class="rounded-lg w-full text-[14px] md:text-[16px] md:w-[50%] h-[3vmax] px-3 border border-[#D9D9D9]"
                  v-model="formData.driver"
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
                v-model="formData.passanger_description"
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
                v-model="formData.status"
                class="rounded-lg text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option value="Dicek">Dicek</option>
                <option value="Diterima">Diterima</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="text-[14px] md:text-[16px]">Mobil</label>
              <select
                v-model="formData.car_id"
                class="rounded-lg w-full text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
              >
                <option value="">-</option>
                <option v-for="car in carStore.cars" :value="car.id">{{ car.name }}</option>
              </select>
            </div>  
            <div class="flex flex-col text-[12px] gap-1">
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
import { useCarTransactionStore } from "../../../stores/car_transaction.store";
import { useRoute } from "vue-router";
import { useCarStore } from "../../../stores/car.store";
import { useDriverStore } from "../../../stores/driver.store";

export default {
  data() {
    return {
      carTransactionStore: useCarTransactionStore(),
      carStore: useCarStore(),
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
        car_id: null,
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
      if (window.confirm("Apakah anda yakin ingin mengedit data?")) {
        this.update();
      }
    },
    async update() {
      const driver = this.formData.driver_id;
      const car = this.formData.car_id;
      if (driver == ""){
        delete this.formData.driver_id;
      }
      if (car == ""){
        delete this.formData.car_id;
      }

      const id = this.$route.params.id;
      let car_transaction = await this.carTransactionStore.update(id, this.formData);

      if (car_transaction) {
        this.$router.push("/admin/pinjaman-mobil/Semua");
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.carTransactionStore.show(id).then(() => {
      const car_transaction = this.carTransactionStore.car_transactions;

      this.formData.date = car_transaction.date_start;
      this.formData.time = car_transaction.time_start;
      this.formData.destination = car_transaction.destination;
      this.formData.description = car_transaction.description;
      this.formData.passanger = car_transaction.passanger;
      this.formData.passanger_description = car_transaction.passanger_description;
      this.formData.driver = car_transaction.driver;
      this.formData.status = car_transaction.status;
      this.formData.car_id = car_transaction.car_id;
      this.formData.driver_id = car_transaction.driver_id;
      this.formData.confirmation_note = car_transaction.confirmation_note;
    });

    this.carStore.fetch();
    this.driverStore.fetch();
  },
};
</script>
