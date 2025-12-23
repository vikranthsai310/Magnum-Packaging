export const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Section background with grid */}
      <div className="absolute inset-0 -z-10 bg-muted/30">
        <div className="absolute inset-0 grid-lines opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Koyeb-style section label */}
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            [ About Us ]
          </span>

          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-foreground">
            Who We Are
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-foreground">Magnum Packaging</span>, we are a leading manufacturer of premium cardboard packaging solutions. With decades of expertise and state-of-the-art manufacturing facilities, we deliver durable, sustainable, and customized packaging that protects your products and enhances your brand presence.
          </p>

          {/* Koyeb-style decorative line */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-12 bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
