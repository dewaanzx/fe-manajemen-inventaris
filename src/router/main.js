import UsersTelkom from "../views/users/index.vue";

import UsersAmbilMaterial from "../views/users/AmbilMaterial/ambilmaterial.vue";

import UsersPengajuanMaterial from "../views/users/AmbilMaterial/pengajuanmaterial.vue";
import UsersDetailPengajuanMaterial from "../views/users/AmbilMaterial/detailpengajuanmaterial.vue";
import UsersRiwayatMaterial from "../views/users/AmbilMaterial/riwayatambilmaterial.vue";
import UsersRiwayatAmbilMaterialDetail from "../views/users/AmbilMaterial/riwayatambilmaterialDetail.vue";

import UsersProfile from "../views/users/Profile/profile.vue";
import UsersEditProfile from "../views/users/Profile/EditProfile.vue";
import UsersGantiPassword from "../views/users/Profile/GantiPassword.vue";
import UsersInformasi from "../views/users/Profile/Informasi.vue";
import UsersNotifikasi from "../views/users/notifikasi.vue";


import UsersCalendar from "../views/users/PinjamRuangan/kalender.vue";
import UsersPengajuanRuangan from "../views/users/PinjamRuangan/pengajaun.vue";
import UsersPengajuanRuanganDetail from "../views/users/PinjamRuangan/detailpengajuan.vue";
import UsersRiwayatPinjamRuangan from "../views/users/PinjamRuangan/riwayatpinjamruang.vue";
import UsersRiwayatPinjamRuanganDetail from "../views/users/PinjamRuangan/riwayatpinjamruanganDetail.vue";

import ExampleLayout from "@/layouts/ExampleLayout.vue";
import NavbarTelkom from "../layouts/Navbar.vue";

// middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/users",
    name: "users",
    component: UsersTelkom,
    meta: {
      title: "Main Menu",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pengajuanmaterial",
    name: "users.pengajuanmaterial",
    component: UsersPengajuanMaterial,
    meta: {
      title: "User Pengajuan Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/detail-pengajuan-material",
    name: "users.detailpengajuanmaterial",
    component: UsersDetailPengajuanMaterial,
    meta: {
      title: "Detail Pengajuan Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-ambil-material/:status",
    name: "users.riwayatambilmaterial",
    component: UsersRiwayatMaterial,
    meta: {
      title: "Riwayat Ambil Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-pinjam-material-detail/:id",
    name: "users.detail-pinjam-material",
    component: UsersRiwayatAmbilMaterialDetail,
    meta: {
      title: "Detail Pinjam Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/profile",
    name: "users.profile",
    component: UsersProfile,
    meta: {
      title: "Profile",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/edit-profile",
    name: "users.editprofil",
    component: UsersEditProfile,
    meta: {
      title: "Edit Profil",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/ganti-password",
    name: "users.gantipassword",
    component: UsersGantiPassword,
    meta: {
      title: "Ganti Password",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/informasi",
    name: "users.informasi",
    component: UsersInformasi,
    meta: {
      title: "Informasi",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/notifikasi",
    name: "users.notifikasi",
    component: UsersNotifikasi,
    meta: {
      title: "Notifikasi",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/ambil-material/:id",
    name: "users.ambil.material",
    component: UsersAmbilMaterial,
    meta: {
      title: "Ambil Material",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pinjam-ruangan",
    name: "users.pinjam.ruangan",
    component: UsersCalendar,
    meta: {
      title: "Pinjam Ruang",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pinjam-ruangan/pengajuan",
    name: "users.pengajuan.ruangan",
    component: UsersPengajuanRuangan,
    meta: {
      title: "Pengajuan Ruangan",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pinjam-ruangan/pengajuan/detail",
    name: "users.pengajuan.ruangan.detail",
    component: UsersPengajuanRuanganDetail,
    meta: {
      title: "Detail Pengajuan Ruangan",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-pinjam-ruangan/:status",
    name: "users.riwayat.pinjam.ruangan",
    component: UsersRiwayatPinjamRuangan,
    meta: {
      title: "Riwayat Pinjam Ruangan",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-pinjam-ruangan-detail/:id",
    name: "users.riwayat.pinjam.ruangan.detail",
    component: UsersRiwayatPinjamRuanganDetail,
    meta: {
      title: "Riwayat Pinjam Ruangan",
      layout: NavbarTelkom,
      middleware: [AuthMiddleware],
    },
  },
];
