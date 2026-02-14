import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Contact = () => {
  const phoneNumber = "919959674999";
  const displayPhone = "+91 9959674999";
  const contactPerson = "CH SSC Ravi Theja";
  const email = "magnumpackagingllp@gmail.com";
  const website = "www.magnumpackaging.in";
  const locationUrl = "https://maps.google.com/?q=I.E.+Medchal+Hyderabad+Telangana+501401";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleLocation = () => {
    window.open(locationUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background with central glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(125, 82, 53, 0.05) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Koyeb-style label */}
          <span className="font-mono text-xs uppercase tracking-widest text-primary block">
            [ Contact ]
          </span>

          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-foreground">
            Get in Touch
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your packaging requirements? Contact <strong className="text-foreground">{contactPerson}</strong> and our team will help you find the perfect solution.
          </p>

          {/* Contact buttons - Koyeb style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="btn-spark font-mono text-xs uppercase tracking-wider"
            >
              <a href={`mailto:${email}`} className="gap-2">
                <Mail className="w-5 h-5" />
                {email}
              </a>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 btn-spark font-mono text-xs uppercase tracking-wider"
                >
                  <MessageCircle className="w-5 h-5" />
                  {displayPhone}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-card border-border">
                <DropdownMenuItem onClick={handleWhatsApp} className="cursor-pointer gap-2 font-mono text-xs uppercase">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCall} className="cursor-pointer gap-2 font-mono text-xs uppercase">
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="lg"
              variant="outline"
              onClick={handleLocation}
              className="gap-2 btn-spark font-mono text-xs uppercase tracking-wider"
            >
              <MapPin className="w-5 h-5" />
              Our Factory
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
