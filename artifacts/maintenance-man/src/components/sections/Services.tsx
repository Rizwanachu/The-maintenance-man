import { motion } from 'framer-motion';
import { Activity, Dumbbell, Stethoscope, RefreshCcw, Move, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Sports Massage',
    description:
      'Firm, targeted massage tailored to athletes and active individuals to prevent injury and enhance performance.',
  },
  {
    icon: Activity,
    title: 'Deep Tissue Massage',
    description:
      'Intense pressure addressing chronic muscle tension, knots, and adhesions in deeper muscle layers.',
  },
  {
    icon: Stethoscope,
    title: 'Injury Prevention',
    description:
      'Proactive screening and treatment to identify weaknesses before they develop into debilitating injuries.',
  },
  {
    icon: RefreshCcw,
    title: 'Recovery Therapy',
    description:
      'Specialised post-event treatment designed to flush out toxins and rapidly accelerate muscle recovery.',
  },
  {
    icon: Move,
    title: 'Mobility Treatment',
    description:
      'Focused joint mobilisation and stretching techniques to restore your natural range of motion.',
  },
  {
    icon: ClipboardCheck,
    title: 'Posture & Movement',
    description:
      'Comprehensive biomechanical assessment correcting imbalances caused by desk work or poor mechanics.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3 block">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Expert Treatments Tailored To You
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card p-5 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
