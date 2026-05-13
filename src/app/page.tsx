import { Banner } from "@/components/Banner";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <ScrollReveal>
        <FeaturedProjects />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <TechStack />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Contact />
      </ScrollReveal>
    </div>
  );
}
