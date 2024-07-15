<template>
  <section>
    <article class="mt-4">
      <div class="md:flex md:flex-row-reverse md:justify-end md:gap-3">
        <div class="my-auto">
          <input
            v-model="searchQuery"
            type="text"
            name=""
            class="border px-3 inline-block rounded-[12px] text-[12px] md:text-[16px] h-[40px]"
            placeholder="Cari Transaksi"
            id=""
          />
        </div>
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
          <RouterLink :to="'/admin/menu/Belum'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Belum')"
              :class="
                $route.params.status == 'Belum'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Belum Dikonfirmasi
            </button>
          </RouterLink>
          <RouterLink :to="'/admin/menu/Dikonfirmasi'">
            <button
              class="px-2 py-1 text-[11px] md:text-[14px] md:px-6 md:py-2 border border-[#e5e5e5] rounded-lg md:rounded-[16px]"
              @click="fetchByStatus('Dikonfirmasi')"
              :class="
                $route.params.status == 'Dikonfirmasi'
                  ? 'text-[#ffffff] bg-[#2B9FDC]'
                  : ''
              "
            >
              Dikonfirmasi
            </button>
          </RouterLink>
        </div>

        <div class="w-full overflow-auto touch-auto ...">
          <table class="w-full my-3">
            <tr class="text-[14px] md:text-[16px] font-semibold border-b px-3">
              <th class="font-medium text-left py-4 pr-4 pl-2">Tujuan</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Tanggal</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Jam</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Deskripsi</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Peminjam</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Material</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Status</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Aksi</th>
            </tr>
            <tr v-for="material_transaction in paginatedMaterialTransactions" class="text-[12px] md:text-[14px] border-b">
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.destination }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.date_start }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.time_start }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.description }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.user_name }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ material_transaction.material_name }}</td>
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
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      materialTransactionStore: useMaterialTransactionStore(),
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
  },
  computed: {
    filteredMaterialTransactions() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.materialTransactionStore.material_transactions.filter(material_transaction => {
        return (
          material_transaction.destination.toLowerCase().includes(searchQuery) ||
          material_transaction.date_start.toLowerCase().includes(searchQuery) ||
          material_transaction.time_start.toLowerCase().includes(searchQuery) ||
          material_transaction.description.toLowerCase().includes(searchQuery) ||
          material_transaction.material_name.toLowerCase().includes(searchQuery) ||
          material_transaction.user_name.toLowerCase().includes(searchQuery) ||
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