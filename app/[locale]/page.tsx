import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gamification from '@/components/Gamification';
import Challenges from '@/components/Challenges';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <Features />
      <Gamification />
      <Challenges />
      <CTA />
      <Footer />
    </main>
  );
}
