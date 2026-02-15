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
    
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Wait for the page to render, then scroll to the section
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      // Only scroll to top if there's no hash
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
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
