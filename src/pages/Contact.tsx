import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Contact = () => {
  const scrollToSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  const phoneNumbers = [
    { number: "919959674999", display: "+91 9959674999" },
    { number: "919347694445", display: "+91 9347694445" },
    { number: "919000974008", display: "+91 9000974008" }
  ];
  const contactPerson = "CH SSC Ravi Theja";
  const email = "magnumpackagingllp@gmail.com";
  const locationUrl = "https://maps.app.goo.gl/HL46wA6tjQipPXCU9";

  const handleWhatsApp = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleLocation = () => {
    window.open(locationUrl, "_blank");
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
              <div className="flex items-center gap-2 animate-fade-in flex-shrink-0">
                <img
                  src="/magnum-logo.png"
                  alt="Magnum Packaging Logo"
                  className="h-8 md:h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

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
                  className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
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
                  href="/#clientele"
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
                  className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-100 transition-opacity duration-500"></div>
                </a>
              </div>

              {/* Mobile Menu Button with Glossy Effect */}
              <button 
                className="lg:hidden relative p-2 rounded-full transition-all duration-500 group/mobile overflow-hidden"
                onClick={() => {
                  alert('Mobile menu - implement if needed');
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-500"></div>
                <svg className="relative z-10 w-6 h-6 text-foreground group-hover/mobile:text-primary transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Premium Glossy CTA Button */}
              <div className="hidden md:flex animate-fade-in flex-shrink-0" style={{ animationDelay: "200ms" }}>
                <div className="relative group/cta">
                  {/* Outer glow */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 opacity-0 group-hover/cta:opacity-100 blur-lg transition-opacity duration-700"></div>
                  
                  <Button
                    onClick={() => {
                      const element = document.getElementById('quote');
                      element?.scrollIntoView({ behavior: 'smooth' });
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

      {/* Contact Section */}
      <section id="contact" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-8"></div>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your packaging requirements? Our team will help you find the perfect solution.
            </p>

            {/* Contact buttons - Koyeb style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="btn-spark font-mono text-xs uppercase tracking-wider rounded-full"
              >
                <a href={`mailto:${email}`} className="gap-2">
                  <Mail className="w-5 h-5" />
                  {email}
                </a>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 btn-spark font-mono text-xs uppercase tracking-wider rounded-full"
                  >
                    <Phone className="w-5 h-5" />
                    Contact
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-64 bg-card border-border">
                  {phoneNumbers.map((phone, index) => (
                    <DropdownMenu key={index}>
                      <DropdownMenuTrigger asChild>
                        <DropdownMenuItem className="cursor-pointer gap-2 font-mono text-xs justify-between" onSelect={(e) => e.preventDefault()}>
                          <span className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {phone.display}
                          </span>
                          <span>›</span>
                        </DropdownMenuItem>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" className="w-40 bg-card border-border">
                        <DropdownMenuItem onClick={() => handleCall(phone.number)} className="cursor-pointer gap-2 font-mono text-xs uppercase">
                          <Phone className="w-4 h-4" />
                          <span>Call</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleWhatsApp(phone.number)} className="cursor-pointer gap-2 font-mono text-xs uppercase">
                          <MessageCircle className="w-4 h-4" />
                          <span>WhatsApp</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                size="lg"
                variant="outline"
                onClick={handleLocation}
                className="gap-2 btn-spark font-mono text-xs uppercase tracking-wider rounded-full"
              >
                <MapPin className="w-5 h-5" />
                Our Factory
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm />

      <Footer />
    </div>
  );
};

export default Contact;
