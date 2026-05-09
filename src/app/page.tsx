import Link from "next/link";
import { ArrowRight, Mail, Link2, Star, Heart, TrendingUp, Code2, ExternalLink } from "lucide-react";
import { Banner } from "@/components/Banner";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Experience />
      <FeaturedProjects />
      <TechStack />
      <Contact />
    </div>
  );
}