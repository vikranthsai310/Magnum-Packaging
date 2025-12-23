import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Products } from "@/components/Products";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Products />
      <CallToAction />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
