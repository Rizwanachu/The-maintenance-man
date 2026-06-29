import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What should I expect in my first session?',
    answer:
      "Your first session includes a brief consultation to understand your history, symptoms, and goals. We'll perform a movement assessment if necessary, followed by targeted hands-on treatment. We'll finish with actionable advice on stretches or adjustments to help maintain the benefits.",
  },
  {
    question: 'How many sessions will I need?',
    answer:
      "This entirely depends on your specific issue. Acute minor injuries might resolve in 1–3 sessions, while chronic conditions might require a longer-term management plan. We'll always discuss a realistic timeline during your first visit — our goal is to get you better as quickly as possible, not to keep you coming back unnecessarily.",
  },
  {
    question: 'Do I need a referral?',
    answer:
      'No referral is needed. You can book directly with us. However, if we assess your condition and determine it requires medical intervention or imaging, we will refer you to the appropriate medical professional.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Please wear comfortable, loose-fitting clothing. Shorts, leggings, and sports bras/athletic tops are ideal as they allow us to easily assess your movement and access the muscles that need treatment.',
  },
  {
    question: 'Can you help with chronic pain or old injuries?',
    answer:
      "Yes. Many of our clients come to us with issues they've had for years. While older injuries can take longer to address, targeted soft tissue therapy, mobility work, and proper movement mechanics can significantly reduce or eliminate chronic pain.",
  },
  {
    question: 'Where are you located?',
    answer:
      'The clinic is located at 232b Hornsey Rd, London N7 7LL, right in Finsbury Park. It is a welcoming, premium space designed specifically for clinical treatments.',
  },
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Common Questions
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-secondary/50 px-5 rounded-xl border border-transparent data-[state=open]:border-primary/20 data-[state=open]:bg-white data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-left font-bold text-sm sm:text-base md:text-lg hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
