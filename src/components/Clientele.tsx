export const Clientele = () => {
  const clients = [
    { name: "RP-Sanjiv Goenka Group", logo: "/clients/rp%20sanjiv%20goenka%20group.jpeg" },
    { name: "Rockwell", logo: "/clients/rockwell.jpeg" },
    { name: "Future Group", logo: "/clients/future%20group.jpeg" },
    { name: "DS Group", logo: "/clients/Ds%20group.jpeg" },
    { name: "Sampre Nutritions", logo: "/clients/sampre.jpeg" },
    { name: "SR Group", logo: "/clients/sr%20group.jpeg" },
    { name: "DJ Group", logo: "/clients/dj%20group.jpeg" },
    { name: "Perfetti van Melle", logo: "/clients/perfetti.jpeg" },
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
        <div className="mb-16">
          {/* Client Grid - Logo Display */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-sm bg-white/80 border border-border/50 rounded-xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(125,82,53,0.15)] hover:-translate-y-2 flex items-center justify-center min-h-[140px]"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Client logo */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="relative max-w-full max-h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.currentTarget;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<p class="font-roboto font-bold text-foreground text-sm text-center">${client.name}</p>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* And more indicator */}
          <div className="text-center mt-8">
            <p className="text-foreground/50 font-medium text-base tracking-wide">
              & more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
