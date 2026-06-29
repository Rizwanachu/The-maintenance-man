import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-neutral-900" />

      {/* Diagonal light sweep from top-left */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />

      {/* Soft radial glow bottom-right */}
      <div className="absolute -bottom-24 -right-24 w-[480px] h-[480px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      {/* Subtle top border line */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <span className="inline-block text-xs font-bold tracking-widest text-white/50 uppercase mb-5">
            Take the first step
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-[1.1]">
            Ready To Feel Better?
          </h2>

          <p className="text-base sm:text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Stop living with pain, stiffness, and movement limitations. Book your treatment today
            and start moving the way you should.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base font-bold bg-white text-primary hover:bg-white/90 rounded-md gap-2"
            >
              <a href="#contact">
                Book Appointment
                <ArrowRight size={16} />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-md gap-2"
            >
              <a href="tel:+447411808807">
                <Phone size={16} />
                +44 7411 808807
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
