import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [printType, setPrintType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      // Extract form data
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const contact = formData.get("contact") as string;
      const type = printType || "N/A";
      const message = formData.get("message") as string || "N/A";

      // Create professional WhatsApp message
      const whatsappMessage = `*New Printing Quote Request*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${contact}
🖨️ *Print Type:* ${type}

📝 *Project Details:*
${message}

---
_Sent from 4Planets Printing Website_`;

      // Encode message for WhatsApp URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappNumber = "919030621500"; // +91 90306 21500 in international format
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappURL, "_blank");

      toast({
        title: "✅ Opening WhatsApp!",
        description: "Your quote request is ready to send via WhatsApp.",
      });

      // Reset form after a short delay
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setPrintType("");
      }, 1000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="submit" className="py-24 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <Card className="card-glass shadow-soft animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="font-display text-3xl md:text-4xl">
              Get Your Printing Quote
            </CardTitle>
            <CardDescription className="text-base mt-4">
              Fill in your details and tell us about your printing needs. We'll get back to you with a quote and timeline.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Phone Number *</Label>
                <Input 
                  id="contact" 
                  name="contact" 
                  type="tel"
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Print Type *</Label>
                <Select name="type" required value={printType} onValueChange={setPrintType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select print type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Business Cards">Business Cards</SelectItem>
                    <SelectItem value="Brochures">Brochures</SelectItem>
                    <SelectItem value="Flyers">Flyers</SelectItem>
                    <SelectItem value="Banners">Banners</SelectItem>
                    <SelectItem value="Posters">Posters</SelectItem>
                    <SelectItem value="Custom Project">Custom Project</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details & Special Requirements</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  placeholder="Tell us about your printing needs, size specifications, finishing options, etc..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full group" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Quote"}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
