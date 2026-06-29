import { useState } from 'react';
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
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  service: z.string().min(1, "Please select a treatment type."),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Sent Successfully",
        description: "Thanks for reaching out! We'll be in touch shortly to confirm your appointment.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Request an appointment or ask a question. We usually respond within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-secondary/50 border-transparent focus:bg-white h-12" {...field} />
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
                        <FormLabel className="text-foreground font-semibold">Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+44 7000 000000" className="bg-secondary/50 border-transparent focus:bg-white h-12" {...field} />
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
                      <FormLabel className="text-foreground font-semibold">Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="bg-secondary/50 border-transparent focus:bg-white h-12" {...field} />
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
                      <FormLabel className="text-foreground font-semibold">Treatment Needed *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-secondary/50 border-transparent focus:bg-white h-12">
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
                      <FormLabel className="text-foreground font-semibold">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe your issue or goals..." 
                          className="resize-none bg-secondary/50 border-transparent focus:bg-white min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-base font-bold bg-primary hover:bg-primary/90 text-white rounded-md">
                  {isSubmitting ? "Sending..." : "Request Appointment"}
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
            className="flex flex-col h-full"
          >
            <div className="bg-primary text-white p-8 md:p-10 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-8">Clinic Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Location</div>
                    <p className="text-white/80 leading-relaxed">
                      232b Hornsey Rd<br />
                      Finsbury Park<br />
                      London N7 7LL
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Phone</div>
                    <a href="tel:+447411808807" className="text-white/80 hover:text-accent transition-colors block">
                      +44 7411 808807
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Email</div>
                    <a href="mailto:info@themaintenanceman.co.uk" className="text-white/80 hover:text-accent transition-colors block">
                      info@themaintenanceman.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Hours</div>
                    <ul className="text-white/80 space-y-1">
                      <li className="flex justify-between w-48"><span>Mon – Fri:</span> <span>8:00 AM - 8:00 PM</span></li>
                      <li className="flex justify-between w-48"><span>Saturday:</span> <span>9:00 AM - 5:00 PM</span></li>
                      <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-secondary rounded-2xl overflow-hidden flex-grow min-h-[250px] relative border border-border flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-luminosity"></div>
              <div className="relative z-10 flex flex-col items-center bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-border">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <span className="font-bold text-foreground">Finsbury Park, London</span>
                <span className="text-sm text-muted-foreground">Open in Maps</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
