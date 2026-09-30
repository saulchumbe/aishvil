import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServiciosSection from "@/components/sections/ServiciosSection";
import AntesDespuesSection from "@/components/sections/AntesDespuesSection";
import ProcesoSection from "@/components/sections/ProcesoSection";
import ExperienciaSection from "@/components/sections/ExperienciaSection";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <main className="bg-graphite-950 text-offwhite">
      <Hero />
      <StatsBar />
      <ServiciosSection />
      <AntesDespuesSection />
      <ProcesoSection />
      <ExperienciaSection />
      <CtaFinal />
    </main>
  );
}
