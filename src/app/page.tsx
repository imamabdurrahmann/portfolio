import { Banner } from "@/components/Banner";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <FeaturedProjects />
      <TechStack />
      <Contact />
    </div>
  );
}
