<template>
  <article>
    <div
      v-for="car_transaction in carTransactionStore.car_transactions"
      class="border border-[#E5E5E5] gap-4 flex flex-col rounded-[24px] p-3 md:p-6 mt-[15px]"
    >
      <div class="flex justify-between items-center">
        <div class="flex flex-col gap-1">
          <Span
            class="text-[18px] md:text-[27px] font-semibold pb-3"
            style="line-height: 1.2em"
            >{{ car_transaction.destination }}
          </Span>
          <Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
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
        <div>
          <button
            class="w-[15.5vmin] md:px-5 md:py-[6px] bg-[#E5E5E5] text-[11px] md:text-[14px] rounded-[24px]"
          >
            Dicek
          </button>
        </div>
      </div>
      <!-- rectangle -->
      <div class="h-[2px] bg-[#D9D9D9]"></div>
      <!-- tombol ambil -->
      <div class="h-[5vmin] flex flex-row justify-between items-center">
        <span class="text-[11px] md:text-[12px]" style="line-height: 1.2em"
          >Pegawai telah mengambil barang, ayo konfirmasi</span
        >
        <button
          @click="$router.push('/admin/konfirmasi/konfirmasi/' + car_transaction.id)"
          class="p-1 md:px-4 md:py-2 bg-orange-400 hover:bg-orange-500 text-[10px] md:text-[14px] text-white rounded-[12px]"
        >
          Konfirmasi
        </button>
      </div>
    </div>
  </article>
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

    carTransactionStore.fetchByStatus("Dicek").then(() => {
      next(vm => {
        vm.status = status;
        vm.carTransactionStore = carTransactionStore;
      });
    });
  },
};
</script>
