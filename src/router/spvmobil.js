import SpvMobilPinjamin from "../views/spv-mobil/index.vue";
import SpvMobilNotifikasi from "../views/spv-mobil/notifikasi.vue";
import SpvMobilKonfirmasiMobil from "../views/spv-mobil/KonfirmasiMobil/konfirmasi-mobil.vue";
import SpvMobilDetailKonfirmasiMobil from "../views/spv-mobil/KonfirmasiMobil/detail-konfirmasi-mobil.vue";
import ViewRiwayatPinjamMobil from "../views/spv-mobil/RiwayatPinjamMobil/riwayat.vue";
import ViewDetailRiwayatPinjamMobil from "../views/spv-mobil/RiwayatPinjamMobil/detail.vue";

import SpvMobilCekMobil from "../views/spv-mobil/CekMobil/cek-mobil.vue";
import SpvMobilDetailCekMobil from "../views/spv-mobil/CekMobil/detail-cek-mobil.vue";
import ViewProfile from "../views/spv-mobil/Profile/profile.vue";
import ViewGantiPassword from "../views/spv-mobil/Profile/gantipassword.vue";
import ViewEditProfile from "../views/spv-mobil/Profile/editprofile.vue";

//Layout
import NavbarPinjamin from "../layouts/NavbarSPVMobil.vue";
import AuthMiddleware from "@/middleware/auth.middleware.js";

export default [
{
	path: "/spv-mobil",
	name: "spv-mobil",
	component: SpvMobilPinjamin,
	meta: {
	  title: "SpvMobilPinjamin",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
	path: "/spv-mobil/notifikasi",
	name: "notifikasi",
	component: SpvMobilNotifikasi,
	meta: {
	  title: "SpvMobilNotifikasi",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
	path: "/spv-mobil/konfirmasi-mobil/",
	name: "konfirmasi-mobil",
	component: SpvMobilKonfirmasiMobil,
	meta: {
	  title: "SpvMobilKonfirmasiMobil",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
	path: "/spv-mobil/konfirmasi-mobil/:id",
	name: "konfirmasi-mobil",
	component: SpvMobilKonfirmasiMobil,
	meta: {
	  title: "SpvMobilKonfirmasiMobil",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
	path: "/spv-mobil/detail-konfirmasi-mobil",
	name: "detail-konfirmasi-mobil",
	component: SpvMobilDetailKonfirmasiMobil,
	meta: {
	  title: "SpvMobilDetailKonfirmasiMobil",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
    path: "/spv-mobil/riwayat-pinjam-mobil",
    name: "RiwayatPinjam",
    component: ViewRiwayatPinjamMobil,
    meta: {
      title: "Riwayat Pinjam Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/spv-mobil/riwayat-pinjam-mobil/detail",
    name: "DetailRiwayatPinjam",
    component: ViewDetailRiwayatPinjamMobil,
    meta: {
      title: "Detail Riwayat Pinjam Mobil",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
	path: "/spv-mobil/cek-mobil",
	name: "cek-mobil",
	component: SpvMobilCekMobil,
	meta: {
	  title: "SpvMobilCekMobil",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
	path: "/spv-mobil/cek-mobil/detail-cek-mobil",
	name: "detail-cek-mobil",
	component: SpvMobilDetailCekMobil,
	meta: {
	  title: "SpvMobilDetailCekMobil",
	  layout: NavbarPinjamin,
	  middleware: [AuthMiddleware],
	},
  },
  {
    path: "/spv-mobil/profile",
    name: "Profil",
    component: ViewProfile,
    meta: {
      title: "Profile",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/spv-mobil/profile/edit",
    name: "EditProfile",
    component: ViewEditProfile,
    meta: {
      title: "Edit  Profile",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/spv-mobil/profile/ganti-password",
    name: "GantiPassword",
    component: ViewGantiPassword,
    meta: {
      title: "Ganti Password",
      layout: NavbarPinjamin,
      middleware: [AuthMiddleware],
    },
   }
];

