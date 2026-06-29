import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const WHATSAPP_NUMBER = '447411808807'; // international format, no +
const MESSAGE = encodeURIComponent(
  "Hi Adam, I'd like to book a sports massage appointment at The Maintenance Man. Could you let me know your availability?"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-8 sm:right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full right-0 mb-3 bg-white text-foreground text-sm font-medium px-3 py-2 rounded-xl shadow-lg border border-border whitespace-nowrap"
          >
            Chat on WhatsApp
            {/* Tail */}
            <span className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white border-r border-b border-border rotate-45 block" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-xl bg-[#25D366] hover:bg-[#20c05a] transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.003 2.667C8.639 2.667 2.667 8.639 2.667 16c0 2.358.635 4.662 1.84 6.677L2.667 29.333l6.845-1.797A13.285 13.285 0 0 0 16.003 29.333C23.365 29.333 29.333 23.361 29.333 16S23.365 2.667 16.003 2.667zm0 24.267a11.003 11.003 0 0 1-5.611-1.535l-.402-.24-4.063 1.067 1.086-3.96-.263-.408A10.957 10.957 0 0 1 5.001 16C5.001 9.925 9.925 5.001 16.003 5.001S27.001 9.925 27.001 16 22.077 26.934 16.003 26.934zm6.04-8.217c-.33-.165-1.953-.963-2.256-1.073-.304-.11-.524-.165-.745.165-.22.33-.853 1.073-1.046 1.293-.193.22-.386.247-.716.082-.33-.165-1.394-.513-2.655-1.638-.981-.875-1.643-1.956-1.836-2.286-.192-.33-.02-.508.145-.672.15-.148.33-.386.495-.579.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.579-.082-.165-.745-1.793-1.02-2.455-.269-.645-.543-.557-.745-.568l-.634-.011c-.22 0-.579.082-.882.413-.304.33-1.16 1.134-1.16 2.766s1.188 3.208 1.353 3.428c.165.22 2.338 3.569 5.662 5.003.792.341 1.41.546 1.891.699.795.253 1.519.217 2.091.132.638-.096 1.953-.798 2.228-1.57.275-.77.275-1.43.193-1.57-.083-.139-.303-.22-.634-.386z" />
        </svg>
      </motion.a>
    </div>
  );
}
