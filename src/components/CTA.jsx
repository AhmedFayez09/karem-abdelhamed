import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const CTA = () => {
  return (
    <section className="relative py-32 flex justify-center items-center text-center overflow-hidden font-arabic">
      {/* Background  */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop')` }}
      ></div>
      <div className="absolute inset-0 bg-dark-900/80"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-3xl"
        >
          مستعد لتبدأ رحلة <span className="text-primary">التغيير الشامل</span>؟
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl"
        >
          لا تؤجل هدفك أكثر من ذلك. احجز مكانك الآن وابدأ الخطوة الأولى نحو شكل الجسم الذي تستحقه.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="px-10 py-5 bg-primary text-dark-900 font-bold text-2xl uppercase hover:bg-[#F4D068] transition-colors cursor-pointer group flex items-center gap-3 shadow-[0_0_20px_rgba(201,168,76,0.4)]"
            dir="rtl"
          >
            ابدأ رحلتك الآن
            <span className="group-hover:-translate-x-2 transition-transform">←</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
