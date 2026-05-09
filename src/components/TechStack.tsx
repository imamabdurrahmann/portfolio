const techStack = [
  { name: "Flutter", color: "#02569B" },
  { name: "Dart", color: "#0175C2" },
  { name: "Riverpod", color: "#F26F46" },
  { name: "BLoC", color: "#00B4AB" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "SQLite", color: "#003B57" },
  { name: "Hive", color: "#F7A239" },
  { name: "Clean Arch", color: "#7C3AED" },
];

export function TechStack() {
  return (
    <section className="py-20 px-6 bg-[#0f0a1f]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-purple-400 text-lg font-medium">Technologies</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-white/60 mt-4">Tools dan teknologi yang saya kuasai</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="px-6 py-3 rounded-full glass text-white font-medium hover:scale-105 transition-transform cursor-default"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}