import { Upload, Palette, Printer, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Design",
    description: "Share your artwork or design files with us through our easy submission form.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Review & Approval",
    description: "We review your design, provide a proof, and ensure everything looks perfect.",
  },
  {
    number: "03",
    icon: Printer,
    title: "Professional Printing",
    description: "Your order is printed using premium materials and state-of-the-art equipment.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Ready for Pickup",
    description: "Your prints are carefully packaged and ready for you to collect.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Simple 4-Step Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border/50 -z-10" />
                )}
                
                <div className="text-center space-y-4">
                  {/* Step number */}
                  <div className="text-7xl font-display font-bold text-foreground/20">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-card shadow-card flex items-center justify-center">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
