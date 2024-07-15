<template>
	<!-- main content -->
	<section class="mt-4">
	  <div class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9">
		<div class="">
		  <div class="grid md:flex md:flex-row md:justify-around gap-2">
			<span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]">Informasi Material</span>
			<div class="grid gap-2 md:w-[80%]">
			  <div class="flex flex-col text-[12px] gap-1">
				<p class="text-[14px] md:text-[16px] text-center md:text-left font-medium">Nama</p>
			  </div>
			  <div class="flex flex-col text-[12px] gap-1">
				<p class="text-[12px] md:text-[14px] text-center md:text-left">{{ material.name }}</p>
			  </div>
			  <div class="flex flex-col text-[12px] gap-1">
				<p class="text-[14px] md:text-[16px] text-center md:text-left font-medium">Ukuran</p>
			  </div>
			  <div class="flex flex-col text-[12px] gap-1">
				<p class="text-[12px] md:text-[14px] text-center md:text-left">{{ material.size }}</p>
			  </div>
			  <div class="flex flex-col text-[12px] gap-1">
				<p class="text-[14px] md:text-[16px] text-center md:text-left font-medium">Kuantitas</p>
			  </div>
			  <div class="flex flex-col text-[12px] gap-1">
				<p class="text-[12px] md:text-[14px] text-center md:text-left">{{ material.quantity }}</p>
			  </div>
			  <div>
				<div class="flex flex-col text-[12px] gap-1">
				  <p class="text-[14px] md:text-[16px] text-center md:text-left font-medium">Gambar Material</p>
				</div>
				<img
                  :src="'http://localhost:8080/uploads/materials/' + material.picture"
				  class="w-full rounded-md md:rounded-[20px] md:rounded-[24px] hover:bg-slate-100"
				  style="object-fit: cover"
				  alt="Material Picture"
				/>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</section>
  </template>
  
  <script>
  import { useMaterialStore } from "../../../stores/material.store";
  
  export default {
	data() {
	  return {
		materialStore: useMaterialStore(),
		material: {
		  name: '',
		  size: '',
		  quantity: '',
		  picture: '',
		},
	  };
	},
	mounted() {
	  const id = this.$route.params.id;
	  this.materialStore.show(id).then(() => {
		this.material = this.materialStore.material;
	  });
	},
  };
  </script>
  