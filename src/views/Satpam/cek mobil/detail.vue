<template>
  <section class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-12">
    <article>
      <div class="mx-auto text-pinjamin flex flex-col gap-8">
        <!-- bagian form request -->

        <!-- box mobil -->
          <div class="rounded-lg md:rounded-[36px] border border-[#D9D9D9] p-4 md:p-9 flex flex-col md:flex-row gap-3 md:gap-2">
            <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
              >Informasi Mobil</span
            >
            <div class="grid gap-2 md:w-[80%]">
              <div class="flex flex-col text-[12px] gap-1">
              <p
                class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
              >
                Nama
              </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
              <p class="text-[12px] md:text-[14px] text-center md:text-left">
                {{ carStore.cars.name }}
              </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
              <p
                class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
              >
                Nomor Polisi
              </p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
              <p class="text-[12px] md:text-[14px] text-center md:text-left">
                {{ carStore.cars.license }}
              </p>
              </div>
            <div>
              <div class="flex flex-col text-[12px] gap-1">
              <p
                class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
              >
                Foto Mobil
              </p>
              </div>
            <img
              :src="'http://api.pinjamin.appmedia.id/uploads/cars/' + carStore.cars.picture"
              class="w-full rounded-md md:rounded-[20px] md:rounded-[24px] hover:bg-slate-100"
              style="object-fit: cover"
              alt=""
            />
            </div>
            </div>
          </div>
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
  mounted() {
    const id = this.$route.params.id;
    this.carStore.show(id);
  },
};
</script>
