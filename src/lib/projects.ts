export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  playStore?: string;
  appStore?: string;
  github?: string;
  tech: string[];
  featured?: boolean;
  contactMessage?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Catatan Keuangan (DompetKu)",
    description: "Aplikasi pencatatan keuangan personal. Track income, expense, savings, dan debts dengan fitur charts, PDF export, biometric auth, dan home screen widget.",
    image: "/projects/catatan-keuangan.jpg",
    tech: ["Flutter", "Riverpod", "SQLite", "fl_chart", "PDF", "Biometric Auth", "GoRouter"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project DompetKu - Catatan Keuangan",
  },
  {
    id: "2",
    title: "Grammar Master",
    description: "Offline English Grammar Learning App. Master grammar dengan interactive lessons dan quizzes, plus text-to-speech.",
    image: "/projects/grammar-master.jpg",
    tech: ["Flutter", "Provider", "TTS", "Shared Preferences", "Google Fonts"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project Grammar Master",
  },
  {
    id: "3",
    title: "Try Outcpns",
    description: "Aplikasi Try Outcpns dengan Clean Architecture. Fitur lengkap untuk latihan soal cpns dengan progress tracking.",
    image: "/projects/tryout-cpns.jpg",
    tech: ["Flutter", "Riverpod", "Hive", "Clean Architecture", "GoRouter", "Dio"],
    featured: false,
    contactMessage: "Halo Imam, saya tertarik dengan project Try Outcpns",
  },
  {
    id: "4",
    title: "CalcPro",
    description: "Kalkulator lengkap dengan fitur Scientific, Konversi Unit, BMI, Diskon, Split Bill, Kurs Mata Uang, Pinjaman, Grafik, dan Matrix.",
    image: "/projects/calcpro.jpg",
    tech: ["Flutter", "Provider", "fl_chart", "math_expressions", "Google Fonts"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project CalcPro - Kalkulator Lengkap",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
