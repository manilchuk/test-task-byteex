import Hero from '@/components/Hero/Hero';
import Press from '@/components/Press/Press';
import Features from '@/components/Features/Features';
import BestSelfSection from '@/components/BestSelfSection/BestSelfSection';
import ComfortSection from '@/components/ComfortSection/ComfortSection';
import FansSection from '@/components/FansSection/FansSection';
import FaqSection from '@/components/FaqSection/FaqSection';
import ImpactSection from '@/components/ImpactSection/ImpactSection';
import FindSomethingSection from '@/components/FindSomethingSection/FindSomethingSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Press />
      <Features />
      <BestSelfSection />
      <ComfortSection />
      <FansSection />
      <FaqSection />
      <ImpactSection />
      <FindSomethingSection />
    </>
  );
}
