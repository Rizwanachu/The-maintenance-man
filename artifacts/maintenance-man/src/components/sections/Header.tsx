import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImg from '@assets/image_1782735123750.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="The Maintenance Man logo"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-primary uppercase leading-none">
                The Maintenance Man
              </span>
              <span className="text-xs text-muted-foreground tracking-wide font-medium">
                Sports Massage & Injury Prevention
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="rounded-md px-6 bg-primary hover:bg-primary/90 text-white font-semibold">
              <a href="#contact">Book Appointment</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-foreground p-2 hover:bg-muted rounded-md"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full mt-2 rounded-md bg-primary text-white font-semibold">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Book Appointment</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
