export const Clientele = () => {
  const clients = [
    "Apricot Foods Private Limited",
    "Daram Pal & Satyapal Group (Pass Pass)",
    "Future Group",
    "DJ Group (Pan Bahar)",
    "Sampre Nutritions Limited",
    "Alpenliebe (Perfetti)",
  ];

  return (
    <section id="clientele" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background with grid */}
      <div className="absolute inset-0 grid-lines opacity-40"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Magnum Packaging LLP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Clients Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-display text-center text-foreground mb-3">
            Our Valued Clients
          </h3>
          <p className="text-center text-foreground/60 mb-10 text-sm md:text-base">
            We have been supplying our products mainly to renowned domestic and export customers
          </p>

          {/* Client Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-sm bg-white/60 border border-border/40 rounded-lg p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(125,82,53,0.12)] hover:-translate-y-1"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Client name */}
                <div className="relative flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <p className="font-roboto font-bold text-foreground group-hover:text-primary transition-colors duration-500 text-sm md:text-base">
                    {client}
                  </p>
                </div>
              </div>
            ))}
            
            {/* And many more card */}
            <div className="group relative backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(125,82,53,0.12)] hover:-translate-y-1">
              <div className="relative flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                <p className="font-roboto font-bold text-primary text-sm md:text-base">
                  And many more…
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="inline-block backdrop-blur-sm bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed">
              Striving to maintain <span className="text-primary font-bold">quality and customer satisfaction</span> at all costs, we are ready to serve you by meeting your requirements of corrugated boxes now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
