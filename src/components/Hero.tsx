import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

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
            <Package className="w-7 h-7 text-primary" />
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
        {/* Base deep brown background */}
        <div className="absolute inset-0 bg-background" />

        {/* Grid lines overlay - Koyeb style */}
        <div className="absolute inset-0 grid-lines opacity-60 lattice-drift" />

        {/* Radial amber glow from edges - replacing Koyeb's blue glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 0% 0%, rgba(212, 160, 32, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 0%, rgba(232, 168, 50, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 100%, rgba(170, 90, 56, 0.1) 0%, transparent 50%)
            `
          }}
        />

        {/* Center spotlight for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(45, 27, 13, 0) 0%, rgba(45, 27, 13, 0.4) 60%, rgba(45, 27, 13, 0.7) 100%)'
          }}
        />

        {/* Diagonal scan sweep animation - amber tint */}
        <div
          className="absolute inset-0 pointer-events-none scan-sweep"
          style={{
            background: 'linear-gradient(135deg, transparent 30%, rgba(212, 160, 32, 0.08) 48%, rgba(232, 168, 50, 0.12) 50%, rgba(212, 160, 32, 0.08) 52%, transparent 70%)',
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto text-center space-y-8 pt-20">
        {/* News Banner - Koyeb Style */}
        <div className="animate-fade-in">
          <span className="news-banner">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Premium Cardboard Solutions
          </span>
        </div>

        {/* Koyeb-Style Main Headline - Anton font, uppercase, large */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight text-foreground line-reveal-1"
        >
          Premium Cardboard
          <br />
          <span className="text-primary">Packaging</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed line-reveal-2">
          From corrugated boxes to custom cartons, we manufacture high-quality
          cardboard packaging solutions that protect your products and elevate your brand.
        </p>

        {/* CTA Buttons - Koyeb Style */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("products")}
            className="btn-3d btn-spark font-mono text-sm uppercase tracking-wider"
          >
            Explore Products
            <span className="ml-2">→</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="btn-spark font-mono text-sm uppercase tracking-wider"
          >
            <span className="mr-2">◂</span>
            Get Quote
            <span className="ml-2">▸</span>
          </Button>
        </div>

        {/* Trust Section - Koyeb monospace style */}
        <div className="pt-16 border-t border-border/40 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <p className="font-mono text-xs text-muted-foreground mb-6 uppercase tracking-widest">
            Our Packaging Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-sm text-foreground">Corrugated Boxes</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-sm text-foreground">Custom Cartons</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-sm text-foreground">Industrial Packaging</span>
            </div>
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-mono text-sm text-foreground">Retail Boxes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
