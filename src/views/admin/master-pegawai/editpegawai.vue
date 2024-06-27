<template>
  <!-- Breadcrumb -->

  <section class="mt-4">
      <form @submit.prevent="confirmUpdate" class="p-4 md:p-9 rounded-[36px] border border-[#D9D9D9] flex flex-col gap-5 md:gap-9">
	      <div class="">
	        <div class="grid md:flex md:flex-row md:justify-around gap-2">
	          <span class="text-[14px] md:text-[16px] md:w-[20%] text-[#2B9FDC]"
	            >Informasi Ruangan</span
	          >
	          <div class="grid gap-2 md:w-[80%]">
	            <div class="flex flex-col text-[12px] gap-1">
	              <label for="" class="text-[14px] md:text-[16px]">Nama</label>
	              <input
	                class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
	                type="text"
	                required
	                placeholder="Masukkan Nama Ruangan"
	                v-model="formData.name"
	              />
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
	              <label for="" class="text-[14px] md:text-[16px]">Deskripsi</label>
	              <textarea
	                class="rounded-lg w-[100%] h-[7vmax] p-3 border border-[#D9D9D9] text-[14px] md:text-[16px]"
	                required
	                cols="30"
	                rows="10"
	                placeholder="Masukkan Descripsi"
	                v-model="formData.description"
	              ></textarea>
	            </div>
	            <div class="flex flex-col text-[12px] gap-1">
	              <label for="" class="text-[14px] md:text-[16px]">Kapasitas</label>
	              <input
	                class="rounded-lg w-[100%] text-[14px] md:text-[16px] h-[3vmax] px-3 border border-[#D9D9D9]"
	                type="text"
	                required
	                placeholder="Masukkan Kapasitas"
	                v-model="formData.capacity"
	              />
	            </div>
	          <div>
	            <label for="">Foto Ruangan</label>
	            <label
	              for="imageinput"
	              class="flex flex-col items-center justify-center border-2 border-dashed md:rounded-[24px] border-[#131A29] rounded-md cursor-pointer hover:bg-slate-100 opacity-60 p-5 h-[400px]"
	            >
	              <div class="grid justify-items-center space-y-2">
	                <img src="../../../assets/camera.svg" alt="" />
	              </div>
	              <input
	                type="file"
	                class="file:hidden w-[45%] text-[11px] md:w-[6%]"
	                id="imageinput"
	                @change="handlePicture"
	                accept=".jpg, .jpeg, .png"
	              />
	            </label>
	          </div>
	          </div>
	        </div>
	      </div>
	      <div class="h-[1px] bg-[#D9D9D9]"></div>
	      <!-- button submit -->
	      <div
	        class="h-[3vmax] text-[12px] md:text-[16px] flex justify-end items-center gap-5"
	      >
	        <a class="w-[25%] rounded-md md:w-[10%]" @click="goBack">Batal</a>
	        <button
	          class="bg-[#E26B00] hover:bg-orange-600 p-1 md:px-8 md:py-[10px] flex justify-center rounded-md md:rounded-[16px] text-white md:w-[10%]"
	        >
	          Simpan
	        </button>
	      </div>
      </form>
  </section>
</template>
<script>
import { useRoomStore } from "../../../stores/room.store";

export default {
  data() {
    return {
      roomStore: useRoomStore(),
      formData: {
        name: null,
        description: null,
        capacity: null,
        picture: null,
      },
    };
  },
  methods: {
    goBack() {
      console.log(this.formData)
      this.$router.go(-1);
    },
    confirmUpdate() {
      if (window.confirm("Apakah anda yakin ingin mengedit data?")) {
        this.update();
      }
    },
    handlePicture(e) {
      const picture = e.target.files[0];
      this.formData.picture = picture;
    },
    async update() {
      const id = this.$route.params.id;
      let room = await this.roomStore.update(id, this.formData);

      if (room) {
        this.$router.push("/admin/master-pegawai");
      }
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.roomStore.show(id).then(() => {
      const room = this.roomStore.rooms;

      this.formData.name = room.name;
      this.formData.description = room.description;
      this.formData.capacity = room.capacity;
    });
  },
};
</script>
