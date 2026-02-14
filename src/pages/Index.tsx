import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
