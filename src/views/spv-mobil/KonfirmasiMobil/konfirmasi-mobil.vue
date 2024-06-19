<template>
  <!-- main content -->
  <div class="w-[80vw] mx-auto text-pinjamin flex flex-col gap-2">
    <div class="p-3 md:p-2 flex flex-col gap-5">
      <!-- BreadCrumb Nav -->
      <nav class="flex" aria-label="Breadcrumb">
        <ol
          class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
        >
          <li class="inline-flex items-center">
            <button
              @click="$router.push('/spv-mobil')"
              class="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-black"
            >
              Home
            </button>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-stone-500 mx-1"
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
                class="ms-1 text-sm font-medium text-stone-500 md:ms-2 dark:text-stone-500"
                >Konfirmasi</span
              >
            </div>
          </li>
        </ol>
      </nav>
      <article>
	  <div
		v-for="car_transaction in carTransactionStore.car_transactions"
		class="border border-[#E5E5E5] gap-4 flex flex-col rounded-[24px] p-3 md:p-6 mt-[15px]"
	  >
		<div class="flex justify-between items-center">
		  <div class="flex flex-col gap-1">
			<Span
			  class="text-[18px] md:text-[27px] font-semibold pb-3"
			  style="line-height: 1.2em"
			  >{{ car_transaction.destination }}
			</Span>
			<Span
			  class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
			>
			  <img
				src="../../../assets/calender.png "
				class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
				alt=""
			  />
			  {{ car_transaction.date_start }}
			</Span>
			<Span
			  class="flex flex-row items-center text-[14px] md:text-[18px] gap-1"
			>
			  <img
				src="../../../assets/time-line.png "
				class="w-[2.3333vmax] h-[2.3333vmax] md:w-[28px] md:h-[28px]"
				alt=""
			  />
			  {{ car_transaction.time_start }}
			</Span>
		  </div>
		  <div>
			<button
			  class="w-[15.5vmin] md:px-5 md:py-[6px] bg-[#E5E5E5] text-[11px] md:text-[14px] rounded-[24px]"
			>
			  Dicek
			</button>
		  </div>
		</div>
		<!-- rectangle -->
		<div class="h-[2px] bg-[#D9D9D9]"></div>
		<!-- tombol ambil -->
		<div class="h-[5vmin] flex flex-row justify-between items-center">
		  <span class="text-[11px] md:text-[12px]" style="line-height: 1.2em"
			>Pengguna mengirimkan permintaan pinjaman, ayo konfirmasi</span
		  >
		  <button
			@click="$router.push('/spv-mobil/detail-konfirmasi-mobil/' + car_transaction.id)"
			class="p-1 md:px-4 md:py-2 bg-orange-400 hover:bg-orange-500 text-[10px] md:text-[14px] text-white rounded-[12px]"
		  >
			Konfirmasi
		  </button>
		</div>
	  </div>
	</article>
    </div>
  </div>
</template>

<script>
import { useCarTransactionStore } from "../../../stores/car_transaction.store";
import { useRoute, RouterLink } from "vue-router";

export default {
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
  methods: {
    async create() {
      let car_transaction = await this.carTransactionStore.add(this.formData);

      if (car_transaction) {
        this.$router.push("/users");
      }
    },
  },
  mounted() {
    const status = this.$route.params.status;
    this.carTransactionStore.fetchByStatus("Dicek");
  },
};
</script>
