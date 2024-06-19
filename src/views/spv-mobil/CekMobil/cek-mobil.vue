<template>
	<section class="md:w-[75%] mx-auto flex flex-col gap-8">
	  <article class="flex flex-row flex-wrap justify-between gap-3 md:gap-14">
		<!-- card cek mobil -->
		<div
		  class="flex flex-col gap-5 w-[45%] md:w-[20%] p-3 border rounded-xl justify-between"
		>
		  <div class="flex flex-col gap-[6px]">
			<img
			  src="../../../assets/car.png"
			  alt=""
			  class="w-[13vmax] h-[8vmax] rounded-lg mx-auto"
			  style="object-fit: cover"
			/>
			<span class="text-[14px] text-gray-800 leading-4"
			  >Data Merk Mobil
			</span>
			<div class="flex flex-row gap-2">
			  <img src="../../../assets/bi_people.svg" alt="" />
			  <span class="text-[12px] text-gray-500">Data Kapasitas</span>
			</div>
		  </div>
  
		  <!-- rectangle -->
		  <div class="h-[1px] bg-[#D9D9D9]"></div>
  
		  <!-- Informasi tujuan apabila dipakai -->
		  <div class="flex flex-col leading-4 gap-1">
			<span class="mt-[-4px] text-[14px] text-gray-800">data tujuan</span>
			<span class="text-[12px] text-gray-500">data tanggal</span>
		  </div>
  
		  <!-- button -->
  
		  <!-- Jika mobil tidak terpakai maka tersedia -->
		  <button class="text-[14px] bg-[#E26B00] text-white rounded-lg py-[6px]">
			Tersedia
		  </button>
  
		  <!-- Jika mobil dipakai maka detail -->
		  <!-- Detail di direct ke router spv-mobil/riwayat-pinjam-mobil/detail bagian status digunakan -->
		  <button
			@click="$router.push('/spv-mobil/cek-mobil/detail-cek-mobil')"
			class="text-[14px] bg-[#E26B00] text-white rounded-lg py-[6px]"
		  >
			Detail
		  </button>
		</div>
	  </article>
	</section>
  </template>
  <script></script>