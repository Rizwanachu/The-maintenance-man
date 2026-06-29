import { motion } from 'framer-motion';
import { Users, Star, Award, HeartPulse } from 'lucide-react';

const stats = [
  { value: '79+', label: 'Reviews', icon: Star },
  { value: '10+', label: 'Years Experience', icon: Award },
  { value: '5,000+', label: 'Treatments', icon: Users },
  { value: '5-Star', label: 'Rated Service', icon: HeartPulse },
];

export default function SocialProof() {
  return (
    <section className="bg-primary text-primary-foreground py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-2 md:px-4"
            >
              <stat.icon className="w-7 h-7 mb-2 text-white/80" />
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0.5 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-white/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
