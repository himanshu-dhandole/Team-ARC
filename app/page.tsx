import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
    </div>
  );
}
