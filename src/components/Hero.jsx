import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900"></div>

      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 rtl:mr-auto"
          dir="ltr"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary font-heading tracking-widest text-xl mb-4 uppercase"
          >
            Professional Bodybuilding Coach
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold font-arabic mb-6 leading-tight"
          >
            Coach <span className="text-gradient">Kareem Abdelhamed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-text-muted mb-10 max-w-xl mx-auto lg:mx-0 font-body"
          >
            Transform Your Body. Build Strength. Achieve Your Best Shape with personalized coaching, tailored nutrition, and expert guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 font-arabic"
            dir="rtl"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-10 py-4 bg-primary text-dark-900 font-bold text-xl uppercase rounded-sm hover:bg-[#F4D068] transition-all transform hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(201,168,76,0.3)] animate-pulse hover:animate-none"
            >
              احجز تدريبك الآن
            </Link>
            <div className="flex gap-4 text-2xl" dir="ltr">
              <a href="https://www.instagram.com/kemo00__11" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800 rounded-full hover:bg-primary hover:text-dark-900 transition-colors"><FaInstagram /></a>
              <a href="https://wa.me/+201005376843" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800 rounded-full hover:bg-primary hover:text-dark-900 transition-colors"><FaWhatsapp /></a>
              <a href="https://www.tiktok.com/@karemabdelhamid11" target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-800 rounded-full hover:bg-primary hover:text-dark-900 transition-colors"><FaTiktok /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center"
      >
        <Link to="about" smooth={true} duration={500}>
          <span className="text-xs uppercase tracking-widest text-text-muted mb-2 block">Scroll</span>
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent mx-auto rounded-full"></div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
