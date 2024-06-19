<template>
  <!-- main content -->
  <section class="mt-4">
      <form @submit.prevent="confirmCreate" class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9">
	      <div class="">
	        <div class="grid md:flex md:flex-row md:justify-around gap-2">
	          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
	            >Informasi Sopir</span
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
		            {{ driverStore.drivers.name }}
		          </p>
	            </div>
	          <div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p
		            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
		          >
		            Foto Sopir
		          </p>
	            </div>
		        <img
		          :src="'http://api.pinjamin.appmedia.id/uploads/drivers/' + driverStore.drivers.picture"
		          class="w-full rounded-md md:rounded-[20px] md:rounded-[24px] hover:bg-slate-100"
		          style="object-fit: cover"
		          alt=""
		        />
	          </div>
	          </div>
	        </div>
	      </div>
      </form>
  </section>
</template>
<script>
import { useDriverStore } from "../../../stores/driver.store";

export default {
  data() {
    return {
      driverStore: useDriverStore(),
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.driverStore.show(id);
  },
};
</script>
