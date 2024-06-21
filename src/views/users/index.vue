<template>
  <!-- ini pembungkus -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-12">
    <!-- Card Informasi -->
    <div class="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
      <!-- bagian status pinjam mobil -->
      <div class="md:w-[80vw]">
        <span class="text-[18px] md:text-[24px]" style="line-height: 2em"
          >Material</span
        >
        <swiper
          :pagination="{
            dynamicBullets: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="car_transaction in carTransactionStore.car_transactions"
          >
            <!-- cardnya -->
            <div
              class="border border-[#666666] gap-4 flex flex-col rounded-[18px] p-3 md:p-6"
            >
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <Span
                    class="text-[18px] md:text-[27px] font-semibold pb-3"
                    style="line-height: 1.2em"
                    >{{ car_transaction.destination }}
                  </Span>
                  <Span
                    class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
                  >
                    <img
                      src="../../assets/calender.png "
                      class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
                      alt=""
                    />
                    {{ car_transaction.date_start }}
                  </Span>
                  <Span
                    class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
                  >
                    <img
                      src="../../assets/time-line.png "
                      class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
                      alt=""
                    />
                    {{ car_transaction.time_start }}
                  </Span>
                </div>
                <!-- <div>
                  <button
                    class="w-[15.5vmin] md:px-5 md:py-[6px] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-lg"
                  >
                    {{ car_transaction.status }}
                  </button>
                </div> -->
              </div>
              <!-- rectangle -->
              <div class="h-[2px] bg-[#D9D9D9]"></div>
              <!-- tombol ambil -->
              <div class="h-[5vmin] flex flex-row justify-between items-center">
                <span
                  class="text-[11px] md:text-[12px]"
                  style="line-height: 1.2em"
                  >Barang telah diambil</span
                >
                <button
                  class="p-1 md:px-4 md:py-2 bg-orange-400 hover:bg-orange-500 text-[10px] md:text-[14px] text-white rounded-[16px]"
                  @click="$router.push('/users/ambil-mobil/:id')"
                >
                  Detail
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- akhir card mobil -->
      </div>

      <!-- akhir card ruangan -->
	   
      <!-- akhir informasi -->
    </div>
    <!-- fitur -->
    <div class="flex justify-center items-center">
  <div class="grid grid-cols-2 md:grid-cols-3 gap-20 rounded-[18px] p-10">
    <!-- pinjam mobil -->
    <button
      class="w-[25vw] md:w-[15vw] bg-[#D3E86A] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
      @click="$router.push('/users/pengajuanmobil')"
    >
      <div
        class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#25282B] rounded-full flex justify-center items-center"
      >
        <img src="../../assets/plus.svg" alt="" />
      </div>
      <div class="w-[20vw] md:w-[10vw] h-[4vh]">
        <p class="text-[12px] md:text-[20px] leading-tight">
          Ambil Material
        </p>
      </div>
    </button>
    <!-- riwayat pinjam mobil -->
    <button
      class="w-[25vw] md:w-[15vw] bg-[#D3E86A] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
      @click="$router.push('/users/riwayat-pinjam-mobil/Semua')"
    >
      <div
        class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#25282B] rounded-full flex justify-center items-center"
      >
        <img src="../../assets/pensil.svg" alt="" />
      </div>
      <div class="w-[20vw] h-[4vh] md:w-[10vw]">
        <p class="text-[12px] md:text-[20px] leading-tight">
          Riwayat Pengambilan
        </p>
      </div>
    </button>
    <!-- pinjam ruangan -->
    <button
      @click="$router.push('/users/pinjam-ruangan')"
      class="w-[25vw] md:w-[15vw] bg-[#D3E86A] p-3 md:py-12 md:px-6 rounded-lg flex flex-col gap-3 items-center hover:bg-blue-300"
    >
      <div
        class="w-[12vw] h-[12vw] md:w-[5vw] md:h-[5vw] bg-[#25282B] rounded-full flex justify-center items-center"
      >
        <img src="../../assets/monitoring.svg" alt="" />
      </div>
      <div class="w-[20vw] md:w-[10vw] h-[4vh]">
        <p class="text-[12px] md:text-[20px] leading-tight">
          Monitoring Material
        </p>
      </div>
    </button>
  </div>
