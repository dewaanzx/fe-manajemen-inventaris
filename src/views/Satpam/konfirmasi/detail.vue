<template>
  <section class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-12">

    <article>
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
                    {{ carTransactionStore.car_transactions.borrower }}
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
                  <label for="" class="md:text-[16px]">Tujuan</label>
                  <p class="md:text-[14px]" style="line-height: 1.2em">
                    {{ carTransactionStore.car_transactions.destination }}
                  </p>
                </div>
                <div class="flex flex-col text-[12px] gap-1">
                  <label for="" class="md:text-[16px]">Deskripsi</label>
                  <p class="md:text-[14px] w-[90%]">{{ carTransactionStore.car_transactions.description }}</p>
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
                    <p class="md:text-[14px]">{{ carTransactionStore.car_transactions.date_start }}</p>
                  </div>
                  <div class="flex flex-col text-[12px] gap-1">
                    <label for="" class="md:text-[16px]">Jam</label>
                    <p class="md:text-[14px]">{{ carTransactionStore.car_transactions.time_start }}</p>
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
                    <p class="md:text-[14px]">{{ carTransactionStore.car_transactions.passanger }} orang</p>
                  </div>
                  <div class="flex flex-col text-[12px] gap-1">
                    <label for="" class="md:text-[16px]">Sopir</label>
                    <p class="md:text-[14px]" v-if="carTransactionStore.car_transactions.driver == 1">Pakai</p>
                    <p class="md:text-[14px]" v-if="carTransactionStore.car_transactions.driver == 0">Tidak Pakai</p>
                  </div>
                </div>
                <div class="text-[12px] flex flex-col gap-1">
                  <label for="" class="md:text-[16px]">Deskripsi </label>
                  <p class="md:text-[14px]">{{ carTransactionStore.car_transactions.passanger_description }}</p>
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
                    carTransactionStore.car_transactions.status == 'Diterima'
                      ? 'text-green-600'
                      : carTransactionStore.car_transactions.status == 'Ditolak'
                      ? 'text-red-600'
                      : carTransactionStore.car_transactions.status == 'Dicek'
                      ? 'text-gray-600'
                      : carTransactionStore.car_transactions.status == 'Selesai'
                      ? 'text-gray-600'
                      : carTransactionStore.car_transactions.status ==
                        'Digunakan'
                      ? 'text-orange-400'
                      : ''
                  "
                >
                  {{ carTransactionStore.car_transactions.status }}</a
                >
              </p>
                </div>
              </div>
            </div>
          </div>
        </form>

        <!-- box mobil -->
        <div
          class="rounded-lg md:rounded-[36px] border border-[#D9D9D9] p-4 md:p-9 flex flex-col md:flex-row gap-3 md:gap-2"
        >
          <div class="w-[50%] md:w-[20%] h-[12vmax] rounded-sm m-auto md:m-0">
            <img
              :src="'https://api.pinjamin.appmedia.id/uploads/cars/' + carTransactionStore.car_transactions.car_picture"
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
                {{ carTransactionStore.car_transactions.car_name }}
              </p>
            </div>
            <!-- Kapasitas -->
            <!-- Nomor kendaraan -->
            <div class="flex flex-col">
              <p
                class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
              >
                Nomor kendaraan
              </p>
              <p class="text-[12px] md:text-[14px] text-center md:text-left">
                {{ carTransactionStore.car_transactions.car_license }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
    <article>
      <form
        @submit.prevent="confirmReturn"
        class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9"
      >
        <!-- form pinjaman -->
        <div class="">
          <div class="grid md:flex md:flex-row md:justify-around gap-2">
            <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
              >Konfirmasi Pengembalian
            </span>
            <div class="grid gap-2 md:w-[80%]">
              <div class="grid grid-rows-1 gap-2 w-[100%] md:w-[80%]">
                <div class="grid grid-cols-4 gap-2">
                  <div class="flex flex-col text-[12px] gap-1">
                    <label for="" class="md:text-[16px]">Tanggal</label>
                      <input
                        class="rounded-lg md:w-[100%] h-[3vmax] px-3 border border-[#D9D9D9] text-[14px] md:text-[16px]"
                        type="date"
                        required
                        v-model="formData.date"
                      />
                  </div>
                  <div class="flex flex-col text-[12px] gap-1">
                    <label for="" class="md:text-[16px]">Jam</label>
                      <input
                        class="rounded-lg w-[100%] h-[3vmax] text-[14px] md:text-[16px] px-3 border border-[#D9D9D9]"
                        type="time"
                        required
                        v-model="formData.time_return"
                      />
                  </div>
                </div>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="text-[14px] md:text-[16px]">Catatan</label>
                <textarea
                  class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9] text-[14px] md:text-[16px]"
                  required
                  cols="30"
                  rows="10"
                  placeholder="Deskripsi tujuan anda"
                  v-model="formData.return_note"
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
          <button class="w-[25%] rounded-md md:w-[10%]">Batal</button>
          <button
            class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[10%]"
          >
            Konfirmasi
          </button>
        </div>
      </form>
    </article>
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
        time_return: null,
        note_return: null,
      },
    };
  },  
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    confirmReturn() {
      if (window.confirm("Apakah anda yakin ingin mengkonfirmasi data?")) {
        this.return();
      }
    },
    async return() {
      const id = this.$route.params.id;
      let car_transaction = await this.carTransactionStore.return(id, this.formData);

      if (car_transaction) {
        this.$router.push("/satpam/konfirmasi-mobil");
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.carTransactionStore.show(id).then(() => {
      const car_transaction = this.carTransactionStore.car_transactions;
      this.carStore.fetch(car_transaction.car_id);
    });

  },
};
</script>
