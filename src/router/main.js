import HomeView from "@/views/home/index.vue";
import UserView from "@/views/user/index.vue";
import UserCreateView from "@/views/user/create.vue";
import UserUpdateView from "@/views/user/update.vue";
import UsersPinjamin from "../views/users/index.vue";
import UsersPengajuanMobil from "../views/users/PinjamMobil/pengajuanmobil.vue";
import UsersDetailPengajuanMobil from "../views/users/PinjamMobil/detailpengajuanmobil.vue";
import UsersRiwayatMobil from "../views/users/PinjamMobil/riwayatpinjammobil.vue";
import UsersRiwayatPinjamMobilDetail from "../views/users/PinjamMobil/riwayatpinjammobilDetail.vue";
import UsersProfile from "../views/users/Profile/profile.vue";
import UsersEditProfile from "../views/users/Profile/EditProfile.vue";
import UsersGantiPassword from "../views/users/Profile/GantiPassword.vue";
import UsersInformasi from "../views/users/Profile/Informasi.vue";
import UsersNotifikasi from "../views/users/notifikasi.vue";
import UsersAmbilMobil from "../views/users/PinjamMobil/ambilmobil.vue";
import UsersCalendar from "../views/users/PinjamRuangan/kalender.vue";
import UsersPengajuanRuangan from "../views/users/PinjamRuangan/pengajaun.vue";
import UsersPengajuanRuanganDetail from "../views/users/PinjamRuangan/detailpengajuan.vue";
import UsersRiwayatPinjamRuangan from "../views/users/PinjamRuangan/riwayatpinjamruang.vue";
import UsersRiwayatPinjamRuanganDetail from "../views/users/PinjamRuangan/riwayatpinjamruanganDetail.vue";

import ExampleLayout from "@/layouts/ExampleLayout.vue";
import NavbarPinjamin from "../layouts/Navbar.vue";

// middleware
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    meta: {
      title: "User",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user/create",
    name: "user.create",
    component: UserCreateView,
    meta: {
      title: "User Create",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/user/update",
    name: "user.update",
    component: UserUpdateView,
    meta: {
      title: "User Update",
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users",
    name: "users",
    component: UsersPinjamin,
    meta: {
      title: "Main Menu",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pengajuanmobil",
    name: "users.pengajuanmobil",
    component: UsersPengajuanMobil,
    meta: {
      title: "User Pengajuan Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/detail-pengajuan-mobil",
    name: "users.detailpengajuanmobil",
    component: UsersDetailPengajuanMobil,
    meta: {
      title: "Detail Pengajuan Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-pinjam-mobil/:status",
    name: "users.riwayatpinjammobil",
    component: UsersRiwayatMobil,
    meta: {
      title: "Riwayat Pinjam  Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-pinjam-mobil-detail/:id",
    name: "users.detail-pinjam-mobil",
    component: UsersRiwayatPinjamMobilDetail,
    meta: {
      title: "Detail Pinjam Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/profile",
    name: "users.profile",
    component: UsersProfile,
    meta: {
      title: "Profile",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/edit-profile",
    name: "users.editprofil",
    component: UsersEditProfile,
    meta: {
      title: "Edit Profil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/ganti-password",
    name: "users.gantipassword",
    component: UsersGantiPassword,
    meta: {
      title: "Ganti Password",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/informasi",
    name: "users.informasi",
    component: UsersInformasi,
    meta: {
      title: "Informasi",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/notifikasi",
    name: "users.notifikasi",
    component: UsersNotifikasi,
    meta: {
      title: "Notifikasi",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/ambil-mobil/:id",
    name: "users.ambil.mobil",
    component: UsersAmbilMobil,
    meta: {
      title: "Ambil Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pinjam-ruangan",
    name: "users.pinjam.ruangan",
    component: UsersCalendar,
    meta: {
      title: "Pinjam Ruang",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pinjam-ruangan/pengajuan",
    name: "users.pengajuan.ruangan",
    component: UsersPengajuanRuangan,
    meta: {
      title: "Pengajuan Ruangan",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/pinjam-ruangan/pengajuan/detail",
    name: "users.pengajuan.ruangan.detail",
    component: UsersPengajuanRuanganDetail,
    meta: {
      title: "Detail Pengajuan Ruangan",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-pinjam-ruangan/:status",
    name: "users.riwayat.pinjam.ruangan",
    component: UsersRiwayatPinjamRuangan,
    meta: {
      title: "Riwayat Pinjam Ruangan",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/users/riwayat-pinjam-ruangan-detail/:id",
    name: "users.riwayat.pinjam.ruangan.detail",
    component: UsersRiwayatPinjamRuanganDetail,
    meta: {
      title: "Riwayat Pinjam Ruangan",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
];
