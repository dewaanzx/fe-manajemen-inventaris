<template>
  <div
    class="p-4 w-[75%] md:w-[30vh] shadow-sm rounded-[24px] border-2 flex flex-col gap-3"
  >
    <span class="text-[14px]" style="line-height: 1.2em">Daftar Pegawai</span>
    <div class="flex flex-row justify-between">
        <div class="flex flex-row justify-between">
          <P class="text-[34px]"> {{ userStore2.countUser.countUsers }}
			</P>
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
            class="border px-3 inline-block rounded-[12px] text-[12px] md:text-[16px] h-[40px]"
            placeholder="Cari Pegawai"
          />
        </div>
      </div>
    </article>
    <section class="mt-4 p-3 md:p-5 border rounded-[24px] shadow-sm">
      <div>
        <div class="w-full overflow-auto touch-auto ...">
          <table class="w-full my-3">
            <tr class="text-[14px] md:text-[16px] font-semibold border-b px-3">
              <th class="font-medium text-left py-4 pr-4 pl-2">Nama</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Email</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Nomor Telepon</th>
              <th class="font-medium text-left py-4 pr-4 pl-2">Aksi</th>
            </tr>
            <tr v-for="user in paginatedUsers" :key="user.id" class="text-[12px] md:text-[14px] border-b">
              <td class="pr-4 pl-2 md:py-4">{{ user.name }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ user.email }}</td>
              <td class="pr-4 pl-2 md:py-4">{{ user.phone }}</td>
              <td class="flex flex-col justify-start text-[12px] gap-1 md:gap-2 py-2 md:py-5">
                <button @click="$router.push('/admin/master-pegawai/detail/' + user.id)" class="bg-gray-400 text-white rounded-md">Detail</button>
              </td>
            </tr>
          </table>
          <div class="flex justify-end mt-4">
            <button @click="currentPage -= 1" :disabled="currentPage === 1">Previous</button>
            <span class="mx-2">{{ currentPage }}</span>
            <button @click="currentPage += 1" :disabled="currentPage * itemsPerPage >= userStore2.users2.length">Next</button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { useUser2Store } from "../../../stores/user.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      userStore2: useUser2Store(),
      currentPage: 1,
      itemsPerPage: 5,
      searchQuery: '',
    };
  },
  methods: {
    confirmDelete(id) {
      if (window.confirm("Apakah anda yakin ingin menghapus ini?")) {
        this.deleteUser(id);
      }
    },
    deleteUser(id) {
      this.userStore2.delete(id)
        .then(() => {
          this.userStore2.fetch();
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    const userStore2 = useUser2Store();

    userStore2.fetch().then(() => {
      next(vm => {
        vm.userStore2 = userStore2;
      });
    });
  },
  computed: {
    filteredUsers() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.userStore2.users2.filter(user => {
        return (
          user.name.toLowerCase().includes(searchQuery) ||
          user.email.toLowerCase().includes(searchQuery) ||
          user.phone.toLowerCase().includes(searchQuery)
        );
      });
    },
    paginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredUsers.slice(startIndex, endIndex);
    },
  },
};
</script>
