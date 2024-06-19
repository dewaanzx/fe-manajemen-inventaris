<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-8">
    <nav class="flex" aria-label="Breadcrumb">
				<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
					<li class="inline-flex items-center">
						<button @click="$router.push('/spv-mobil')"
							class="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-black">
							Home
						</button>
					</li>
					<li>
						<div class="flex items-center">
							<svg class="rtl:rotate-180 w-3 h-3 text-stone-500 mx-1" aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="m1 9 4-4-4-4" />
							</svg>
							<button @click="$router.push('/spv-mobil/riwayat-pinjam-mobil')"
							class="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-black">
							Riwayat
						</button>
						</div>
					</li>
					<li aria-current="page">
						<div class="flex items-center">
							<svg class="rtl:rotate-180 w-3 h-3 text-stone-500 mx-1" aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="m1 9 4-4-4-4" />
							</svg>
							<span
								class="ms-1 text-sm font-medium text-stone-500 md:ms-2 dark:text-stone-500">Detail</span>
						</div>
					</li>
				</ol>
			</nav>

    <!-- bagian form request -->
    <form
      action=""
      class="p-3 md:p-9 rounded-lg md:rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5"
    >
      <!-- form pinjaman -->
      <div class="">
        <div class="grid md:flex md:flex-row md:justify-around gap-2">
          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
            >Pinjaman</span
          >
          <div class="grid gap-2 md:w-[80%]">
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Tujuan</label>
              <p class="md:text-[14px]" style="line-height: 1.2em">Surakarta</p>
            </div>
            <div class="flex flex-col text-[12px] gap-1">
              <label for="" class="md:text-[16px]">Deskripsi</label>
              <p class="md:text-[14px] w-[90%]">Untuk study banding</p>
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
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Tanggal</label>
                <p class="md:text-[14px]">17 Mei 2013</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Jam</label>
                <p class="md:text-[14px]">20.00</p>
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
            <div class="grid grid-cols-2 gap-2">
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Penumpang</label>
                <p class="md:text-[14px]">10 orang</p>
              </div>
              <div class="flex flex-col text-[12px] gap-1">
                <label for="" class="md:text-[16px]">Sopir</label>
                <p class="md:text-[14px]">Ya</p>
                <p class="md:text-[14px]">Tidak</p>
              </div>
            </div>
            <div class="text-[12px] flex flex-col gap-1">
              <label for="" class="md:text-[16px]">Deskripsi </label>
              <p class="md:text-[14px]">penumpangnya fiktif</p>
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
                <a class="text-green-600"> Status</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- box alert -->
    <div
      class="rounded-lg md:rounded-[36px] border border-[#D9D9D9] p-4 md:p-12 text-[11px] md:text-[16px] flex justify-center"
    >
      <p>
        Data mobil akan muncul jika permintaan peminjaman
        <span class="text-green-500 font-semibold">Diterima</span>
      </p>
    </div>

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
            Avanza
          </p>
          <p class="text-[12px] md:text-[14px] text-center md:text-left">
            Mobil berwarna putih dengan roda yang bundar
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
            12 orang
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
            AB 12 XXX
          </p>
        </div>
      </div>
    </div>

    <!-- box bukti ambil mobil -->
    <div
      class="rounded-lg md:rounded-[36px] border border-[#D9D9D9] p-4 md:p-9 flex flex-col md:flex-row md:justify-around gap-3 md:gap-2 text-[12px] md:text-[16px]"
    >
      <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
        >Bukti ambil mobil</span
      >
      <div class="flex flex-col gap-3 md:gap-9 md:w-[80%]">
        <div>
          <!-- jam -->
          <span>Jam</span>
          <p class="md:text-[14px]">12.00</p>
        </div>
        <div>
          <!-- Upload foto -->
          <span>Foto diri</span>
          <label class="flex flex-col rounded-lg">
            <div class="">
              <img
                src="../../../assets/person.png"
                alt=""
                style="object-fit: cover"
                class="rounded-lg h-[20vmax] w-full"
              />
            </div>
          </label>
        </div>
        <div>
          <!-- Foto SIM -->
          <span>Foto SIM</span>
          <label class="flex flex-col rounded-lg">
            <div class="">
              <img
                src="../../../assets/person.png"
                alt=""
                style="object-fit: cover"
                class="rounded-lg h-[20vmax] w-full"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
