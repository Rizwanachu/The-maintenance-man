import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import heroImage from '@assets/generated_images/hero-massage.jpg';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-40 md:pb-24 overflow-hidden bg-background">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-50/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-xl order-2 lg:order-1"
          >
            <div className="inline-block px-3 py-1 mb-5 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-primary uppercase">
                Sports Massage & Injury Prevention · London
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-5 tracking-tight">
              Sports Massage That Helps You{' '}
              <span className="text-primary">Move Pain-Free</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-7 leading-relaxed">
              Whether you're recovering from injury, training for performance, or
              dealing with everyday aches and stiffness — get expert treatment
              that helps you move better, recover faster, and feel your best.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                asChild
                size="lg"
                className="h-12 px-7 text-base bg-primary hover:bg-primary/90 rounded-md font-semibold"
              >
                <a href="#contact">Book Your Session</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-7 text-base border-2 hover:bg-muted rounded-md font-semibold"
              >
                <a href="tel:+447411808807">Call Now: +44 7411 808807</a>
              </Button>
            </div>

            {/* Trust badges — wrap gracefully on small screens */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-foreground">
              <div className="flex items-center gap-1 shrink-0">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-1">5.0 Rating</span>
              </div>
              <div className="h-4 w-px bg-border shrink-0"></div>
              <div className="shrink-0">79+ Reviews</div>
              <div className="h-4 w-px bg-border shrink-0"></div>
              <div className="shrink-0">10+ Years Experience</div>
            </div>
          </motion.div>

          {/* Hero image — shows on top on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10"
          >
            <img
              src={heroImage}
              alt="Professional sports massage therapy"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
