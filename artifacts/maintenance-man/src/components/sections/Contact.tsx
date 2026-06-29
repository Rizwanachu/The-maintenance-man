import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().min(10, 'Please enter a valid phone number.'),
  email: z.string().email('Please enter a valid email address.'),
  service: z.string().min(1, 'Please select a treatment type.'),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', phone: '', email: '', service: '', message: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Failed');

      form.reset();
      setLocation('/thank-you');
    } catch {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or call us directly on +44 7411 808807.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-3 text-base md:text-lg">
            Request an appointment or ask a question. We usually respond within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold text-sm">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-secondary/50 border-transparent focus:bg-white h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold text-sm">Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+44 7000 000000"
                            className="bg-secondary/50 border-transparent focus:bg-white h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold text-sm">Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          className="bg-secondary/50 border-transparent focus:bg-white h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold text-sm">Treatment Needed *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-secondary/50 border-transparent focus:bg-white h-11">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sports-massage">Sports Massage</SelectItem>
                          <SelectItem value="deep-tissue">Deep Tissue Massage</SelectItem>
                          <SelectItem value="injury-prevention">Injury Prevention</SelectItem>
                          <SelectItem value="recovery">Recovery Therapy</SelectItem>
                          <SelectItem value="mobility">Mobility Treatment</SelectItem>
                          <SelectItem value="posture">Posture & Movement Assessment</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold text-sm">
                        Message (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe your issue or goals..."
                          className="resize-none bg-secondary/50 border-transparent focus:bg-white min-h-[110px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white rounded-md"
                >
                  {isSubmitting ? 'Sending…' : 'Request Appointment'}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-neutral-900 text-white p-6 md:p-10 rounded-2xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Clinic Information</h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 bg-white/10 p-2 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="font-bold text-base mb-0.5">Location</div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      232b Hornsey Rd, Finsbury Park, London N7 7LL
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 bg-white/10 p-2 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="font-bold text-base mb-0.5">Phone</div>
                    <a
                      href="tel:+447411808807"
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      +44 7411 808807
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 bg-white/10 p-2 rounded-lg shrink-0">
                    <Mail className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <div className="font-bold text-base mb-0.5">Email</div>
                    <a
                      href="mailto:info@themaintenanceman.co.uk"
                      className="text-white/80 hover:text-white transition-colors text-sm break-all"
                    >
                      info@themaintenanceman.co.uk
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 bg-white/10 p-2 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 text-white/80" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-base mb-1">Opening Hours</div>
                    <ul className="text-white/80 text-sm space-y-0.5">
                      <li className="flex justify-between gap-6">
                        <span>Mon – Fri</span>
                        <span className="shrink-0">8:00 AM – 8:00 PM</span>
                      </li>
                      <li className="flex justify-between gap-6">
                        <span>Saturday</span>
                        <span className="shrink-0">9:00 AM – 5:00 PM</span>
                      </li>
                      <li className="flex justify-between gap-6">
                        <span>Sunday</span>
                        <span className="shrink-0">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder — tappable link to Google Maps */}
            <a
              href="https://maps.google.com/?q=232b+Hornsey+Rd,+London+N7+7LL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open clinic location in Google Maps"
              className="block bg-secondary rounded-2xl overflow-hidden min-h-[200px] md:min-h-[220px] flex-grow relative border border-border hover:border-primary/40 transition-colors"
            >
              <div
                className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-border text-center">
                  <MapPin className="w-7 h-7 text-primary mb-1.5" />
                  <span className="font-bold text-foreground text-sm">Finsbury Park, London</span>
                  <span className="text-xs text-primary mt-0.5 font-medium">Open in Maps ↗</span>
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
