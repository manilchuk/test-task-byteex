import Hero from '@/components/Hero/Hero';
import Press from '@/components/Press/Press';
import Features from '@/components/Features/Features';
import BestSelfSection from '@/components/BestSelfSection/BestSelfSection';
import ComfortSection from '@/components/ComfortSection/ComfortSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Press />
      <Features />
      <BestSelfSection />
      <ComfortSection />
    </>
  );
}
