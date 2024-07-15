<template>
	<section class="md:w-[75%] mx-auto flex flex-col gap-8">
	  <article class="flex flex-row flex-wrap justify-between gap-3 md:gap-14">
		<!-- materiald cek material -->
		<div
		  v-for="material in materialStore.materials"
		  :key="material.id"
		  class="flex flex-col gap-5 w-[45%] md:w-[20%] p-3 border rounded-xl justify-between"
		>
		  <div class="flex flex-col gap-[6px]">
			<img
			  :src="getImageUrl(material.picture)"
			  alt=""
			  class="w-[13vmax] h-[8vmax] rounded-lg mx-auto"
			  style="object-fit: cover"
			/>
			<span class="text-[14px] text-gray-800 leading-4">
			  {{ material.name }}
			</span>
		  </div>
		  <!-- rectangle -->
		  <div class="h-[1px] bg-[#D9D9D9]"></div>
		  <!-- Informasi tujuan apabila dipakai -->
		  <div class="flex flex-col leading-4 gap-1">
			<span class="mt-[-4px] text-[14px] text-gray-800" >Ukuran : {{ material.size }}</span>
			<span class="mt-[-4px] text-[14px] text-gray-800 mt-1" >Tersedia : {{ material.quantity }}</span>
		  </div>
		  <!-- button -->
		  <button
			@click="$router.push('/users/pengajuanmaterial/' + material.id)"
			class="text-[14px] bg-[#E26B00] text-white rounded-lg py-[6px]"
			v-if="material.quantity > 0"
		  >
			Ambil
		  </button>
		  <button
			@click="$router.push('/users/pengajuanmaterial/' + material.id)"
			class="text-[14px] bg-[#505050] text-white rounded-lg py-[6px]"
			v-if="material.quantity == 0"
			disabled
		  >
			Tidak Tersedia
		  </button>
		</div>
	  </article>
	</section>
  </template>
  
  <script>
  import { useMaterialStore } from "../../../stores/material.store";
  
  export default {
	data() {
	  return {
		materialStore: useMaterialStore(),
	  };
	},
	methods: {
	  getImageUrl(picture) {
		return `${picture}`;
	  },
	},
	beforeRouteEnter(to, from, next) {
	  const MaterialStore = useMaterialStore();
	  MaterialStore.fetch().then(() => {
		next(vm => {
		  vm.MaterialStore = MaterialStore;
		});
	  });
	},
  };
  </script>
  ../../../stores/material.store