<template>
	<div
        class="p-4 w-[75%] md:w-[30vh] shadow-sm rounded-[24px] border-2 flex flex-col gap-3"
      >
        <span class="text-[14px]" style="line-height: 1.2em">
          Jumlah Pegawai</span
        >
        <div class="flex flex-row justify-between">
          <!-- <P class="text-[34px]"> {{ countTransactionStore.count_transactions.dicek }}</P> -->
          <div class="bg-[#C1E9FF] p-4 rounded-full">
            <img src="../../../assets/pinjaman.svg " class="" alt="" />
          </div>
        </div>
      </div>
  <section>
    <article class="mt-4">
      <div class="md:flex md:flex-row-reverse md:justify-end md:gap-3">
        <div class="my-auto">
          <input
            v-model="searchQuery"
            type="text"
            name=""
            class="border px-3 inline-block rounded-[12px] text-[12px] md:text-[16px] h-[40px]"
            placeholder="Cari Divisi"
            id=""
          />
        </div>

        <button
          @click="$router.push('/admin/master-divisi/tambah')"
          class="bg-[#E26B00] hover:bg-orange-600 text-white px-3 py-2 flex flex-row items-center rounded-[12px] text-[12px] md:text-[16px] gap-1 my-2 shadow-sm"
        >
          <img
            class="h-[18px] md:h-[22px]"
            src="../../../assets/plus.svg"
            alt=""
          />
          Tambah Divisi
        </button>
      </div>
    </article>
    <section class="mt-4 p-3 md:p-5 border rounded-[24px] shadow-sm">
      <div>
        <div class="w-full overflow-auto touch-auto ...">
          <table class="w-full my-3">
            <tr class="text-[14px] md:text-[16px] font-semibold border-b px-3">
              <th class="font-medium text-left py-4 pr-4 pl-2">Nama</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Aksi</th>
            </tr>
            <tr v-for="division in paginatedDivisions" class="text-[12px] md:text-[14px] border-b">
              <td class="pr-4 pl-2 md:py-4">{{ division.name }}</td>
              <td
                class="flex flex-col justify-start text-[12px] gap-1 md:gap-2 py-2 md:py-5"
              >
                <button @click="$router.push('/admin/master-divisi/edit/' + division.id)" class="bg-blue-400 text-white rounded-md">Edit</button>
                <button @click="confirmDelete(division.id)" class="bg-red-400 text-white rounded-md">Delete</button>
              </td>
            </tr>
          </table>
          <div class="flex justify-end mt-4">
            <button @click="currentPage -= 1" :disabled="currentPage === 1">Previous</button>
            <span class="mx-2">{{ currentPage }}</span>
            <button @click="currentPage += 1" :disabled="currentPage * itemsPerPage >= DivisionStore.divisions.length">Next</button>
          </div>

        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { useDivisionStore } from "../../../stores/division.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      DivisionStore: useDivisionStore(),
      status: null,
      currentPage: 1,
      itemsPerPage: 5,
      searchQuery: '',
    };
  },
  methods: {
    confirmDelete(id) {
      if (window.confirm("Apakah anda yakin ingin menghapus ini?")) {
        this.deleteDivision(id);
      }
    },
    deleteDivision(id) {
      this.DivisionStore.delete(id)
        .then(() => {
          this.DivisionStore.fetch();
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    const DivisionStore = useDivisionStore();

    DivisionStore.fetch().then(() => {
      next(vm => {
        vm.DivisionStore = DivisionStore;
      });
    });
  },
  computed: {
    filteredDivisions() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.DivisionStore.divisions.filter(division => {
        return (
          division.name.toLowerCase().includes(searchQuery)
        );
      });
    },
    paginatedDivisions() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredDivisions.slice(startIndex, endIndex);
    },
  },
};
</script>

