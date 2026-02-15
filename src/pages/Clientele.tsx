import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Clientele = () => {
  const clients = [
    { name: "DJ Group", logo: "/clients/dj%20group.jpeg" },
    { name: "Future Group", logo: "/clients/future%20group.jpeg" },
    { name: "DS Group", logo: "/clients/Ds%20group.jpeg" },
    { name: "Rockwell", logo: "/clients/rockwell.jpeg" },
    { name: "Perfetti van Melle", logo: "/clients/perfetti.jpeg" },
    { name: "RP-Sanjiv Goenka Group", logo: "/clients/rp%20sanjiv%20goenka%20group.jpeg" },
    { name: "Sampre Nutritions", logo: "/clients/sampre.jpeg" },
    { name: "SR Group", logo: "/clients/sr%20group.jpeg" },
  ];

  return (
    <div className="min-h-screen">
      {/* Premium Glossy Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary/20 via-white/30 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
            
            {/* Main glossy container */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/30 via-white/20 to-white/10 rounded-full px-6 md:px-8 py-3 md:py-4 shadow-[0_8px_32px_0_rgba(125,82,53,0.06),0_2px_8px_0_rgba(125,82,53,0.03)] border border-white/30 hover:shadow-[0_12px_48px_0_rgba(125,82,53,0.08),0_4px_12px_0_rgba(125,82,53,0.04)] transition-all duration-700">
              {/* Glossy effects */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-full"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-primary/3 via-transparent to-white/5 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/8 to-transparent rounded-b-full"></div>
            
              <div className="relative flex items-center justify-between gap-4">
                {/* Logo */}
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

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-1 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <a href="/" className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden">
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  </a>
                  <a href="/about" className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden">
                    <span className="relative z-10">About Us</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  </a>
                  <a href="/#products" className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden">
                    <span className="relative z-10">Products</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  </a>
                  <a href="/clientele" className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-primary transition-all duration-500 group/item overflow-hidden">
                    <span className="relative z-10">Clientele</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-100 transition-opacity duration-500"></div>
                  </a>
                  <a href="/#reach" className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden">
                    <span className="relative z-10">Our Reach</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  </a>
                  <a href="/contact" className="relative px-5 py-2.5 rounded-full font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider text-foreground hover:text-primary transition-all duration-500 group/item overflow-hidden">
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  </a>
                </div>

                {/* Get Quote CTA */}
                <div className="hidden md:flex animate-fade-in flex-shrink-0" style={{ animationDelay: "200ms" }}>
                  <div className="relative group/cta">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 opacity-0 group-hover/cta:opacity-100 blur-lg transition-opacity duration-700"></div>
                    <Button
                      onClick={() => {
                        window.location.href = "/contact#quote";
                        setTimeout(() => {
                          const element = document.getElementById('quote');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="relative btn-3d font-roboto text-xs md:text-[15px] font-bold uppercase tracking-wider shadow-[0_4px_16px_0_rgba(125,82,53,0.2)] hover:shadow-[0_6px_24px_0_rgba(125,82,53,0.3)] transition-all duration-700 px-6 md:px-7 py-2.5 md:py-3 rounded-full bg-gradient-to-br from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary hover:to-primary text-white overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none"></div>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
              Our Clientele
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Trusted by India's leading brands for premium packaging solutions
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-sm bg-white/90 border border-border/60 rounded-2xl p-10 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_20px_60px_rgba(125,82,53,0.2)] hover:-translate-y-3 flex items-center justify-center min-h-[180px]"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Client Logo */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="relative max-w-full max-h-28 w-auto object-contain transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<p class="font-roboto font-bold text-foreground text-base text-center">${client.name}</p>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center">
            <div className="inline-block backdrop-blur-sm bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/30 rounded-3xl px-12 py-8 max-w-4xl">
              <p className="text-lg md:text-xl text-foreground/80 font-medium leading-relaxed mb-4">
                Striving to maintain <span className="text-primary font-bold">quality and customer satisfaction</span> at all costs
              </p>
              <p className="text-base text-foreground/60">
                & many more valued partners across India
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clientele;
