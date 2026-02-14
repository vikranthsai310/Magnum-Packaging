import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Koyeb-Style Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center gap-2 animate-fade-in">
            <img
              src="/Logo.jpeg"
              alt="Magnum Packaging Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-mono text-lg font-bold tracking-tight text-foreground">MAGNUM</span>
          </div>

          {/* Center Navigation Pills - Koyeb Style */}
          <div
            className="hidden md:flex items-center gap-1 nav-pill-container animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <a
              href="#"
              className="px-4 py-2 rounded-md font-mono text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary hover:bg-muted/50 transition-all duration-200"
            >
              Home
            </a>
            <a
              href="#products"
              className="px-4 py-2 rounded-md font-mono text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary hover:bg-muted/50 transition-all duration-200"
            >
              Products
            </a>
            <a
              href="#why-us"
              className="px-4 py-2 rounded-md font-mono text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary hover:bg-muted/50 transition-all duration-200"
            >
              Why Us
            </a>
            <a
              href="#faq"
              className="px-4 py-2 rounded-md font-mono text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary hover:bg-muted/50 transition-all duration-200"
            >
              FAQ
            </a>
          </div>

          {/* Right CTA Button - Koyeb 3D Style */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-3d font-mono text-xs uppercase tracking-wider"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Koyeb-Style Background with Brown Theme */}
      <div className="absolute inset-0 -z-10">
        {/* Base light brown background */}
        <div className="absolute inset-0 bg-background" />

        {/* Grid lines overlay - Koyeb style */}
        <div className="absolute inset-0 grid-lines opacity-15 lattice-drift" />

        {/* Radial warm brown accents from edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 0% 0%, rgba(125, 82, 53, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 0%, rgba(170, 90, 56, 0.02) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 100%, rgba(212, 160, 32, 0.02) 0%, transparent 50%)
            `
          }}
        />

        {/* Center subtle depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0) 0%, rgba(247, 245, 243, 0.5) 80%)'
          }}
        />

        {/* Diagonal scan sweep animation - warm tint */}
        <div
          className="absolute inset-0 pointer-events-none scan-sweep"
          style={{
            background: 'linear-gradient(135deg, transparent 30%, rgba(125, 82, 53, 0.02) 48%, rgba(170, 90, 56, 0.03) 50%, rgba(125, 82, 53, 0.02) 52%, transparent 70%)',
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto pt-20 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8">
            {/* Logo */}
            <div className="animate-fade-in">
              <img
                src="/magnum-logo.png"
                alt="Magnum Packaging LLP"
                className="h-16 md:h-20 object-contain"
              />
            </div>

            {/* Tagline */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <span className="inline-block px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                Premium Packaging Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-foreground leading-tight line-reveal-1" style={{ animationDelay: "200ms" }}>
              Quality Cardboard
              <br />
              <span className="text-primary">Packaging</span> for
              <br />
              Your Business
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl line-reveal-2" style={{ animationDelay: "300ms" }}>
              Manufacturer of premium corrugated boxes, custom cartons, and industrial packaging solutions. 
              Built for durability, designed for your brand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="btn-3d btn-spark font-mono text-sm uppercase tracking-wider"
              >
                Get a Quote
                <span className="ml-2">→</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("products")}
                className="font-mono text-sm uppercase tracking-wider border-2"
              >
                View Products
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/30 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">1000+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Happy Clients</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Quality Assured</p>
              </div>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Large Featured Product */}
              <div className="col-span-2 relative group rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 border border-border/50 bg-card">
                <div className="aspect-[16/10] bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center">
                  <img
                    src="/products/box-1.jpg"
                    alt="Custom Corrugated Boxes"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center p-8"><svg class="w-20 h-20 text-primary/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg><p class="font-mono text-xs uppercase tracking-wider text-muted-foreground">Corrugated Boxes</p></div>';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-background">Corrugated Boxes</p>
                </div>
              </div>
              
              {/* Product 2 */}
              <div className="relative group rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 border border-border/50 bg-card">
                <div className="aspect-square bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center">
                  <img
                    src="/products/box-2.jpg"
                    alt="Custom Printed Cartons"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center p-6"><svg class="w-16 h-16 text-primary/40 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg><p class="font-mono text-xs uppercase tracking-wider text-muted-foreground text-center">Printed Cartons</p></div>';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-background">Printed Cartons</p>
                </div>
              </div>
              
              {/* Product 3 */}
              <div className="relative group rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 border border-border/50 bg-card">
                <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/20 flex items-center justify-center">
                  <img
                    src="/products/box-3.jpg"
                    alt="Industrial Packaging"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center p-6"><svg class="w-16 h-16 text-primary/40 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg><p class="font-mono text-xs uppercase tracking-wider text-muted-foreground text-center">Industrial Pack</p></div>';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-background">Industrial Pack</p>
                </div>
              </div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -z-10 -top-10 -right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-secondary/3 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
