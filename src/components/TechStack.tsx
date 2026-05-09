const techStack = [
  { name: "Flutter" },
  { name: "Dart" },
  { name: "Riverpod" },
  { name: "BLoC" },
  { name: "Firebase" },
  { name: "SQLite" },
  { name: "Hive" },
  { name: "Clean Arch" },
];

export function TechStack() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <span className="text-primary text-xs font-medium uppercase tracking-wider">Technologies</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground hover:scale-105 transition-transform cursor-default"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}