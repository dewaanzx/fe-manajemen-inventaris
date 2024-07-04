<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-6 md:gap-8">
    <nav class="flex" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <button
            @click="$router.push('/users')"
            class="inline-flex items-center text-sm md:text-lg text-black hover:text-blue-500 dark:text-black dark:hover:text-blue-500"
          >
            Home
          </button>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="rtl:rotate-180 w-3 h-3 text-black mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              class="ms-1 text-sm md:text-lg text-black md:ms-2 dark:text-black"
              >Riwayat</span
            >
          </div>
        </li>
      </ol>
    </nav>
    <div>
      <div class="flex flex-col gap-4">
        <!-- search bar -->
        <form
          action=""
          class="md:w-[30%] border border-[#e5e5e5] rounded-full px-3 py-1 md:px-2 md:py-2 flex flex-row gap-3 shadow-sm"
        >
          <img src="../../assets/search-alt-2.svg" alt="" />
          <input
            type="text"
            placeholder="materiali riwayat "
            class="text-[12px] md:text-[16px] focus:outline-none w-[100%]"
          />
        </form>
        <div class="flex flex-wrap gap-3 justify-center md:justify-start">
          <RouterLink :to="'/users/riwayat-ambil-material/Semua'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Semua')"
              :class="
                $route.params.status == 'Semua'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Semua
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-ambil-material/Dicek'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Dicek')"
              :class="
                $route.params.status == 'Dicek'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Dicek
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-ambil-material/Ditolak'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Ditolak')"
              :class="
                $route.params.status == 'Ditolak'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Ditolak
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-ambil-material/Diterima'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Diterima')"
              :class="
                $route.params.status == 'Diterima'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Diterima
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-ambil-material/Digunakan'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Digunakan')"
              :class="
                $route.params.status == 'Digunakan'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Digunakan
            </button>
          </RouterLink>
          <RouterLink :to="'/users/riwayat-ambil-material/Selesai'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Selesai')"
              :class="
                $route.params.status == 'Selesai'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Selesai
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Bagian List -->
    <div class="grid gap-4 md:gap-6 text-[14px] md:text-[18px]">
      <!-- materiald list -->
      <RouterLink
        class="w-full p-4 md:px-9 md:py-5 border border-[#e5e5e5] rounded-lg md:rounded-[24px] flex justify-between shadow-sm"
        v-for="material_transaction in materialTransactionStore.material_transactions"
        :to="'/users/riwayat-ambil-material-detail/' + material_transaction.id"
      >
        <div class="w-[75%] flex flex-col gap-1">
          <p style="line-height: 1.2em">{{ material_transaction.destination }}</p>
          <span
            class="flex items-center gap-3 text-[12px] md:text-[14px] text-[#aaa]"
            ><img
              src="../../../assets/calender.png"
              class="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
              alt=""
            />{{ material_transaction.date_start }}</span
          >
          <span
            class="flex items-center gap-3 text-[12px] md:text-[14px] text-[#aaa]"
            ><img
              src="../../../assets/time-line.png"
              class="w-[14px] h-[14px] md:w-[16px] md:h-[16px]"
              alt=""
            />{{ material_transaction.time_start }}</span
          >
        </div>
        <div class="flex items-center">
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#EEFFEE] text-[11px] md:text-[14px] text-[#008000] rounded-full"
            v-if="material_transaction.status == `Diterima`"
          >
            Diterima
          </button>
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#E5E5E5] text-[11px] md:text-[14px] text-[#404040] rounded-full"
            v-if="material_transaction.status == `Dicek`"
          >
            Dicek
          </button>
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#FFD1D1] text-[11px] md:text-[14px] text-[#d80000] rounded-full"
            v-if="material_transaction.status == `Ditolak`"
          >
            Ditolak
          </button>
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#FDEDCA] text-[10px] md:text-[14px] text-orange-500 rounded-full"
            v-if="material_transaction.status == `Digunakan`"
          >
            Digunakan
          </button>
          <button
            class="w-[15.5vmin] md:w-[15.5vmin] md:h-[5vh] bg-[#C1E9FF] text-[11px] md:text-[14px] text-[#003754] rounded-full"
            v-if="material_transaction.status == `Selesai`"
          >
            Selesai
          </button>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      formData: {
        date: null,
        time: null,
        destination: null,
      },
    };
  },
  methods: {
    async create() {
      let material_transaction = await this.materialTransactionStore.add(this.formData);

      if (material_transaction) {
        this.$router.push("/users");
      }
    },
    fetchByStatus(status) {
      this.materialTransactionStore.fetchByStatus(status);
    },
  },
  mounted() {
    const status = this.$route.params.status;
    this.materialTransactionStore.fetchByStatus(status);
  },
};
</script>
../../../stores/material_transaction.store