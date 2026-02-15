import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Send, Plus, X } from "lucide-react";

interface BoxSpec {
  id: number;
  length: string;
  width: string;
  height: string;
  quantity: string;
}

export const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [plyType, setPlyType] = useState("3");
  const [boxes, setBoxes] = useState<BoxSpec[]>([
    { id: 1, length: "", width: "", height: "", quantity: "" }
  ]);

  const addBox = () => {
    setBoxes([...boxes, { 
      id: Date.now(), 
      length: "", 
      width: "", 
      height: "", 
      quantity: "" 
    }]);
  };

  const removeBox = (id: number) => {
    if (boxes.length > 1) {
      setBoxes(boxes.filter(box => box.id !== id));
    }
  };

  const updateBox = (id: number, field: keyof BoxSpec, value: string) => {
    setBoxes(boxes.map(box => 
      box.id === id ? { ...box, [field]: value } : box
    ));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      // Extract form data
      const company = formData.get("company") as string;
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const contact = formData.get("contact") as string;
      const paperBF = formData.get("paperBF") as string || "Not Specified";
      const paperGsm = formData.get("paperGsm") as string || "Not Specified";
      const message = formData.get("message") as string || "No additional requirements";

      // Calculate total quantity
      const totalQuantity = boxes.reduce((sum, box) => sum + (parseInt(box.quantity) || 0), 0);

      // Create box specifications string
      const boxSpecifications = boxes.map((box, index) => {
        return `Box ${index + 1}:
  Length:              ${box.length} mm
  Width:               ${box.width} mm
  Height:              ${box.height} mm
  Quantity:            ${box.quantity} units`;
      }).join('\n\n');

      // Create structured email
      const subject = `Quote Request from Website`;
      
      const emailBody = `QUOTE REQUEST
═══════════════════════════════════════════════════

COMPANY INFORMATION
────────────────────────────────────────────────
Company Name:          ${company}
Contact Person:        ${name}
Email Address:         ${email}
Phone Number:          ${contact}


BOX SPECIFICATIONS
────────────────────────────────────────────────
${boxSpecifications}

Total Quantity:        ${totalQuantity} units
Ply Type:              ${plyType} Ply


MATERIAL SPECIFICATIONS
────────────────────────────────────────────────
Paper BF:              ${paperBF}
Paper GSM:             ${paperGsm}


ADDITIONAL REQUIREMENTS
────────────────────────────────────────────────
${message}


═══════════════════════════════════════════════════
This quote request was submitted via Magnum Packaging website
Date: ${new Date().toLocaleDateString('en-IN', { 
  day: '2-digit', 
  month: 'long', 
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
═══════════════════════════════════════════════════`;

      // Create Gmail compose link
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=magnumpackagingllp@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open Gmail
      window.open(gmailLink, "_blank");

      toast({
        title: "✅ Opening Gmail!",
        description: "Your quote request is ready to send.",
      });

      // Reset form after a short delay
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setPlyType("3");
        setBoxes([{ id: Date.now(), length: "", width: "", height: "", quantity: "" }]);
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
    <section id="quote" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8 animate-fade-in mb-12">
          {/* Header */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Get Your Quote
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-8"></div>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Fill in your packaging specifications and we'll get back to you with a detailed quote.
          </p>
        </div>

        <Card className="card-glass shadow-soft animate-fade-in text-left">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Customer Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Customer Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact">Phone Number *</Label>
                    <Input 
                      id="contact" 
                      name="contact" 
                      type="tel"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required
                  />
                </div>
              </div>

              {/* Box Size and Quantity */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Box Specifications</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addBox}
                    className="gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </Button>
                </div>
                
                {boxes.map((box, index) => (
                  <div key={box.id} className="relative p-4 border rounded-lg bg-muted/10">
                    {boxes.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeBox(box.id)}
                        className="absolute top-2 right-2 h-8 w-8 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                    
                    <div className="space-y-2 mb-3">
                      <Label className="text-sm font-medium text-muted-foreground">
                        Box {index + 1}
                      </Label>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`length-${box.id}`}>Length (mm) *</Label>
                        <Input 
                          id={`length-${box.id}`}
                          type="number"
                          step="1"
                          required
                          value={box.length}
                          onChange={(e) => updateBox(box.id, 'length', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`width-${box.id}`}>Width (mm) *</Label>
                        <Input 
                          id={`width-${box.id}`}
                          type="number"
                          step="1"
                          required
                          value={box.width}
                          onChange={(e) => updateBox(box.id, 'width', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`height-${box.id}`}>Height (mm) *</Label>
                        <Input 
                          id={`height-${box.id}`}
                          type="number"
                          step="1"
                          required
                          value={box.height}
                          onChange={(e) => updateBox(box.id, 'height', e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`quantity-${box.id}`}>Quantity *</Label>
                        <Input 
                          id={`quantity-${box.id}`}
                          type="number"
                          required
                          value={box.quantity}
                          onChange={(e) => updateBox(box.id, 'quantity', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ply Type */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Ply Configuration</h3>
                <RadioGroup value={plyType} onValueChange={setPlyType} className="flex gap-8">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="ply3" />
                    <Label htmlFor="ply3" className="cursor-pointer">3 Ply</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5" id="ply5" />
                    <Label htmlFor="ply5" className="cursor-pointer">5 Ply</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Optional Fields */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Optional Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="paperBF">Paper BF</Label>
                    <Input 
                      id="paperBF" 
                      name="paperBF"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="paperGsm">Paper GSM</Label>
                    <Input 
                      id="paperGsm" 
                      name="paperGsm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={3}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full group rounded-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Quote"}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
