export const OurReach = () => {
  return (
    <section id="reach" className="py-24 px-4 relative overflow-hidden bg-muted/20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Title */}
          <div className="space-y-3">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-foreground">
              Our Reach
            </h2>
            <p className="font-mono text-sm uppercase tracking-wider text-primary">
              Serving Central & South India
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            With strong manufacturing capability and efficient logistics, we supply corrugated packaging across:
          </p>

          {/* Regions */}
          <div className="pt-6">
            <p className="font-mono text-sm md:text-base text-foreground/80 leading-relaxed">
              Andhra Pradesh • Telangana • Karnataka • Tamil Nadu • Maharashtra • Central India regions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
