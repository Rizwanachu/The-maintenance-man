import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Activity } from 'lucide-react';
import aboutImage from '@assets/generated_images/about-therapist.jpg';

export default function About() {
  const benefits = [
    {
      title: "Injury Prevention",
      description: "Stop injuries before they start with targeted assessment and proactive treatment.",
      icon: ShieldCheck
    },
    {
      title: "Faster Recovery",
      description: "Accelerate your body's natural healing process after intense training or injury.",
      icon: Zap
    },
    {
      title: "Improved Mobility",
      description: "Restore full range of motion to stiff joints and tight muscle groups.",
      icon: Activity
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 tracking-tight">
              Helping London Stay Active, Healthy & Pain-Free
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-10">
              <p>
                With over a decade of clinical experience, I've helped thousands of athletes, runners, and desk-bound professionals overcome pain and return to the activities they love. My approach isn't just about temporary relief—it's about fixing the root cause.
              </p>
              <p>
                At The Maintenance Man clinic in Finsbury Park, we don't believe in generic, one-size-fits-all treatments. Whether you're dealing with a chronic niggle, recovering from a sports injury, or preparing for your next marathon, your treatment plan is tailored entirely to your body and your goals.
              </p>
              <p>
                My philosophy is simple: understand the mechanics of the pain, apply evidence-based treatment to resolve it, and give you the tools to keep it from coming back.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 text-primary">
                    <benefit.icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 rounded-md">
              <a href="#contact">Book Your Assessment</a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background decorative element */}
            <div className="absolute -inset-4 bg-secondary rounded-3xl transform rotate-3 -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto">
              <img 
                src={aboutImage} 
                alt="Adam, professional sports massage therapist" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8 pt-20">
                <div className="text-white">
                  <div className="font-bold text-xl mb-1">Adam</div>
                  <div className="text-white/80 text-sm font-medium uppercase tracking-wider">Lead Therapist & Founder</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
