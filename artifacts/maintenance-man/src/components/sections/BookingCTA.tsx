import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function BookingCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background with Primary Color */}
      <div className="absolute inset-0 bg-primary"></div>
      
      {/* Subtle Pattern/Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready To Feel Better?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop living with pain, stiffness, and movement limitations. Book your treatment today and start moving the way you should.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-10 text-base font-bold bg-white text-primary hover:bg-white/90 rounded-md">
              <a href="#contact">Book Appointment</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 text-base font-bold border-2 border-white/30 text-white hover:bg-white/10 rounded-md">
              <a href="tel:+447411808807">Call +44 7411 808807</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
