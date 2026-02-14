import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
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
                  href="#"
                  className="relative px-5 py-2.5 rounded-full font-mono text-xs md:text-[15px] font-semibold uppercase tracking-wider text-foreground/90 hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="#products"
                  className="relative px-5 py-2.5 rounded-full font-mono text-xs md:text-[15px] font-semibold uppercase tracking-wider text-foreground/90 hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Products</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="#clientele"
                  className="relative px-5 py-2.5 rounded-full font-mono text-xs md:text-[15px] font-semibold uppercase tracking-wider text-foreground/90 hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Clientele</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="#reach"
                  className="relative px-5 py-2.5 rounded-full font-mono text-xs md:text-[15px] font-semibold uppercase tracking-wider text-foreground/90 hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Our Reach</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="#about"
                  className="relative px-5 py-2.5 rounded-full font-mono text-xs md:text-[15px] font-semibold uppercase tracking-wider text-foreground/90 hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">About Us</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="#contact"
                  className="relative px-5 py-2.5 rounded-full font-mono text-xs md:text-[15px] font-semibold uppercase tracking-wider text-foreground/90 hover:text-primary transition-all duration-500 group/item overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                </a>
              </div>

              {/* Mobile Menu Button with Glossy Effect */}
              <button 
                className="lg:hidden relative p-2 rounded-full transition-all duration-500 group/mobile overflow-hidden"
                onClick={() => {
                  // Mobile menu toggle
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
                    onClick={() => scrollToSection("contact")}
                    className="relative btn-3d font-mono text-xs md:text-[15px] uppercase tracking-wider shadow-[0_4px_16px_0_rgba(125,82,53,0.2)] hover:shadow-[0_6px_24px_0_rgba(125,82,53,0.3)] transition-all duration-700 px-6 md:px-7 py-2.5 md:py-3 rounded-full bg-gradient-to-br from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary hover:to-primary text-white overflow-hidden"
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

      {/* Premium Warehouse Background */}
      <div className="absolute inset-0 -z-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-warehouse.jpg"
            alt="Magnum Packaging Warehouse"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Subtle dark overlay only at bottom for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.15) 0%, transparent 30%)'
          }}
        />
      </div>

      {/* Spacer for full screen height */}
      <div className="h-screen"></div>
    </section>
  );
};
