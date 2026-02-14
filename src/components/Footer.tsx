import { Package, Factory, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="bg-muted/40 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand & Address */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/magnum-logo.png"
                  alt="Magnum Packaging Logo"
                  className="h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading manufacturer of premium cardboard packaging solutions. Quality craftsmanship, sustainable materials, and custom designs for your business.
              </p>

              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <address className="not-italic text-muted-foreground leading-relaxed">
                  <span className="font-mono font-semibold text-foreground block mb-1 uppercase text-xs tracking-wider">Magnum Packaging LLP</span>
                  Shed no. D-13, I.E. Medchal,<br />
                  Hyderabad, Telangana - 501401,<br />
                  India
                </address>
              </div>

            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-mono text-xs font-bold mb-6 text-foreground uppercase tracking-widest">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs uppercase tracking-wide">
                    ▸ Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs uppercase tracking-wide">
                    ▸ Products
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs uppercase tracking-wide">
                    ▸ FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-mono text-xs uppercase tracking-wide"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    ▸ Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Products */}
            <div>
              <h3 className="font-mono text-xs font-bold mb-6 text-foreground uppercase tracking-widest">
                Our Products
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wide">Corrugated Boxes</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Factory className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wide">Industrial Packaging</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Package className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wide">Custom Cartons</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status indicator - Koyeb style */}
          <div className="flex items-center justify-between pt-8 border-t border-border/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wide">Manufacturing 24/7</span>
            </div>

            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
              Quality packaging · Sustainable solutions
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar - High contrast Koyeb style */}
      <div className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs text-primary-foreground text-center uppercase tracking-widest">
            © 2025 Magnum Packaging · Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
};
