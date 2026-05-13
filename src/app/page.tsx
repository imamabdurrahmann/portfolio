import { Banner } from "@/components/Banner";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { LessonsLearned } from "@/components/LessonsLearned";
import { FunFacts } from "@/components/FunFacts";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Experience />
      <FeaturedProjects />
      <LessonsLearned />
      <TechStack />
      <FunFacts />
      <Contact />
    </div>
  );
}