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
					  Adwin fajar
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
					  Malang
					</p>
				  </div>
				  <div class="flex flex-col text-[12px] gap-1">
					<label for="" class="md:text-[16px]">Deskripsi</label>
					<p class="md:text-[14px] w-[90%]">Study banding</p>
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
					  <p class="md:text-[14px]">20 12 2023</p>
					</div>
					<div class="flex flex-col text-[12px] gap-1">
					  <label for="" class="md:text-[16px]">Jam</label>
					  <p class="md:text-[14px]">23.00</p>
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
					  <p class="md:text-[14px]">12 orang</p>
					</div>
					<div class="flex flex-col text-[12px] gap-1">
					  <label for="" class="md:text-[16px]">Sopir</label>
					  <p class="md:text-[14px]">tidak</p>
					</div>
				  </div>
				  <div class="text-[12px] flex flex-col gap-1">
					<label for="" class="md:text-[16px]">Deskripsi </label>
					<p class="md:text-[14px]">penumpang berbadan gemuk</p>
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
					  <a class="text-gray-600"> Dicek</a>
					  <a class="text-red-600"> Ditolak</a>
					  <a class="text-green-600"> Diterima</a>
					  <a class="text-orange-500"> Digunakan</a>
					  <a class="text-blue-600"> Selesai</a>
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
				src="../../../assets/car.png"
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
				  Kijang Innova
				</p>
				<p class="text-[12px] md:text-[14px] text-center md:text-left">
				  Mobil berwarna putih
				</p>
			  </div>
			  <!-- Kapasitas -->
			  <div class="flex flex-col">
				<p
				  class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
				>
				  Kapasitas
				</p>
				<p class="text-[12px] md:text-[14px] text-center md:text-left">
				  6 orang
				</p>
			  </div>
			  <!-- Nomor kendaraan -->
			  <div class="flex flex-col">
				<p
				  class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
				>
				  Nomor kendaraan
				</p>
				<p class="text-[12px] md:text-[14px] text-center md:text-left">
				  AB 22 XX
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </article>
	</section>
  </template>
  <script></script>