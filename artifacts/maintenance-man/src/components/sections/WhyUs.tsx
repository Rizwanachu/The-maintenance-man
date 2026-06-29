import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: "10+ Years Experience",
    description: "Extensive background treating athletes and everyday clients."
  },
  {
    title: "Tailored Treatment Plans",
    description: "Every single session is personalised to your specific needs."
  },
  {
    title: "Sports & Performance Focus",
    description: "Techniques proven in elite sports and clinical settings."
  },
  {
    title: "Comfortable Treatment Space",
    description: "Welcoming, premium clinic located in Finsbury Park, London."
  },
  {
    title: "Proven Recovery Techniques",
    description: "Evidence-based methods that get real, measurable results."
  },
  {
    title: "5-Star Client Satisfaction",
    description: "Consistently rated 5 stars by 79+ satisfied clients."
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Why Clients Trust The Maintenance Man
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
