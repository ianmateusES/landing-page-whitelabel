import { brand, content } from "@/config";
import { loadBrandResults } from "@/lib/load-results";
import { loadBrandTestimonials } from "@/lib/load-testimonials";
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
  const results = loadBrandResults(brand.slug);
  const testimonials = loadBrandTestimonials(brand.slug);

  return (
    <div className="w-full min-h-screen">
      <Header brand={brand} content={content.nav} />
      <main className="w-full">
        <Hero brand={brand} content={content.hero} />
        <About brand={brand} content={content.about} />
        <AuthorityStats content={content.stats} />
        <TrainingTypes content={content.trainingTypes} />
        <Support content={content.support} />
        <HowItWorks content={content.howItWorks} />
        <Comparison brand={brand} content={content.comparison} />
        <Results results={results} brandName={brand.name} content={content.results} />
        <Testimonials testimonials={testimonials} content={content.testimonials} />
        <Pricing brand={brand} content={content.plans} />
        <MissionCta brand={brand} content={content.mission} />
        <LeadForm brand={brand} content={content.form} plans={content.plans.items} />
      </main>
      <Footer brand={brand} content={content.footer} />
    </div>
  );
}
