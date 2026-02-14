import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { OurReach } from "@/components/OurReach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Force scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <OurReach />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
