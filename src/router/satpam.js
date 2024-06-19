//Layout
import NavbarSatpam from "../layouts/NavbarSatpam.vue";
import AuthMiddleware from "@/middleware/auth.middleware.js";

import DashboardSatpam from "../views/Satpam/index.vue";
import ViewKonfirmasi from "../views/Satpam/konfirmasi/konfirmasimobil.vue";
import ViewDetailKonfirmasi from "../views/Satpam/konfirmasi/detail.vue";
import ViewRiwayatPinjamMobil from "../views/Satpam/Riwayat Pinjam Mobil/riwayat.vue";
import ViewDetailRiwayatPinjamMobil from "../views/Satpam/Riwayat Pinjam Mobil/detail.vue";
import ViewCekMobil from "../views/Satpam/cek mobil/cekmobil.vue";
import ViewDetailMobil from "../views/Satpam/cek mobil/detail.vue";
import ViewNotifikasi from "../views/Satpam/Notifikasi/notifikasi.vue";
import ViewProfile from "../views/Satpam/profile/profile.vue";
import ViewGantiPassword from "../views/Satpam/profile/gantipassword.vue";
import ViewEditProfile from "../views/Satpam/profile/editprofile.vue";

export default [
  {
    path: "/satpam",
    name: "Dashboard",
    component: DashboardSatpam,
    meta: {
      title: "Dashboard",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/konfirmasi-mobil",
    name: "Konfirmasi",
    component: ViewKonfirmasi,
    meta: {
      title: "Konfirmasi Mobil",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/konfirmasi-mobil/detail/:id",
    name: "Detail",
    component: ViewDetailKonfirmasi,
    meta: {
      title: "Detail Konfirmasi Mobil",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/riwayat-pinjam-mobil/:status",
    name: "RiwayatPinjam",
    component: ViewRiwayatPinjamMobil,
    meta: {
      title: "Riwayat Pinjam Mobil",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/riwayat-pinjam-mobil/detail/:id",
    name: "DetailRiwayatPinjam",
    component: ViewDetailRiwayatPinjamMobil,
    meta: {
      title: "Detail Riwayat Pinjam Mobil",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/cek-mobil",
    name: "CekMobil",
    component: ViewCekMobil,
    meta: {
      title: "Cek Mobil",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/cek-mobil/detail/:id",
    name: "DetailCekMobil",
    component: ViewDetailMobil,
    meta: {
      title: "Cek Mobil",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/notifikasi",
    name: "Notifikasi",
    component: ViewNotifikasi,
    meta: {
      title: "Notifikasi",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/profile",
    name: "Profil",
    component: ViewProfile,
    meta: {
      title: "Profile",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/profile/edit",
    name: "EditProfile",
    component: ViewEditProfile,
    meta: {
      title: "Edit  Profile",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/satpam/profile/ganti-password",
    name: "GantiPassword",
    component: ViewGantiPassword,
    meta: {
      title: "Ganti Password",
      layout: NavbarSatpam,
      middleware: [AuthMiddleware],
    },
  },
];
