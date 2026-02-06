import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

