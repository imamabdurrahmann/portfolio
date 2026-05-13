import { Banner } from "@/components/Banner";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { LessonsLearned } from "@/components/LessonsLearned";
import { TechStack } from "@/components/TechStack";
import { FunFacts } from "@/components/FunFacts";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <FeaturedProjects />
      <LessonsLearned />
      <TechStack />
      <FunFacts />
      <Contact />
    </div>
  );
}
