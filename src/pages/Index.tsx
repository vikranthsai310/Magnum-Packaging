import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { OurReach } from "@/components/OurReach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
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
