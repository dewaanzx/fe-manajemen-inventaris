<template>
  <section class="md:w-[75%] mx-auto flex flex-col gap-8">
    <article class="flex flex-row flex-wrap justify-between gap-3 md:gap-14">
      <!-- card cek mobil -->
      <div
        v-for="car in carStore.cars"
        class="flex flex-col gap-5 w-[45%] md:w-[20%] p-3 border rounded-xl justify-between"
      >
        <div class="flex flex-col gap-[6px]">
          <img
            :src="'https://api.pinjamin.appmedia.id/uploads/cars/' + car.picture"
            alt=""
            class="w-[13vmax] h-[8vmax] rounded-lg mx-auto"
            style="object-fit: cover"
          />
          <span class="text-[14px] text-gray-800 leading-4"
            >{{ car.name }}
          </span>
        </div>

        <!-- rectangle -->
        <div class="h-[1px] bg-[#D9D9D9]"></div>

        <!-- Informasi tujuan apabila dipakai -->
        <div class="flex flex-col leading-4 gap-1">
          <span class="mt-[-4px] text-[14px] text-gray-800" v-if="car.availability == 0">Sedang Digunakan</span>
          <span class="mt-[-4px] text-[14px] text-gray-800" v-if="car.availability == 1">Tersedia</span>
        </div>

        <!-- button -->

        <!-- Jika mobil dipakai maka detail -->
        <!-- Detail di direct ke router satpam/riwayat-pinjam-mobil/detail bagian status digunakan -->
        <button
          @click="$router.push('/satpam/cek-mobil/detail/' + car.id)"
          class="text-[14px] bg-[#E26B00] text-white rounded-lg py-[6px]"
        >
          Detail
        </button>
      </div>
    </article>
  </section>
</template>
<script>
import { useCarStore } from "../../../stores/car.store";

export default {
  data() {
    return {
      carStore: useCarStore(),
    };
  },
  beforeRouteEnter(to, from, next) {
    const CarStore = useCarStore();

    CarStore.fetch().then(() => {
      next(vm => {
        vm.CarStore = CarStore;
      });
    });
  },
};
</script>