</div>


    <!-- Report -->
    <div
      class="flex flex-col border gap-5 md:gap-9 rounded-[18px] md:rounded-[32px] p-10 md:px-20 md:py-12 shadow-sm"
    >
      <!-- toogle -->
      <div class="p-2 md:p-4 text-[14px] md:text-[24px] mx-auto">
        <button class="p-2 md:px-6 rounded-lg">Harian</button>
        <button class="p-2 md:px-6 rounded-lg">Mingguan</button>
        <button class="p-2 md:px-6 rounded-lg">Bulanan</button>
      </div>
      <div class="md:py-7 flex flex-col gap-4 md:flex-row justify-between">
        <!-- report mobil -->
        <div
          class="bg-[#C1E9FF] px-[26px] py-[14px] md:px-[36px] md:py-[24px] flex flex-col gap-5 md:gap-6 rounded-xl md:rounded-[20px]"
        >
          <Span
            class="text-[12px] md:text-[28px] mx-auto"
            style="line-height: 1.2em"
            >Mobil</Span
          >
          <div class="flex flex-row justify-between md:gap-9">
            <div class="flex flex-col justify-center items-center">
              <span class="text-[16px] md:text-[25px]">10</span
              ><label class="text-[11px] md:text-[16px]" for="">Pinjaman</label>
            </div>
            <div class="bg-[#D9D9D9] w-1"></div>
            <div class="flex flex-col justify-center items-center">
              <span class="text-[16px] md:text-[25px]">8</span
              ><label class="text-[11px] md:text-[16px]" for="">Diterima</label>
            </div>
            <div class="bg-[#D9D9D9] w-1"></div>
            <div class="flex flex-col justify-center items-center">
              <span class="text-[16px] md:text-[25px]">2</span
              ><label class="text-[11px] md:text-[16px]" for="">Ditolak</label>
            </div>
          </div>
        </div>
        <!-- report ruangan -->
        <div
          class="bg-[#FDEDCA] px-[26px] py-[14px] md:px-[36px] md:py-[24px] flex flex-col gap-5 md:gap-6 rounded-xl md:rounded-[20px]"
        >
          <Span
            class="text-[12px] md:text-[28px] mx-auto"
            style="line-height: 1.2em"
            >Mobil</Span
          >
          <div class="flex flex-row justify-between md:gap-9">
            <div class="flex flex-col justify-center items-center">
              <span class="text-[16px] md:text-[25px]">10</span
              ><label class="text-[11px] md:text-[16px]" for="">Pinjaman</label>
            </div>
            <div class="bg-[#D9D9D9] w-1"></div>
            <div class="flex flex-col justify-center items-center">
              <span class="text-[16px] md:text-[25px]">8</span
              ><label class="text-[11px] md:text-[16px]" for="">Diterima</label>
            </div>
            <div class="bg-[#D9D9D9] w-1"></div>
            <div class="flex flex-col justify-center items-center">
              <span class="text-[16px] md:text-[25px]">2</span
              ><label class="text-[11px] md:text-[16px]" for="">Ditolak</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
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
      roomTransactionStore: useRoomTransactionStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
      },
    };
  },
  methods: {
    async create() {
      let car_transaction = await this.carTransactionStore.add(this.formData);

      if (car_transaction) {
        this.$router.push("/users");
      }
    },
  },
  mounted() {
    this.carTransactionStore.fetchByStatus("Diterima");
    this.roomTransactionStore.fetchByStatus("Diterima");
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

  /* Center slide text vertically */
}
</style>
