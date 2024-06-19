//Layout
import NavbarAdmin from "../layouts/NavbarAdmin.vue";
import SidebarAdmin from "../layouts/Sidebar.vue";
import AuthMiddleware from "@/middleware/auth.middleware.js";

import ViewPinjamanMobil from "../views/admin/pinjaman-mobil/pinjamanmobil.vue";
import TambahPinjamMobil from "../views/admin/pinjaman-mobil/tambahpinjaman.vue";
import EditPinjamanMobil from "../views/admin/pinjaman-mobil/editpinjaman.vue";
import DetailPinjamanMobil from "../views/admin/pinjaman-mobil/detailpinjaman.vue";
import ViewPinjamanRuangan from "../views/admin/pinjam-ruangan/pinjamanruangan.vue";
import TambahPinjamanRuangan from "../views/admin/pinjam-ruangan/tambahpinjaman.vue";
import EditPinjamanRuangan from "../views/admin/pinjam-ruangan/editpinjaman.vue";
import DetailPinjamanRuangan from "../views/admin/pinjam-ruangan/detailpinjaman.vue";
import ViewKonfirmasiMobil from "../views/admin/konfirmasi-mobil/index.vue";
import KonfirmasiMobil from "../views/admin/konfirmasi-mobil/konfirmasi.vue";
import ViewKonfirmasiRuangan from "../views/admin/konfirmasi-ruangan/index.vue";
import KonfirmasiRuangan from "../views/admin/konfirmasi-ruangan/konfirmasi.vue";
import MasterMobil from "../views/admin/master-mobil/index.vue";
import TambahMobil from "../views/admin/master-mobil/tambahmobil.vue";
import DetailMobil from "../views/admin/master-mobil/detailmobil.vue";
import EditMobil from "../views/admin/master-mobil/editmobil.vue";
import MasterRuangan from "../views/admin/master-ruangan/index.vue";
import TambahRuangan from "../views/admin/master-ruangan/tambahruangan.vue";
import DetailRuangan from "../views/admin/master-ruangan/detailruangan.vue";
import EditRuangan from "../views/admin/master-ruangan/editruangan.vue";
import MasterSopir from "../views/admin/master-sopir/index.vue";
import TambahSopir from "../views/admin/master-sopir/tambahsopir.vue";
import DetailSopir from "../views/admin/master-sopir/detailsopir.vue";
import EditSopir from "../views/admin/master-sopir/editsopir.vue";
import MasterDivisi from "../views/admin/master-divisi/index.vue";
import TambahDivisi from "../views/admin/master-divisi/tambahdivisi.vue";
import EditDivisi from "../views/admin/master-divisi/editdivisi.vue";

export default [
  {
    path: "/admin/pinjaman-mobil/:status",
    name: "Admin-pinjaman-mobil",
    component: ViewPinjamanMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/pinjaman-mobil/tambah",
    name: "Admin-tambah-pinjam-mobil",
    component: TambahPinjamMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/pinjaman-mobil/edit/:id",
    name: "Admin-edit-pinjaman-mobil",
    component: EditPinjamanMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/pinjaman-mobil/detail/:id",
    name: "Admin-detail-pinjam-mobil",
    component: DetailPinjamanMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/pinjaman-ruangan/:status",
    name: "Admin-pinjaman-ruangan",
    component: ViewPinjamanRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/pinjaman-ruangan/edit/:id",
    name: "Admin-edit-pinjam-ruangan",
    component: EditPinjamanRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/pinjaman-ruangan/tambah",
    name: "Admin-tambah-pinjam-ruangan",
    component: TambahPinjamanRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/pinjaman-ruangan/detail/:id",
    name: "Admin-detail-pinjam-ruangan",
    component: DetailPinjamanRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/konfirmasi-mobil",
    name: "PageKonfirmasiMobil",
    component: ViewKonfirmasiMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/konfirmasi-mobil/konfirmasi/:id",
    name: "KonfirmasiMobil",
    component: KonfirmasiMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/konfirmasi-ruangan",
    name: "PageKonfirmasiRuangan",
    component: ViewKonfirmasiRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/konfirmasi-ruangan/konfirmasi/:id",
    name: "KonfirmasiRuangan",
    component: KonfirmasiRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-mobil/",
    name: "MasterMobil",
    component: MasterMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-mobil/tambah",
    name: "TambahMobil",
    component: TambahMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-mobil/detail/:id",
    name: "DetailMobil",
    component: DetailMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-mobil/edit/:id",
    name: "EditMobil",
    component: EditMobil,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-ruangan/",
    name: "MasterRuangan",
    component: MasterRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-ruangan/tambah",
    name: "TambahRuangan",
    component: TambahRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-ruangan/detail/:id",
    name: "DetailRuangan",
    component: DetailRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-ruangan/edit/:id",
    name: "EditRuangan",
    component: EditRuangan,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-sopir/",
    name: "MasterSopir",
    component: MasterSopir,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-sopir/tambah",
    name: "TambahSopir",
    component: TambahSopir,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-sopir/detail/:id",
    name: "DetailSopir",
    component: DetailSopir,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-sopir/edit/:id",
    name: "EditSopir",
    component: EditSopir,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-divisi/",
    name: "MasterDivisi",
    component: MasterDivisi,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-divisi/tambah",
    name: "TambahDivisi",
    component: TambahDivisi,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/master-divisi/edit/:id",
    name: "EditDivisi",
    component: EditDivisi,
    meta: {
      title: "Admin",
      layout: NavbarAdmin,
      middleware: [AuthMiddleware],
    },
  },
];