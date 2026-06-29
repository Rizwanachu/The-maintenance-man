import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import heroImage from '@assets/generated_images/hero-massage.jpg';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-background">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-red-50/60 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-semibold tracking-wide text-accent uppercase">
                Sports Massage & Injury Prevention · London
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
              Sports Massage That Helps You <span className="text-primary">Move Pain-Free</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're recovering from injury, training for performance, or dealing with everyday aches and stiffness — get expert treatment that helps you move better, recover faster, and feel your best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 rounded-md">
                <a href="#contact">Book Your Session</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-2 hover:bg-muted rounded-md">
                <a href="tel:+447411808807">Call Now: +44 7411 808807</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium text-foreground">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-1">5.0 Rating</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div>79+ Reviews</div>
              <div className="h-4 w-px bg-border"></div>
              <div>10+ Years Experience</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10"
          >
            {/* Try to use the generated image, fallback to styling if it's missing during dev */}
            <div className="absolute inset-0 bg-muted">
              <img 
                src={heroImage} 
                alt="Professional sports massage therapy" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80';
                }}
              />
            </div>
            
            {/* Subtle overlay gradient to ensure it looks premium */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply pointer-events-none"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
