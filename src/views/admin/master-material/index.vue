<template>
	<div
        class="p-4 w-[75%] md:w-[30vh] shadow-sm rounded-[24px] border-2 flex flex-col gap-3"
      >
        <span class="text-[14px]" style="line-height: 1.2em">
          Permintaan Peminjaman</span
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
            placeholder="Cari Barang"
            id=""
          />
        </div>

        <button
          @click="$router.push('/admin/master-material/tambah')"
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
        <div class="w-full overflow-auto touch-auto ...">
          <table class="w-full my-3">
            <tr class="text-[14px] md:text-[16px] font-semibold border-b px-3">
              <th class="font-medium text-left py-4 pr-4 pl-2">Nama Barang</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Ukuran</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Status</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Aksi</th>
            </tr>
            <tr v-for="car in paginatedCars" class="text-[12px] md:text-[14px] border-b">
              <td class="pr-4 pl-2 md:py-4">{{ car.name }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ car.license }}</td>
              <td class="pr-4 pl-2 md:py-4" v-if="car.availability == 1">Tersedia</td>
              <td class="pr-4 pl-2 md:py-4" v-if="car.availability == 0">Sedang Digunakan</td>
              <td
                class="flex flex-col justify-start text-[12px] gap-1 md:gap-2 py-2 md:py-5"
              >
                <button @click="$router.push('/admin/master-material/edit/' + car.id)" class="bg-blue-400 text-white rounded-md">Edit</button>
                <button @click="$router.push('/admin/master-material/detail/' + car.id)" class="bg-gray-400 text-white rounded-md">
                  Detail
                </button>
                <button @click="confirmDelete(car.id)" class="bg-red-400 text-white rounded-md">Delete</button>
              </td>
            </tr>
          </table>
          <div class="flex justify-end mt-4">
            <button @click="currentPage -= 1" :disabled="currentPage === 1">Previous</button>
            <span class="mx-2">{{ currentPage }}</span>
            <button @click="currentPage += 1" :disabled="currentPage * itemsPerPage >= CarStore.cars.length">Next</button>
          </div>

        </div>
      </div>
    </section>
  </section>
</template>
<script>
import { useCarStore } from "../../../stores/car.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      CarStore: useCarStore(),
      status: null,
      currentPage: 1,
      itemsPerPage: 5,
      searchQuery: '',
    };
  },
  methods: {
    confirmDelete(id) {
      if (window.confirm("Apakah anda yakin ingin menghapus ini?")) {
        this.deleteCar(id);
      }
    },
    deleteCar(id) {
      this.CarStore.delete(id)
        .then(() => {
          this.CarStore.fetch();
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    const CarStore = useCarStore();

    CarStore.fetch().then(() => {
      next(vm => {
        vm.CarStore = CarStore;
      });
    });
  },
  computed: {
    filteredCars() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.CarStore.cars.filter(car => {
        return (
          car.name.toLowerCase().includes(searchQuery) ||
          car.license.toLowerCase().includes(searchQuery)
        );
      });
    },
    paginatedCars() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredCars.slice(startIndex, endIndex);
    },
  },
};
</script>

