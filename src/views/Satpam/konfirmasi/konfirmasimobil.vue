<template>
  <section class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-12">
    <article
      v-for="car_transaction in carTransactionStore.car_transactions"
      class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6"
    >
      <!-- Informasi kepergian -->
      <div class="flex flex-row">
        <div class="m-2 w-[60%] md:w-[20%] md:flex md:items-start">
          <div class="flex flex-col items-center">
            <img
              style="object-fit: cover"
              class="h-[6vmax] w-[15vmax] rounded-md"
              :src="'https://api.pinjamin.appmedia.id/uploads/cars/' + car_transaction.car_picture"
              alt=""
            />
            <span class="text-[12px] md:text-[16px] md:mt-2">{{ car_transaction.car_name }}</span>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <Span
            class="text-[18px] md:text-[27px] font-semibold pb-1 md:pb-3"
            style="line-height: 1.2em"
            >{{ car_transaction.destination }}
          </Span>
          <Span
            class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
          >
            <img
              src="../../../assets/calender.png "
              class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
              alt=""
            />
            {{ car_transaction.date_start }}
          </Span>
          <Span
            class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
          >
            <img
              src="../../../assets/time-line.png "
              class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
              alt=""
            />
            {{ car_transaction.time_start }}
          </Span>
        </div>
        <div class="flex items-center justify-end w-[40%] md:w-[30%]">
          <button
            class="w-[17.5vmin] h-[6vmin] md:px-5 md:py-[6px] bg-[#FDEDCA] text-[11px] md:text-[14px] text-[#E26B00] rounded-[24px]"
          >
            {{ car_transaction.status }}
          </button>
        </div>
      </div>
      <!-- rectangle -->
      <div class="h-[2px] bg-[#D9D9D9]"></div>
      <!-- tombol ambil -->
      <div class="h-[5vmin] flex flex-row justify-between items-center">
        <span class="text-[11px] md:text-[12px]" style="line-height: 1.2em"
          >Cek secara berkala jika mobil sudah kembali</span
        >
        <button
          @click="$router.push('/satpam/konfirmasi-mobil/detail/' + car_transaction.id )"
          class="p-1 md:px-4 md:py-2 bg-orange-400 hover:bg-orange-500 text-[10px] md:text-[14px] text-white rounded-[16px]"
        >
          Konfirmasi
        </button>
      </div>
    </article>

  </section>
</template>
<script>
import { useCarTransactionStore } from "../../../stores/car_transaction.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      carTransactionStore: useCarTransactionStore(),
    };
  },
  beforeRouteEnter(to, from, next) {
    const carTransactionStore = useCarTransactionStore();

    carTransactionStore.fetchByStatus("Digunakan").then(() => {
      next(vm => {
        vm.carTransactionStore = carTransactionStore;
      });
    });
  },
};
</script>
