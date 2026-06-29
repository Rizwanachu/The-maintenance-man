import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Activity } from 'lucide-react';
import aboutImage from '@assets/generated_images/about-therapist.jpg';

export default function About() {
  const benefits = [
    {
      title: 'Injury Prevention',
      description: 'Stop injuries before they start with targeted assessment and proactive treatment.',
      icon: ShieldCheck,
    },
    {
      title: 'Faster Recovery',
      description: "Accelerate your body's natural healing process after intense training or injury.",
      icon: Zap,
    },
    {
      title: 'Improved Mobility',
      description: 'Restore full range of motion to stiff joints and tight muscle groups.',
      icon: Activity,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-5 tracking-tight">
              Helping London Stay Active, Healthy & Pain-Free
            </h2>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground mb-8">
              <p>
                With over a decade of clinical experience, I've helped thousands of athletes,
                runners, and desk-bound professionals overcome pain and return to the activities
                they love. My approach isn't just about temporary relief — it's about fixing the
                root cause.
              </p>
              <p>
                At The Maintenance Man clinic in Finsbury Park, we don't believe in generic,
                one-size-fits-all treatments. Whether you're dealing with a chronic niggle,
                recovering from a sports injury, or preparing for your next marathon, your
                treatment plan is tailored entirely to your body and your goals.
              </p>
              <p>
                My philosophy is simple: understand the mechanics of the pain, apply
                evidence-based treatment to resolve it, and give you the tools to keep it from
                coming back.
              </p>
            </div>

            {/* Benefit cards — 3 col on sm+, stack on xs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col">
                  <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-3 text-primary">
                    <benefit.icon size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="h-12 px-7 text-base bg-primary hover:bg-primary/90 rounded-md font-semibold w-full sm:w-auto"
            >
              <a href="#contact">Book Your Assessment</a>
            </Button>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative background element — clipped by overflow-hidden on section */}
            <div className="absolute -inset-4 bg-secondary rounded-3xl transform rotate-3 -z-10"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
              <img
                src={aboutImage}
                alt="Adam, professional sports massage therapist"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6 pt-16">
                <div className="text-white">
                  <div className="font-bold text-lg mb-0.5">Adam</div>
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wider">
                    Lead Therapist & Founder
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
