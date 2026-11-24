export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  playStore?: string;
  appStore?: string;
  github?: string;
  tech: string[];
  featured?: boolean;
  contactMessage?: string;
  category: 'operations' | 'administration' | 'finance';
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "manajemen-operasional-gudang-omiko",
    title: "Manajemen Operasional & Kontrol Inventaris Gudang",
    description: "Supervisi penuh arus logistik inbound/outbound, stok opname berkala dengan hasil zero-variance (nol selisih), serta penegakan standar 5S dan SOP pergudangan di Omiko Hotel (6+ tahun pengalaman).",
    image: "/projects/omiko-warehouse/preview.png",
    tech: ["Kontrol Inventaris", "Stok Opname", "Inbound & Outbound", "Metode 5S", "SOP Pergudangan", "Microsoft Excel"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik berdiskusi mengenai pengalaman manajemen operasional dan kontrol inventaris gudang",
    category: "operations",
  },
  {
    id: "2",
    slug: "penjadwalan-roster-absensi-excel",
    title: "Sistem Roster Shift Staf & Rekonsiliasi Timesheet (Excel & Otomasi)",
    description: "Perancangan sistem roster kerja 24 jam untuk staf operasional, pemantauan presensi digital, rekonsiliasi lembur, dan pelaporan biaya operasional bulanan berbasis Microsoft Excel (Pivot Tables, VLOOKUP) dan script data automation dengan tingkat shift fulfillment 98%+.",
    image: "/projects/excel-timesheet/preview.png",
    tech: ["Microsoft Excel Lanjutan", "Python & Data Automation", "Penjadwalan Roster", "Rekonsiliasi Timesheet", "Analisis Presensi", "Manajemen SDM"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik berdiskusi mengenai sistem roster shift staf dan rekonsiliasi timesheet Excel",
    category: "administration",
  },
  {
    id: "3",
    slug: "administrasi-database-cat-bkn",
    title: "Administrasi Database & Evaluasi Ujian CAT BKN",
    description: "Pengelolaan database peserta seleksi nasional dan kurasi bank data ratusan butir soal (TWK, TIU, TKP) dengan pipeline otomasi validasi data. Pengawasan stabilitas alur ujian bervolume tinggi, pemantauan waktu presisi, serta analisis statistik skor diagnostik peserta.",
    image: "/projects/tryout-cpns/statistik.jpg",
    images: [
      "/projects/tryout-cpns/berandalightmode.jpg",
      "/projects/tryout-cpns/statistik.jpg",
      "/projects/tryout-cpns/statistik1.jpg",
      "/projects/tryout-cpns/contohpemilihanpaket.jpg",
      "/projects/tryout-cpns/listratusansoalataupreviewtampilan.jpg",
    ],
    tech: ["Administrasi Database", "Python Data Processing", "Standar CAT BKN", "Pengolahan Bank Soal", "Analisis Skor & Evaluasi", "Time Management"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project administrasi database dan sistem evaluasi CAT BKN",
    category: "administration",
  },
  {
    id: "4",
    slug: "sistem-pos-kontrol-inventaris",
    title: "Sistem Kasir & Pelacakan Inventaris Real-Time (POS & Retail Supply)",
    description: "Implementasi sistem pencatatan transaksi kasir terintegrasi barcode scanner untuk pelacakan pergerakan barang secara real-time. Rekapitulasi penjualan harian, pembukuan kas otomatis, dan pencegahan selisih barang masuk/keluar.",
    image: "/projects/pos-inventory/preview.png",
    tech: ["Pelacakan Stok Real-Time", "Pembukuan Kas Harian", "Barcode Tracking", "Rekonsiliasi Transaksi"],
    featured: false,
    contactMessage: "Halo Imam, saya tertarik berdiskusi mengenai sistem kasir POS dan kontrol inventaris",
    category: "finance",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
