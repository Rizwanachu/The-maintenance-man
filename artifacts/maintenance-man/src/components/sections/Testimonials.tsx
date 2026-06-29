import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Katie Rosier",
    quote: "Adam provides a fantastic service, I highly recommend him. Really helped with my persistent shoulder issue after months of discomfort."
  },
  {
    name: "Lorena Pérez",
    quote: "His new location in Finsbury Park is cosy and welcoming. Adam is professional, knowledgeable and really targets the areas that need work."
  },
  {
    name: "James T.",
    quote: "As a regular runner, my calves were constantly tight. Two sessions here and I'm hitting personal bests again without the lingering tightness."
  },
  {
    name: "Sarah Jenkins",
    quote: "Best sports massage I've had in London. Adam actually listens, assesses the root cause, and applies exactly the right amount of pressure."
  },
  {
    name: "Michael Chen",
    quote: "Fixed a lower back issue that was plaguing me from desk work. The advice on posture and stretches to do at home was invaluable."
  },
  {
    name: "David O.",
    quote: "Top tier professional. Have been going for maintenance sessions during my CrossFit training and it's kept me completely injury-free."
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              What Clients Are Saying
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what people have to say about their recovery journey.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-border shrink-0">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">5.0</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">79+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Google Reviews</div>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Recommend</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border border-l-4 border-l-accent flex flex-col"
            >
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic mb-8 grow">
                "{review.quote}"
              </p>
              <div className="font-bold text-foreground">
                — {review.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
