import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Eye, Factory, Award } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 md:py-5">
        <div className="max-w-7xl mx-auto">
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/30 via-white/20 to-white/10 rounded-full px-6 md:px-8 py-3 md:py-4 shadow-[0_8px_32px_0_rgba(125,82,53,0.06)] border border-white/30">
            <div className="flex items-center justify-between">
              <Button
                onClick={() => navigate("/")}
                variant="ghost"
                className="font-roboto font-bold text-foreground hover:text-primary transition-colors duration-300 gap-2 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Button>

              <img
                src="/magnum-logo.png"
                alt="Magnum Packaging Logo"
                className="h-8 md:h-10 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 animate-fade-in">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-primary mb-4 block">
              [ Established June 2025 ]
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              About Us
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Company Overview */}
          <div className="backdrop-blur-sm bg-white/60 border border-border/40 rounded-2xl p-8 md:p-12 mb-12 shadow-[0_8px_32px_rgba(125,82,53,0.08)] hover:shadow-[0_12px_48px_rgba(125,82,53,0.12)] transition-all duration-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Factory className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Magnum Packaging LLP
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-base md:text-lg text-foreground/75 leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Magnum Packaging LLP</span>, established in <span className="text-primary font-semibold">June 2025</span>, is a modern corrugated packaging manufacturing company specializing in high-quality <span className="font-semibold text-primary">3-ply and 5-ply corrugated boxes</span> for industrial and commercial applications.
              </p>
              
              <p>
                With an installed production capacity of approximately <span className="font-semibold text-primary">500 tonnes per month</span>, the company is equipped to support bulk packaging requirements with consistency, reliability, and scalable output.
              </p>
              
              <p>
                Backed by an <span className="font-semibold text-foreground">automatic manufacturing setup</span>, two-colour printing capability, precision slotting, automatic gluing, reinforced stitching solutions, and efficient material-handling systems, Magnum Packaging LLP delivers durable and customized packaging solutions to businesses across <span className="font-semibold text-primary">Central and South India</span>.
              </p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Mission Card */}
            <div className="group relative backdrop-blur-sm bg-gradient-to-br from-white/70 to-white/50 border border-border/40 rounded-2xl p-8 shadow-[0_8px_32px_rgba(125,82,53,0.08)] hover:shadow-[0_12px_48px_rgba(125,82,53,0.12)] transition-all duration-500 hover:-translate-y-1">
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    Our Mission
                  </h3>
                </div>

                <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                  To deliver <span className="font-semibold text-foreground">reliable, high-performance corrugated packaging solutions</span> through efficient manufacturing processes, technical expertise, and consistent quality—supporting our clients' supply chains with <span className="text-primary font-semibold">strength, scalability, and dependability</span>.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative backdrop-blur-sm bg-gradient-to-br from-white/70 to-white/50 border border-border/40 rounded-2xl p-8 shadow-[0_8px_32px_rgba(125,82,53,0.08)] hover:shadow-[0_12px_48px_rgba(125,82,53,0.12)] transition-all duration-500 hover:-translate-y-1">
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    Our Vision
                  </h3>
                </div>

                <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                  To become a <span className="font-semibold text-foreground">trusted regional leader in corrugated packaging</span> by building long-term partnerships, investing in modern manufacturing infrastructure, and continuously improving <span className="text-accent font-semibold">packaging performance and operational efficiency</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground">
                Manufacturing Excellence
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Automatic Manufacturing Setup",
                "Two-Colour Printing Capability",
                "Precision Slotting Technology",
                "Automatic Gluing Systems",
                "Reinforced Stitching Solutions",
                "Efficient Material Handling"
              ].map((capability, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/40 border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="font-roboto font-bold text-sm md:text-base text-foreground/90">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              onClick={() => navigate("/#contact")}
              className="relative btn-3d font-roboto text-sm md:text-base font-bold uppercase tracking-wider shadow-[0_4px_16px_0_rgba(125,82,53,0.2)] hover:shadow-[0_6px_24px_0_rgba(125,82,53,0.3)] transition-all duration-700 px-8 py-6 rounded-full bg-gradient-to-br from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary hover:to-primary text-white overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none"></div>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
