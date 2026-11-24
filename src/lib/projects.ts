export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  images?: string[];  // Multiple images for gallery
  playStore?: string;
  appStore?: string;
  github?: string;
  tech: string[];
  featured?: boolean;
  contactMessage?: string;
  category: 'finance' | 'productivity' | 'administration';
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "catatan-keuangan-dompetku",
    title: "Catatan Keuangan & Arus Kas (DompetKu)",
    description: "Sistem pencatatan dan pengelolaan keuangan komprehensif. Melacak pemasukan, pengeluaran, tabungan, dan utang dengan fitur laporan PDF berkala, grafik visual, dan rekapitulasi data.",
    image: "/projects/catatan-keuangan/preview.png",
    tech: ["Pencatatan Keuangan", "Laporan PDF", "Analisis Arus Kas", "Rekapitulasi Data", "Budgeting"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik berdiskusi mengenai sistem pencatatan keuangan DompetKu",
    category: "finance",
  },
  {
    id: "2",
    slug: "part-of-english",
    title: "Part of English (Media Edukasi & Bahasa)",
    description: "Platform pembelajaran mandiri bahasa Inggris untuk meningkatkan kompetensi komunikasi profesional: Grammar, Vocabulary, Idiom, dan struktur kata untuk korespondensi resmi.",
    image: "/projects/part-of-english/preview.png",
    tech: ["English Proficiency", "Grammar & Dokumen", "Komunikasi Bisnis", "Manajemen Kosakata"],
    featured: false,
    contactMessage: "Halo Imam, saya tertarik dengan project Part of English",
    category: "productivity",
  },
  {
    id: "3",
    slug: "try-outcpns",
    title: "Sistem Latihan & Ujian CPNS (Try Out CPNS)",
    description: "Platform simulasi ujian administrasi publik dan seleksi CPNS (TWK, TIU, TKP). Pengelolaan bank data ratusan soal terstruktur, evaluasi waktu, dan analisis skor akurat.",
    image: "/projects/tryout-cpns/preview.png",
    images: [
      "/projects/tryout-cpns/berandalightmode.jpg",
      "/projects/tryout-cpns/berandadarkmode.jpg",
      "/projects/tryout-cpns/persiapansebelummulaitryout.jpg",
      "/projects/tryout-cpns/contohpemilihanpaket.jpg",
      "/projects/tryout-cpns/twktryout.jpg",
      "/projects/tryout-cpns/tiutryout.jpg",
      "/projects/tryout-cpns/tkptryout.jpg",
      "/projects/tryout-cpns/contohsoaldenganpilihangandanya.jpg",
      "/projects/tryout-cpns/setelahselesaitryout.jpg",
      "/projects/tryout-cpns/contohpembahasan.jpg",
      "/projects/tryout-cpns/statistik.jpg",
      "/projects/tryout-cpns/statistik1.jpg",
      "/projects/tryout-cpns/profil.jpg",
      "/projects/tryout-cpns/latihanpertopik1.jpg",
      "/projects/tryout-cpns/latihanpertopik2.jpg",
      "/projects/tryout-cpns/latihanpertopik3.jpg",
      "/projects/tryout-cpns/listratusansoalataupreviewtampilan.jpg",
    ],
    tech: ["Administrasi Publik", "Manajemen Bank Soal", "Evaluasi Kinerja", "Analisis Skor", "Time Management"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project Try Out CPNS",
    category: "administration",
  },
  {
    id: "4",
    slug: "calcpro",
    title: "CalcPro (Business & Financial Calculator)",
    description: "Kalkulator operasional dan bisnis lengkap: estimasi pinjaman dan cicilan, konversi mata uang, kalkulasi diskon, split bill, dan perhitungan matematis presisi.",
    image: "/projects/calcpro/preview.png",
    tech: ["Kalkulasi Finansial", "Simulasi Pinjaman", "Konversi Kurs", "Perhitungan Bisnis"],
    featured: false,
    contactMessage: "Halo Imam, saya tertarik dengan project CalcPro",
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
