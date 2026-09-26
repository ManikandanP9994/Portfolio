import { AboutExperienceContact } from "@/components/AboutExperienceContact";
import { BlogPreview } from "@/components/BlogPreview";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Skills />
      <BlogPreview />
      <AboutExperienceContact />
    </main>
  );
}
