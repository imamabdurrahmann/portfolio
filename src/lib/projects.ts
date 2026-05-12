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
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const projects: Project[] = [
  {
    id: "1",
    slug: generateSlug("Catatan Keuangan (DompetKu)"),
    title: "Catatan Keuangan (DompetKu)",
    description: "Aplikasi pencatatan keuangan personal. Track income, expense, savings, dan debts dengan fitur charts, PDF export, biometric auth, dan home screen widget.",
    image: "/projects/catatan-keuangan.jpg",
    tech: ["Flutter", "Riverpod", "SQLite", "fl_chart", "PDF", "Biometric Auth", "GoRouter"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project DompetKu - Catatan Keuangan",
  },
  {
    id: "2",
    slug: generateSlug("Part of English"),
    title: "Part of English",
    description: "Learn English Offline: Grammar, Vocabulary, Idioms, Collocations, Word Roots dengan interactive lessons, quizzes, spaced repetition, TTS, dan gamification.",
    image: "/projects/part-of-english.jpg",
    tech: ["Flutter", "Provider", "TTS", "Shared Preferences", "Google Fonts", "Lottie", "flutter_animate"],
    featured: false,
    contactMessage: "Halo Imam, saya tertarik dengan project Part of English",
  },
  {
    id: "3",
    slug: generateSlug("Try Outcpns"),
    title: "Try Outcpns",
    description: "Aplikasi Try Outcpns dengan Clean Architecture. Fitur lengkap untuk latihan soal cpns dengan progress tracking.",
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
    tech: ["Flutter", "Riverpod", "Hive", "Clean Architecture", "GoRouter", "Dio"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project Try Outcpns",
  },
  {
    id: "4",
    slug: generateSlug("CalcPro"),
    title: "CalcPro",
    description: "Kalkulator lengkap dengan fitur Scientific, Konversi Unit, BMI, Diskon, Split Bill, Kurs Mata Uang, Pinjaman, Grafik, dan Matrix.",
    image: "/projects/calcpro.jpg",
    tech: ["Flutter", "Provider", "fl_chart", "math_expressions", "Google Fonts"],
    featured: false,
    contactMessage: "Halo Imam, saya tertarik dengan project CalcPro - Kalkulator Lengkap",
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