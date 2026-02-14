import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Box, Gift, Factory, Layers, Recycle } from "lucide-react";

const productCategories = [
  {
    title: "Corrugated Boxes",
    icon: Box,
    items: [
      { name: "Single Wall Boxes", desc: "Lightweight yet sturdy boxes ideal for retail products and e-commerce shipping." },
      { name: "Double Wall Boxes", desc: "Enhanced protection for heavier items, industrial goods, and fragile products." },
      { name: "Triple Wall Boxes", desc: "Maximum strength for heavy machinery, automotive parts, and bulk shipments." }
    ]
  },
  {
    title: "Custom Cartons",
    icon: Package,
    items: [
      { name: "Die-Cut Boxes", desc: "Precision-cut boxes in custom shapes for unique product presentations." },
      { name: "Printed Cartons", desc: "Full-color branded packaging with your logo, graphics, and product information." },
      { name: "Folding Cartons", desc: "Space-efficient flat-packed cartons that assemble quickly on your production line." },
      { name: "Mailer Boxes", desc: "Sleek, professional packaging perfect for subscription boxes and direct shipping." }
    ]
  },
  {
    title: "Industrial Packaging",
    icon: Factory,
    items: [
      { name: "Heavy-Duty Crates", desc: "Robust cardboard crates for machinery, equipment, and bulk industrial goods." },
      { name: "Pallet Boxes", desc: "Large-scale packaging solutions for warehouse storage and bulk transportation." },
      { name: "Export Packaging", desc: "International shipping compliant packaging with moisture and shock protection." }
    ]
  },
  {
    title: "Retail Packaging",
    icon: Gift,
    items: [
      { name: "Display Boxes", desc: "Eye-catching retail display packaging that showcases your products effectively." },
      { name: "Gift Boxes", desc: "Premium presentation boxes for gifts, hampers, and luxury products." },
      { name: "Food-Grade Boxes", desc: "Safe, certified packaging for food products and consumables." }
    ]
  },
  {
    title: "Specialty Solutions",
    icon: Layers,
    items: [
      { name: "Partition Inserts", desc: "Custom dividers and inserts to secure multiple items within a single box." },
      { name: "Protective Packaging", desc: "Corner protectors, edge guards, and cushioning solutions for fragile items." }
    ]
  },
  {
    title: "Sustainable Options",
    icon: Recycle,
    items: [
      { name: "Recycled Cardboard", desc: "Eco-friendly packaging made from 100% recycled materials." },
      { name: "Biodegradable Solutions", desc: "Fully biodegradable packaging that minimizes environmental footprint." }
    ]
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/20" />
        <div className="absolute inset-0 grid-lines opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          {/* Koyeb-style label */}
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            [ Our Products ]
          </span>

          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-foreground mb-6">
            Packaging Solutions
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From standard corrugated boxes to custom-designed packaging, we manufacture
            solutions for every industry and requirement.
          </p>
        </div>

        {/* Product Categories - Koyeb Card Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="koyeb-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  {/* Icon with border style */}
                  <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <CardTitle className="font-mono text-sm uppercase tracking-wide text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 pt-0">
                  {category.items.map((item, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-3">
                      <h4 className="font-mono text-xs font-semibold text-foreground mb-1 uppercase">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
