import { motion } from 'framer-motion';
import { Users, Star, Award, HeartPulse } from 'lucide-react';

const stats = [
  { value: "79+", label: "Reviews", icon: Star },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "5000+", label: "Treatments", icon: Users },
  { value: "5-Star", label: "Rated Service", icon: HeartPulse },
];

export default function SocialProof() {
  return (
    <section className="bg-primary text-primary-foreground py-12 border-y-4 border-white/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-primary-foreground/20">
          
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <stat.icon className="w-8 h-8 mb-3 text-accent" />
              <div className="text-3xl md:text-4xl font-bold mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
