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
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Habit Tracker",
    description: "Aplikasi pengingat kebiasaan harian dengan notifikasi lokal dan statistik mingguan.",
    image: "/projects/habit-tracker.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.example.habittracker",
    github: "https://github.com/username/habit-tracker",
    tech: ["Flutter", "Hive", "Riverpod"],
    featured: true,
  },
  {
    id: "2",
    title: "Expense Manager",
    description: "Catat pengeluaran sehari-hari dengan kategori, budgeting, dan laporan bulanan.",
    image: "/projects/expense-manager.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.example.expensemanager",
    tech: ["Flutter", "SQLite", "BLoC"],
    featured: true,
  },
  {
    id: "3",
    title: "Recipe Finder",
    description: "Cari resep masakan berdasarkan bahan yang tersedia dengan API Spoonacular.",
    image: "/projects/recipe-finder.jpg",
    github: "https://github.com/username/recipe-finder",
    tech: ["Flutter", "Dio", "GetX"],
    featured: false,
  },
  {
    id: "4",
    title: "Weather App",
    description: "Info cuaca realtime dengan lokasi otomatis dan widget interaktif.",
    image: "/projects/weather-app.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.example.weatherapp",
    github: "https://github.com/username/weather-app",
    tech: ["Flutter", "OpenWeather API", "Provider"],
    featured: false,
  },
  {
    id: "5",
    title: "Note App",
    description: "Aplikasi catatan sederhana dengan fitur markdown dan cloud sync.",
    image: "/projects/note-app.jpg",
    github: "https://github.com/username/note-app",
    tech: ["Flutter", "Firebase", "Riverpod"],
    featured: false,
  },
  {
    id: "6",
    title: "Quiz Game",
    description: "Game kuis interaktif dengan multiple choice dan leaderboard.",
    image: "/projects/quiz-game.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.example.quizgame",
    appStore: "https://apps.apple.com/app/quizgame",
    tech: ["Flutter", "Firebase", "GetX"],
    featured: false,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
