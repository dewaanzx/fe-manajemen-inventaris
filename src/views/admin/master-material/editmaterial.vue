<template>
	<!-- Breadcrumb -->
  
	<section class="mt-4">
		<form @submit.prevent="confirmUpdate" class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9">
			<div class="">
			  <div class="grid md:flex md:flex-row md:justify-around gap-2">
				<span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
				  >Informasi Barang</span
				>
				<div class="grid gap-2 md:w-[80%]">
				  <div class="flex flex-col text-[12px] gap-1">
					<label for="" class="text-[14px] md:text-[16px]">Nama</label>
					<input
					  class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
					  type="text"
					  required
					  placeholder="Masukkan Nama Barang"
					  v-model="formData.name"
					/>
				  </div>
				  <div class="flex flex-col text-[12px] gap-1">
					<label for="" class="text-[14px] md:text-[16px]">Ukuran</label>
					<select
					  class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
					  v-model="formData.size"
					  required
					>
					  <option value="" disabled selected>Pilih Ukuran Barang</option>
					  <option v-for="option in sizeOptions" :key="option" :value="option">{{ option }}</option>
					</select>
				  </div>
				  <div class="flex flex-col text-[12px] gap-1">
					<label for="" class="text-[14px] md:text-[16px]">Kuantitas</label>
					<input
					  class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
					  type="number"
					  required
					  placeholder="Masukkan Kuantitas Barang"
					  v-model="formData.quantity"
					/>
				  </div>
				  <div>
					<label for="">Foto Barang</label>
					<label
					  for="imageinput"
					  class="flex flex-col items-center justify-center border-2 border-dashed md:rounded-[24px] border-[#131A29] rounded-md cursor-pointer hover:bg-slate-100 opacity-60 p-5 h-[400px]"
					>
					  <div class="grid justify-items-center space-y-2">
						<img src="../../../assets/camera.svg" alt="" />
					  </div>
					  <input
						type="file"
						class="file:hidden w-[45%] text-[11px] md:w-[6%]"
						id="imageinput"
						@change="handlePicture"
						accept=".jpg, .jpeg, .png"
					  />
					</label>
				  </div>
				</div>
			  </div>
			</div>
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
  import { useMaterialStore } from "../../../stores/material.store";
  
  export default {
	data() {
	  return {
		materialStore: useMaterialStore(),
		formData: {
		  name: null,
		  size: null,
		  quantity: null,
		  picture: null,
		},
		sizeOptions: ["1 M", "1,5 M", "2 M", "3 M", "5 M", "10 M", "15 M", "20 M", "Pigtail G655", "Pigtail G657", "X-KM", "10 KM", "20 KM", "30 KM", "40 KM", "80 KM","100 KM", "2 dB", "3 dB", "5 dB", "7 dB", "10 dB", "UPC3 dB", "M-F", "F-M"],
	  };
	},
	methods: {
	  goBack() {
		this.$router.go(-1);
	  },
	  confirmUpdate() {
		if (window.confirm("Apakah anda yakin ingin mengedit data?")) {
		  this.update();
		}
	  },
	  handlePicture(e) {
		const picture = e.target.files[0];
		this.formData.picture = picture;
	  },
	  async update() {
		const id = this.$route.params.id;
		let material = await this.materialStore.update(id, this.formData);
  
		if (material) {
		  this.$router.push("/admin/master-material");
		}
	  },
	},
	mounted() {
	  const id = this.$route.params.id;
	  this.materialStore.show(id).then(() => {
		const material = this.materialStore.material;
  
		this.formData.name = material.name;
		this.formData.size = material.size;
		this.formData.quantity = material.quantity;
	  });
	},
  };
  </script>
  