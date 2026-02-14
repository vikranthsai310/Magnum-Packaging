export const Products = () => {
  const products = [
    {
      title: "3-Ply Corrugated Boxes",
      description: "Lightweight and cost-effective packaging solutions"
    },
    {
      title: "5-Ply Heavy-Duty Boxes",
      description: "Enhanced strength for industrial and export applications"
    },
    {
      title: "Printed Corrugated Packaging",
      description: "Branding-focused packaging solutions"
    },
    {
      title: "Die-Cut Boxes",
      description: "Custom-designed packaging for specific product shapes"
    },
    {
      title: "Bulk Industrial Packaging",
      description: "High-volume supply for manufacturing and distribution businesses"
    }
  ];

  return (
    <section id="products" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background with grid */}
      <div className="absolute inset-0 grid-lines opacity-40"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
            We manufacture customized corrugated packaging designed for strength, durability, and efficient logistics.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm bg-white/60 hover:bg-[#f5ebe0] border border-border/40 rounded-xl p-6 md:p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_12px_48px_rgba(125,82,53,0.15)] hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              {/* Content */}
              <div className="relative flex items-start gap-4">
                <div className="w-3 h-3 rounded bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h3 className="font-roboto font-bold text-foreground text-lg md:text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Centered Last Item */}
        <div className="flex justify-center">
          <div
            className="group relative backdrop-blur-sm bg-white/60 hover:bg-[#f5ebe0] border border-border/40 rounded-xl p-6 md:p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_12px_48px_rgba(125,82,53,0.15)] hover:-translate-y-2 w-full md:w-1/2"
            style={{ animationDelay: '400ms' }}
          >
            
            {/* Content */}
            <div className="relative flex items-start gap-4">
              <div className="w-3 h-3 rounded bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <div>
                <h3 className="font-roboto font-bold text-foreground text-lg md:text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {products[4].title}
                </h3>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  {products[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
