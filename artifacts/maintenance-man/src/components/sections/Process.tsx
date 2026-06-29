import { motion } from 'framer-motion';

const steps = [
  {
    num: "1",
    title: "Book Your Appointment",
    description: "Select a time that works for you via our secure booking system or give us a call."
  },
  {
    num: "2",
    title: "Assessment & Consultation",
    description: "We'll discuss your history, assess your movement, and identify the root cause."
  },
  {
    num: "3",
    title: "Personalised Treatment",
    description: "Targeted hands-on therapy applying the right pressure to the right areas."
  },
  {
    num: "4",
    title: "Move Better & Recover",
    description: "Walk out feeling lighter, moving better, with actionable advice to stay that way."
  }
];

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-sm font-bold tracking-widest text-accent uppercase mb-3 block">Simple Path To Recovery</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            What To Expect
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-primary-foreground/20"></div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-primary-foreground/20"></div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-0"
              >
                {/* Number Circle */}
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary border-4 border-accent flex items-center justify-center text-xl font-bold z-10 md:mb-6 shadow-[0_0_0_8px_rgba(var(--primary),1)]">
                  {step.num}
                </div>
                
                <div className="pt-2 md:pt-0">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
