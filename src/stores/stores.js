import { defineStore } from "pinia";

export const useMobilStore1 = defineStore("mobil.satu", {
  state: () => ({
    tujuan: "",
    deskripsi: "",
    tanggal: "",
    waktu: "",
    penumpang: "",
    keterangan: "",
  }),
  actions: {
    addpinjam(data) {
      // this.tujuan = tujuan.data;
      // console.log(data);
      this.tujuan = data.tujuan;
      this.deskripsi = data.deskripsi;
      this.tanggal = data.tanggal;
      this.waktu = data.waktu;
      this.penumpang = data.penumpang;
      this.keterangan = data.keterangan;
    },

    pindahKeFormulir2() {
      this.$router.push("/users/detail-pengajuan-mobil");
    },
  },
});
