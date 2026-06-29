import { motion } from 'framer-motion';

const steps = [
  {
    num: '1',
    title: 'Book Your Appointment',
    description: 'Select a time that works for you via our secure booking system or give us a call.',
  },
  {
    num: '2',
    title: 'Assessment & Consultation',
    description: "We'll discuss your history, assess your movement, and identify the root cause.",
  },
  {
    num: '3',
    title: 'Personalised Treatment',
    description: 'Targeted hands-on therapy applying the right pressure to the right areas.',
  },
  {
    num: '4',
    title: 'Move Better & Recover',
    description: 'Walk out feeling lighter, moving better, with actionable advice to stay that way.',
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-32 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3 block">
            Simple Path To Recovery
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            What To Expect
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line — desktop horizontal */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-white/10"></div>

          {/* Connecting line — mobile vertical, aligned to circle centre */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-px bg-white/10"></div>

          <div className="grid md:grid-cols-4 gap-10 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0"
              >
                {/* Number circle — red accent on dark background */}
                <div className="shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-xl font-bold z-10 md:mb-6 text-white shadow-lg shadow-primary/30">
                  {step.num}
                </div>

                <div className="pt-1 md:pt-0">
                  <h3 className="text-base md:text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
