import { Card, CardContent } from "@/components/ui/card";
import { Factory, Clock, Shield, Leaf, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Modern Manufacturing",
    description: "State-of-the-art machinery and production lines ensuring precision and quality in every box.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Efficient production processes with timely delivery to meet your business deadlines.",
  },
  {
    icon: Shield,
    title: "Superior Durability",
    description: "High-strength cardboard materials that protect your products during transit and storage.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "100% recyclable and sustainable packaging solutions that reduce environmental impact.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Expert team providing end-to-end guidance from design to delivery.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-lines opacity-10" />
        {/* Subtle warm brown accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(125, 82, 53, 0.02) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          {/* Koyeb-style label */}
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            [ Why Choose Us ]
          </span>

          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-foreground mb-6">
            Why Magnum?
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine advanced manufacturing technology with expert craftsmanship to deliver
            premium cardboard packaging that exceeds industry standards.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* First row - 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={index}
                  className="koyeb-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    {/* Icon with Koyeb minimal style */}
                    <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <h3 className="font-mono text-sm font-bold mb-2 text-foreground uppercase tracking-wide">
                      {reason.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {reasons.slice(3, 5).map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={index + 3}
                  className="koyeb-card group"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>

                    <h3 className="font-mono text-sm font-bold mb-2 text-foreground uppercase tracking-wide">
                      {reason.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
