import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    window.location.href = `/#${id}`;
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Premium Kokonut UI Style Glossy Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary/20 via-white/30 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
            
            {/* Main glossy container - Transparent */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/30 via-white/20 to-white/10 rounded-full px-6 md:px-8 py-3 md:py-4 shadow-[0_8px_32px_0_rgba(125,82,53,0.06),0_2px_8px_0_rgba(125,82,53,0.03)] border border-white/30 hover:shadow-[0_12px_48px_0_rgba(125,82,53,0.08),0_4px_12px_0_rgba(125,82,53,0.04)] transition-all duration-700">
              {/* Top shine effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full"></div>
              
              {/* Primary glossy gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none"></div>
              
              {/* Secondary depth gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-primary/3 via-transparent to-white/5 pointer-events-none"></div>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              </div>
              
              {/* Bottom subtle shadow for depth */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/8 to-transparent rounded-b-full"></div>
            
              <div className="relative flex items-center justify-between gap-4">
              {/* Logo - Left */}
              <a href="/" className="flex items-center gap-2 animate-fade-in flex-shrink-0 cursor-pointer">
                <img
                  src="/magnum-logo.png"
                  alt="Magnum Packaging Logo"
                  className="h-8 md:h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </a>

              {/* Center Navigation with Enhanced Glossy Items */}
              <div
                className="hidden lg:flex items-center gap-1 animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                <a
                  href="/"
                  className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="/about"
                  className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="/#products"
                  className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Products</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="/clientele"
                  className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Clientele</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="/#reach"
                  className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Our Reach</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="/contact"
                  className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
              </div>

              {/* Mobile Menu Button with Glossy Effect */}
              <button 
                className="lg:hidden relative p-2 rounded-full transition-all duration-500 group/mobile overflow-hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-500"></div>
                {isMobileMenuOpen ? (
                  <svg className="relative z-10 w-6 h-6 text-foreground group-hover/mobile:text-primary transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="relative z-10 w-6 h-6 text-foreground group-hover/mobile:text-primary transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

              {/* Premium Glossy CTA Button */}
              <div className="hidden md:flex animate-fade-in flex-shrink-0" style={{ animationDelay: "200ms" }}>
                <div className="relative group/cta">
                  {/* Outer glow */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 opacity-0 group-hover/cta:opacity-100 blur-lg transition-opacity duration-700"></div>
                  
                  <Button
                    onClick={() => {
                      window.location.href = "/contact#quote";
                      setTimeout(() => {
                        const element = document.getElementById('quote');
                        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 100);
                    }}
                    className="relative btn-3d font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider shadow-[0_4px_16px_0_rgba(125,82,53,0.2)] hover:shadow-[0_6px_24px_0_rgba(125,82,53,0.3)] transition-all duration-700 px-6 md:px-7 py-2.5 md:py-3 rounded-full bg-gradient-to-br from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary hover:to-primary text-white overflow-hidden"
                  >
                    {/* Top shine */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    
                    {/* Glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Shimmer on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
                    </div>
                    
                    <span className="relative z-10">Get Quote</span>
                  </Button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-20 right-4 left-4 bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a 
                href="/" 
                className="text-lg font-roboto font-bold uppercase text-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="text-lg font-roboto font-bold uppercase text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-lg font-roboto font-bold uppercase text-foreground hover:text-primary transition-colors duration-300 py-2 text-left"
              >
                Products
              </button>
              <a 
                href="/clientele" 
                className="text-lg font-roboto font-bold uppercase text-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Clientele
              </a>
              <button 
                onClick={() => scrollToSection('reach')}
                className="text-lg font-roboto font-bold uppercase text-foreground hover:text-primary transition-colors duration-300 py-2 text-left"
              >
                Our Reach
              </button>
              <a 
                href="/contact" 
                className="text-lg font-roboto font-bold uppercase text-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              
              <div className="pt-4 border-t border-foreground/10">
                <Button
                  onClick={() => {
                    window.location.href = "/contact#quote";
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full btn-3d font-roboto text-sm font-bold uppercase tracking-wider bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-3 rounded-full"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">

          {/* Company Overview */}
          <div className="backdrop-blur-sm bg-white/60 border border-border/40 rounded-2xl p-8 md:p-12 mb-12 shadow-[0_8px_32px_rgba(125,82,53,0.08)] hover:shadow-[0_12px_48px_rgba(125,82,53,0.12)] transition-all duration-500">
            <div className="flex items-center justify-center mb-8">
              <a href="/" className="cursor-pointer">
                <img 
                  src="/magnum-logo.png" 
                  alt="Magnum Packaging LLP" 
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </a>
            </div>

            <div className="space-y-6 text-base md:text-lg text-foreground/75 leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Magnum Packaging LLP</span>, established in <span className="text-primary font-semibold">2025</span>, is a modern corrugated packaging manufacturing company specializing in high-quality <span className="font-semibold text-primary">3-ply and 5-ply corrugated boxes</span> for industrial and commercial applications.
              </p>
              
              <p>
                With an installed production capacity of approximately <span className="font-semibold text-primary">500 tonnes per month</span>, the company is equipped to support bulk packaging requirements with consistency, reliability, and scalable output.
              </p>
              
              <p>
                Backed by an <span className="font-semibold text-foreground">automatic manufacturing setup</span>, two-colour printing capability, precision slotting, automatic gluing, reinforced stitching solutions, and efficient material-handling systems, Magnum Packaging LLP delivers durable and customized packaging solutions to businesses across <span className="font-semibold text-primary">Central and South India</span>.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Mission Card */}
            <div className="group relative backdrop-blur-sm bg-gradient-to-br from-white/70 to-white/50 border border-border/40 rounded-2xl p-8 shadow-[0_8px_32px_rgba(125,82,53,0.08)] hover:shadow-[0_12px_48px_rgba(125,82,53,0.12)] transition-all duration-500 hover:-translate-y-1">
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    Our Mission
                  </h3>
                </div>

                <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                  To deliver <span className="font-semibold text-foreground">reliable, high-performance corrugated packaging solutions</span> through efficient manufacturing processes, technical expertise, and consistent quality—supporting our clients' supply chains with <span className="text-primary font-semibold">strength, scalability, and dependability</span>.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative backdrop-blur-sm bg-gradient-to-br from-white/70 to-white/50 border border-border/40 rounded-2xl p-8 shadow-[0_8px_32px_rgba(125,82,53,0.08)] hover:shadow-[0_12px_48px_rgba(125,82,53,0.12)] transition-all duration-500 hover:-translate-y-1">
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    Our Vision
                  </h3>
                </div>

                <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                  To become a <span className="font-semibold text-foreground">trusted regional leader in corrugated packaging</span> by building long-term partnerships, investing in modern manufacturing infrastructure, and continuously improving <span className="text-accent font-semibold">packaging performance and operational efficiency</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">
                Manufacturing Excellence
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Automatic Manufacturing Setup",
                "Two-Colour Printing Capability",
                "Precision Slotting Technology",
                "Automatic Gluing Systems",
                "Reinforced Stitching Solutions",
                "Efficient Material Handling"
              ].map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/40 border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-3 h-3 rounded bg-primary mt-1.5 flex-shrink-0"></div>
                  <p className="font-roboto font-bold text-sm md:text-base text-foreground/90">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              onClick={() => window.location.href = "/contact"}
              className="relative btn-3d font-roboto text-sm md:text-base font-bold uppercase tracking-wider shadow-[0_4px_16px_0_rgba(125,82,53,0.2)] hover:shadow-[0_6px_24px_0_rgba(125,82,53,0.3)] transition-all duration-700 px-8 py-6 rounded-full bg-gradient-to-br from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary hover:to-primary text-white overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none"></div>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
