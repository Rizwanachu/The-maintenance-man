import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function ThankYou() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-secondary/20 py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-lg w-full text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Request Received!
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10">
            Thanks for reaching out. We'll review your details and get back to you within a few hours to confirm your appointment.
          </p>

          <div className="bg-white rounded-2xl border border-border p-6 mb-8 text-left shadow-sm">
            <p className="text-sm font-semibold text-foreground mb-1">Need to reach us sooner?</p>
            <a
              href="tel:+447411808807"
              className="flex items-center gap-2 text-primary font-bold text-base hover:underline"
            >
              <Phone size={16} />
              +44 7411 808807
            </a>
          </div>

          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
