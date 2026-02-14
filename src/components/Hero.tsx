import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/80 rounded-lg px-6 py-3 shadow-sm border border-border/20">
          {/* Logo - Left */}
          <div className="flex items-center gap-2 animate-fade-in">
            <img
              src="/magnum-logo.png"
              alt="Magnum Packaging Logo"
              className="h-8 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Center Navigation Pills */}
          <div
            className="hidden md:flex items-center gap-1 animate-fade-in"
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

          {/* Right CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-3d font-mono text-xs uppercase tracking-wider shadow-md"
            >
              Get a Quote
            </Button>
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
