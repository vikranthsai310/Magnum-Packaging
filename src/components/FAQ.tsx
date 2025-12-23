import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of cardboard boxes do you manufacture?",
    answer: "We manufacture a wide range including corrugated boxes (single, double, and triple wall), custom die-cut cartons, printed packaging, mailer boxes, industrial crates, pallet boxes, retail display packaging, and food-grade boxes. All our products can be customized to your specifications.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantity varies by product type. For standard corrugated boxes, we typically require a minimum of 500 pieces. Custom printed and die-cut boxes may have higher minimums. Contact us for specific requirements based on your needs.",
  },
  {
    question: "How long does production take?",
    answer: "Standard corrugated boxes are typically ready within 5-7 business days. Custom printed and die-cut packaging may take 10-15 business days depending on complexity. We also offer expedited production for urgent requirements.",
  },
  {
    question: "Do you provide custom branding on boxes?",
    answer: "Yes! We offer full-color branding, flexographic, and digital branding options. You can add your logo, brand colors, product information, handling instructions, and any custom graphics to your packaging.",
  },
  {
    question: "Are your packaging materials eco-friendly?",
    answer: "Absolutely! All our cardboard and corrugated materials are 100% recyclable. We also offer packaging made from recycled materials and biodegradable options for environmentally conscious brands.",
  },
  {
    question: "Do you deliver across India?",
    answer: "Yes, we have a reliable logistics network covering all major cities and industrial zones across India. We ensure timely delivery to your warehouse, factory, or distribution center.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-lines opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          {/* Koyeb-style label */}
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            [ FAQ ]
          </span>

          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight text-foreground">
            Questions & Answers
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="koyeb-card px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left font-mono text-sm uppercase tracking-wide hover:no-underline py-6 text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
