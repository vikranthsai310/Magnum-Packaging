import { Hero } from "@/components/Hero";
import { Clientele } from "@/components/Clientele";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Clientele />
      <CallToAction />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
