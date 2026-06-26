import { brand, content } from "@/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AuthorityStats } from "@/components/sections/AuthorityStats";
import { TrainingTypes } from "@/components/sections/TrainingTypes";
import { Support } from "@/components/sections/Support";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { MissionCta } from "@/components/sections/MissionCta";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <Header brand={brand} content={content.nav} />
      <main>
        <Hero brand={brand} content={content.hero} />
        <About brand={brand} content={content.about} />
        <AuthorityStats content={content.stats} />
        <TrainingTypes content={content.trainingTypes} />
        <Support content={content.support} />
        <HowItWorks content={content.howItWorks} />
        <Comparison brand={brand} content={content.comparison} />
        <Results brand={brand} content={content.results} />
        <Testimonials content={content.testimonials} />
        <Pricing brand={brand} content={content.plans} />
        <MissionCta brand={brand} content={content.mission} />
        <LeadForm brand={brand} content={content.form} />
      </main>
      <Footer brand={brand} content={content.footer} />
    </>
  );
}
