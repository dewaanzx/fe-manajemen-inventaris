<template>
  <section>
    <header class="flex flex-col gap-3 md:flex-row md:gap-x-12">
      <!-- Bagian report permintaan peminjaman -->
      <div
        class="p-4 w-[75%] md:w-[30vh] shadow-sm rounded-[24px] border-2 flex flex-col gap-3"
      >
        <span class="text-[14px]" style="line-height: 1.2em">
          Permintaan Peminjaman</span
        >
        <div class="flex flex-row justify-between">
          <P class="text-[34px]"> {{ countTransactionStore.count_transactions.dicek }}</P>
          <div class="bg-[#C1E9FF] p-4 rounded-full">
            <img src="../../../assets/pinjaman.svg " class="" alt="" />
          </div>
        </div>
      </div>
      <!-- Bagian report permintaan diterima -->
      <div
        class="p-4 w-[75%] md:w-[30vh] shadow-sm rounded-[24px] border-2 flex flex-col gap-3"
      >
        <span class="text-[14px]" style="line-height: 1.2em">
          Permintaan Diterima</span
        >
        <div class="flex flex-row justify-between">
          <P class="text-[34px]"> {{ countTransactionStore.count_transactions.diterima }}</P>
          <div class="bg-[#EEFFEE] p-4 rounded-full">
            <img src="../../../assets/diterima.svg " class="" alt="" />
          </div>
        </div>
      </div>
      <!-- permintaan ditolak -->
      <div
        class="p-4 w-[75%] md:w-[30vh] shadow-sm rounded-[24px] border-2 flex flex-col gap-3"
      >
        <span class="text-[14px]" style="line-height: 1.2em">
          Permintaan Ditolak</span
        >
        <div class="flex flex-row justify-between">
          <P class="text-[34px]"> {{ countTransactionStore.count_transactions.ditolak }}</P>
          <div class="bg-[#FFD1D1] p-4 rounded-full">
            <img src="../../../assets/ditolak.svg " class="" alt="" />
          </div>
        </div>
      </div>
    </header>
    <article class="mt-4">
      <div class="md:flex md:flex-row-reverse md:justify-end md:gap-3">
        <div class="my-auto">
          <input
            v-model="searchQuery"
            type="text"
            name=""
            class="border px-3 inline-block rounded-[12px] text-[12px] md:text-[16px] h-[40px]"
            placeholder="Materiali Barang"
            id=""
          />
        </div>

        <button
          @click="$router.push('/admin/menu/tambah')"
          class="bg-[#E26B00] hover:bg-orange-600 text-white px-3 py-2 flex flex-row items-center rounded-[12px] text-[12px] md:text-[16px] gap-1 my-2 shadow-sm"
        >
          <img
            class="h-[18px] md:h-[22px]"
            src="../../../assets/plus.svg"
            alt=""
          />
          Tambah Barang
        </button>
      </div>
    </article>
    <section class="mt-4 p-3 md:p-5 border rounded-[24px] shadow-sm">
      <div>
        <!-- Bagian button -->
        <div class="flex flex-wrap gap-3 justify-center md:justify-start">
          <RouterLink :to="'/admin/menu/Semua'">
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
          <RouterLink :to="'/admin/menu/Dicek'">
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
          <RouterLink :to="'/admin/menu/Ditolak'">
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
          <RouterLink :to="'/admin/menu/Diterima'">
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
          <RouterLink :to="'/admin/menu/Digunakan'">
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
          <RouterLink :to="'/admin/menu/Selesai'">
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

        <div class="w-full overflow-auto touch-auto ...">
          <table class="w-full my-3">
            <tr class="text-[14px] md:text-[16px] font-semibold border-b px-3">
              <th class="font-medium text-left py-4 pr-4 pl-2">Tujuan</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Tanggal</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Jam</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Peminjam</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Status</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Aksi</th>
            </tr>
            <tr v-for="material_transaction in paginatedMaterialTransactions" class="text-[12px] md:text-[14px] border-b">
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.destination }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.date_start }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.time_start }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.borrower }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.status }}</td>
              <td
                class="flex flex-col justify-start text-[12px] gap-1 md:gap-2 py-2 md:py-5"
              >
                <button @click="$router.push('/admin/menu/edit/' + material_transaction.id)" class="bg-blue-400 text-white rounded-md">Edit</button>
                <button @click="$router.push('/admin/menu/detail/' + material_transaction.id)" class="bg-gray-400 text-white rounded-md">
                  Detail
                </button>
                <button @click="confirmDelete(material_transaction.id)" class="bg-red-400 text-white rounded-md">Delete</button>
              </td>
            </tr>
          </table>
          <div class="flex justify-end mt-4">
            <button @click="currentPage -= 1" :disabled="currentPage === 1">Previous</button>
            <span class="mx-2">{{ currentPage }}</span>
            <button @click="currentPage += 1" :disabled="currentPage * itemsPerPage >= materialTransactionStore.material_transactions.length">Next</button>
          </div>

        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { useMaterialTransactionStore } from "../../../stores/material_transaction.store";
import { useCountTransactionStore } from "../../../stores/count_transaction.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
      countTransactionStore: useCountTransactionStore(),
      status: null,
      currentPage: 1,
      itemsPerPage: 5,
      searchQuery: '',
    };
  },
  methods: {
    confirmDelete(id) {
      if (window.confirm("Apakah anda yakin ingin menghapus ini?")) {
        this.deleteMaterialTransaction(id);
      }
    },
    deleteMaterialTransaction(id) {
      const status = this.$route.params.status;
      this.materialTransactionStore.delete(id)
        .then(() => {
          this.materialTransactionStore.fetchByStatus(status);
        });
    },
    fetchByStatus(status) {
      this.materialTransactionStore.fetchByStatus(status);
    },
  },
  beforeRouteEnter(to, from, next) {
    const materialTransactionStore = useMaterialTransactionStore();
    const status = to.params.status;

    materialTransactionStore.fetchByStatus(status).then(() => {
      next(vm => {
        vm.status = status;
        vm.materialTransactionStore = materialTransactionStore;
      });
    });
  },
  mounted() {
    const status = this.$route.params.status;
    this.status = status;
    this.countTransactionStore.material();
  },
  computed: {
    filteredMaterialTransactions() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.materialTransactionStore.material_transactions.filter(material_transaction => {
        return (
          material_transaction.destination.toLowerCase().includes(searchQuery) ||
          material_transaction.date_start.toLowerCase().includes(searchQuery) ||
          material_transaction.time_start.toLowerCase().includes(searchQuery) ||
          material_transaction.borrower.toLowerCase().includes(searchQuery) ||
          material_transaction.status.toLowerCase().includes(searchQuery)
        );
      });
    },
    paginatedMaterialTransactions() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredMaterialTransactions.slice(startIndex, endIndex);
    },
  },
};
</script>

../../../stores/material_transaction.store