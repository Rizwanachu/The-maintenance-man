import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Katie Rosier',
    quote:
      'Adam provides a fantastic service, I highly recommend him. Really helped with my persistent shoulder issue after months of discomfort.',
  },
  {
    name: 'Lorena Pérez',
    quote:
      'His new location in Finsbury Park is cosy and welcoming. Adam is professional, knowledgeable and really targets the areas that need work.',
  },
  {
    name: 'James T.',
    quote:
      "As a regular runner, my calves were constantly tight. Two sessions here and I'm hitting personal bests again without the lingering tightness.",
  },
  {
    name: 'Sarah Jenkins',
    quote:
      "Best sports massage I've had in London. Adam actually listens, assesses the root cause, and applies exactly the right amount of pressure.",
  },
  {
    name: 'Michael Chen',
    quote:
      'Fixed a lower back issue that was plaguing me from desk work. The advice on posture and stretches to do at home was invaluable.',
  },
  {
    name: 'David O.',
    quote:
      'Top tier professional. Have been going for maintenance sessions during my CrossFit training and it has kept me completely injury-free.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header + stats */}
        <div className="flex flex-col gap-8 mb-10 md:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
              What Clients Are Saying
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Don't just take our word for it. Here's what people say about their recovery journey.
            </p>
          </div>

          {/* Stats row — 3-col grid so it always fits at any width */}
          <div className="grid grid-cols-3 bg-white rounded-2xl shadow-sm border border-border divide-x divide-border overflow-hidden w-full sm:w-auto sm:flex">
            {[
              { value: '5.0', label: 'Avg. Rating' },
              { value: '79+', label: 'Reviews' },
              { value: '100%', label: 'Recommend' },
            ].map((stat) => (
              <div key={stat.label} className="px-3 sm:px-5 py-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground leading-none mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border border-l-4 border-l-primary flex flex-col"
            >
              <div className="flex text-amber-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic mb-6 grow text-sm md:text-base">
                "{review.quote}"
              </p>
              <div className="font-bold text-foreground text-sm">— {review.name}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
