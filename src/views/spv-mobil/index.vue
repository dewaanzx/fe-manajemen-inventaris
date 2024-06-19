<template>
	<!-- ini pembungkus -->
	<div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-12">
		<!-- Card Informasi -->
		<div class="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
			<!-- bagian status pinjam mobil -->
			<div class="md:w-[80vw]">
				<span class="text-[18px] md:text-[24px]" style="line-height: 2em">Mobil</span>
				<swiper :pagination="{
					dynamicBullets: true,
				}" :modules="modules" class="mySwiper">
					<swiper-slide v-for="car_transaction in carTransactionStore.car_transactions">
						<!-- cardnya -->
						<div class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6">
							<div class="flex justify-between items-center">
								<div class="flex flex-col">
									<Span class="text-[18px] md:text-[27px] font-semibold pb-3"
										style="line-height: 1.2em">{{ car_transaction.destination }}
									</Span>
									<Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1">
										<img src="../../assets/calender.png "
											class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]" alt="" />
										{{ car_transaction.date_start }}
									</Span>
									<Span class="flex flex-row items-center text-[14px] md:text-[18px] gap-1">
										<img src="../../assets/time-line.png "
											class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]" alt="" />
										{{ car_transaction.time_start }}
									</Span>
								</div>
								<div>
									<button
										class="w-[15.5vmin] md:px-5 md:py-[6px] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg">
										{{ car_transaction.status }}
									</button>
								</div>
							</div>
							<!-- rectangle -->
							<div class="h-[2px] bg-[#D9D9D9]"></div>
							<!-- tombol ambil -->
							<div class="h-[5vmin] flex flex-row justify-between items-center">
								<span class="text-[11px] md:text-[12px]" style="line-height: 1.2em">Pengguna mengirimkan
									permintaan pinjaman, ayo konfirmasi</span>
									<button 
          @click="$router.push('/spv-mobil/detail-konfirmasi-mobil/' + car_transaction.id)" 
          class="p-1 md:px-4 md:py-2 bg-orange-400 hover:bg-orange-500 text-[10px] md:text-[14px] text-white rounded-[12px]"
        >
          Konfirmasi
        </button>
							</div>
						</div>
					</swiper-slide>
				</swiper>
				<!-- akhir card mobil -->
			</div>
			<!-- akhir informasi -->
		</div>
		<!-- fitur -->
		<div class="flex flex-col items-center justify-center gap-10 md:flex md:flex-row md:gap-10 rounded-[18px] p-10">
			<!-- konfirmasi mobil -->
			<button
				class="w-full md:w-[15vw] bg-[#C1E9FF] p-9 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
				@click="$router.push('/spv-mobil/konfirmasi-mobil/;')">
				<div
					class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#0C6898] rounded-full flex justify-center items-center">
					<img src="../../assets/pencil.svg" alt="" />
				</div>
				<div class="w-[20vw] md:w-[10vw] h-[4vh]">
					<p for="" class="text-[12px] md:text-[20px] leading-tight">
						Konfirmasi Mobil
					</p>
				</div>
			</button>
			<!-- rwiayat pinjam mobil -->
			<button
				class="w-full md:w-[15vw] bg-[#C1E9FF] p-9 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
				@click="$router.push('/spv-mobil/riwayat-pinjam-mobil/Semua')">
				<div
					class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#0C6898] rounded-full flex justify-center items-center">
					<img src="../../assets/car-side.svg" alt="" />
				</div>
				<div class="w-[20vw] h-[4vh] md:w-[10vw]">
					<p for="" class="text-[12px] md:text-[20px] leading-tight">
						Riwayat Pinjam Mobil
					</p>
				</div>
			</button>
			<!-- cek mobil -->
			<button
				class="w-full md:w-[15vw] bg-[#C1E9FF] p-9 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
				@click="$router.push('/spv-mobil/cek-mobil')">
				<div
					class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#0C6898] rounded-full flex justify-center items-center">
					<img src="../../assets/taskview.svg" alt="" />
				</div>
				<div class="w-[20vw] md:w-[10vw] h-[4vh]">
					<p for="" class="text-[12px] md:text-[20px] leading-tight">
						Cek Mobil
					</p>
				</div>
			</button>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useCarTransactionStore } from "../../stores/car_transaction.store";
import { useRoomTransactionStore } from "../../stores/room_transaction.store";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Pagination],
		};
	},
	data() {
		return {
			carTransactionStore: useCarTransactionStore(),
			formData: {
				date: null,
				time: null,
				destination: null,
			},
		};
	},
	mounted() {
		this.carTransactionStore.fetchByStatus("Dicek");
	},
};
</script>

<style>
.swiper {
	width: 95%;
	height: 90%;
}

.swiper-slide {
	font-size: 18px;
	background: #fff;
}
</style>

