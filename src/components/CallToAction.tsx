import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  const scrollToQuote = () => {
    window.location.href = "/contact#quote";
    setTimeout(() => {
      const element = document.getElementById('quote');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background with amber glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 grid-lines opacity-8" />
        {/* Central glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(125, 82, 53, 0.03) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Koyeb-style label */}
        <span className="font-mono text-xs uppercase tracking-widest text-primary block">
          [ Partner With Us ]
        </span>

        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-foreground">
          Let's Build Your
          <br />
          <span className="text-primary">Packaging Solution</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          From concept to delivery, we manufacture cardboard packaging that protects your products
          and strengthens your brand. Partner with <span className="font-semibold text-foreground">Magnum Packaging</span> for reliable,
          sustainable, and high-quality solutions.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            size="lg"
            onClick={scrollToQuote}
            className="btn-3d btn-spark font-mono text-sm uppercase tracking-wider"
          >
            Request a Quote
            <span className="ml-2">→</span>
          </Button>
        </div>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 pt-8">
          <div className="h-px w-16 bg-border" />
          <div className="w-2 h-2 rounded-full bg-primary glow-pulse" />
          <div className="h-px w-16 bg-border" />
        </div>
      </div>
    </section>
  );
};
