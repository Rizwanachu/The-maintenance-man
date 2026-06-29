import { Instagram, Facebook, Twitter } from 'lucide-react';
import logoImg from '@assets/image_1782735123750.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <img
                src={logoImg}
                alt="The Maintenance Man logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="text-base font-bold tracking-tight text-white uppercase leading-tight">
                  The Maintenance Man
                </div>
                <div className="text-xs text-neutral-400 tracking-wide">
                  Sports Massage & Injury Prevention
                </div>
              </div>
            </a>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Expert sports massage and injury prevention clinic located in Finsbury Park, London. Helping athletes and everyday clients move pain-free.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-neutral-300">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-neutral-300">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Follow us on Twitter" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-neutral-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-primary transition-colors text-sm">About Adam</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-primary transition-colors text-sm">Treatments</a></li>
              <li><a href="#reviews" className="text-neutral-400 hover:text-primary transition-colors text-sm">Client Reviews</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-primary transition-colors text-sm">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-neutral-400 text-sm">Sports Massage</span></li>
              <li><span className="text-neutral-400 text-sm">Deep Tissue Massage</span></li>
              <li><span className="text-neutral-400 text-sm">Injury Prevention</span></li>
              <li><span className="text-neutral-400 text-sm">Recovery Therapy</span></li>
              <li><span className="text-neutral-400 text-sm">Mobility Treatment</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <div className="text-neutral-400 text-sm mb-1">Address</div>
                <div className="text-white text-sm">232b Hornsey Rd, London N7 7LL</div>
              </li>
              <li>
                <div className="text-neutral-400 text-sm mb-1">Phone</div>
                <a href="tel:+447411808807" className="text-white text-sm hover:text-primary transition-colors">+44 7411 808807</a>
              </li>
              <li>
                <div className="text-neutral-400 text-sm mb-1">Email</div>
                <a href="mailto:info@themaintenanceman.co.uk" className="text-white text-sm hover:text-primary transition-colors">info@themaintenanceman.co.uk</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            © {currentYear} The Maintenance Man. All Rights Reserved.
          </p>
          <p className="text-neutral-500 text-sm text-center md:text-right">
            Sports Massage & Injury Prevention, London
          </p>
        </div>
      </div>
    </footer>
  );
}
