import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/sections/WhatsAppButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* pb-20 on mobile gives clearance for the sticky booking bar */}
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </div>
  );
}

function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-md border-t border-border z-50 md:hidden animate-in slide-in-from-bottom-full">
      <a 
        href="#contact" 
        className="flex items-center justify-center w-full bg-primary text-white font-medium py-3 px-6 rounded-md shadow-lg"
      >
        Book Now
      </a>
    </div>
  );
}
