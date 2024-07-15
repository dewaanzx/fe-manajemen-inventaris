<template>
  <!-- main content -->
  <section class="mt-4">
      <form @submit.prevent="confirmCreate" class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9">
	      <div class="">
	        <div class="grid md:flex md:flex-row md:justify-around gap-2">
	          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
	            >Informasi Pegawai</span
	          >
	          <div class="grid gap-2 md:w-[80%]">
	            <div class="flex flex-col text-[12px] gap-1">
		          <p
		            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
		          >
		            Nama
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p class="text-[12px] md:text-[14px] text-center md:text-left">
		            {{ userStore2.users2.name }}
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p
		            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
		          >
		            Email
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p class="text-[12px] md:text-[14px] text-center md:text-left">
		            {{ userStore2.users2.email }}
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p class="text-[12px] md:text-[14px] text-center md:text-left">
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p
		            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
		          >
		            Nomor Telepon
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p class="text-[12px] md:text-[14px] text-center md:text-left">
		            {{ userStore2.users2.phone }}
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p class="text-[12px] md:text-[14px] text-center md:text-left">
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p
		            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
		          >
		            Divisi
		          </p>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p class="text-[12px] md:text-[14px] text-center md:text-left">
		            {{ userStore2.users2.division }}
		          </p>
	            </div>
	          <div>
	            <div class="flex flex-col text-[12px] gap-1">
		          <p
		            class="text-[14px] md:text-[16px] text-center md:text-left font-medium"
		          >
		            Foto Profile
		          </p>
	            </div>
		        <img
		          :src="'http://localhost:8080/uploads/users/' + userStore2.users2.picture"
		          class="w-full rounded-md md:rounded-[20px] md:rounded-[24px] hover:bg-slate-100"
		          style="object-fit: cover"
		          alt=""
		        />
	          </div>
	          </div>
	        </div>
	      </div>
      </form>
  </section>
</template><script>
import { useUser2Store } from "../../../stores/user.store";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      userStore2: useUser2Store(),
    };
  },
  beforeRouteEnter(to, from, next) {
    const userStore2 = useUser2Store();
    const { id } = to.params;

    userStore2.show(id).then(() => {
      next(vm => {
        vm.userStore2 = userStore2;
      });
    });
  },
};
</script>
