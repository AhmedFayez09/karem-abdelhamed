import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', to: 'hero' },
    { name: 'عن الكابتن', to: 'about' },
    { name: 'الخدمات', to: 'services' },
    { name: 'التحولات', to: 'gallery' },
    { name: 'آراء العملاء', to: 'testimonials' },
    { name: 'تواصل معنا', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 font-arabic ${scrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg shadow-primary/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold font-heading tracking-wider cursor-pointer">
          <span className="text-primary">KAREM</span> ABD EL HAMID
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse text-lg font-semibold">
          {navLinks.map((link) => (
             <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary"
              className="cursor-pointer hover:text-primary transition-colors uppercase"
             >
              {link.name}
             </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-primary text-dark-900 px-6 py-2 rounded-sm hover:bg-[#F4D068] transition-colors cursor-pointer font-bold uppercase cursor-pointer"
          >
            احجز الآن
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-primary focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-800 shadow-xl border-t border-dark-600 md:hidden flex flex-col items-center py-6 space-y-6 text-xl font-bold"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-primary transition-colors"
               >
                {link.name}
               </Link>
            ))}
             <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="bg-primary text-dark-900 px-8 py-3 rounded-sm w-3/4 text-center hover:bg-[#F4D068] transition-colors uppercase cursor-pointer"
              >
                احجز تدريبك الآن
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
