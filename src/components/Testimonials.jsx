import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "أحمد محمود",
      role: "خسارة 20 كجم",
      text: "الكابتن كريم غيّر حياتي بالكامل. لم يكن مجرد نظام غذائي، بل كان أسلوب حياة جديد. المتابعة اليومية والاهتمام بالتفاصيل هما ما يميزه."
    },
    {
      name: "يوسف طارق",
      role: "بناء عضلات",
      text: "تدريب احترافي بمعنى الكلمة. في 3 شهور حققت نتائج لم أحققها في سنتين من التدريب العشوائي. التوجيه في أداء التمارين خرافي."
    },
    {
      name: "محمد خالد",
      role: "تجهيز بطولة",
      text: "أفضل من يمكن أن يجهزك للبطولات. حساب دقيق جداً لكل سعرة وكل جرام ماكروز. بفضل الله ثم كابتن كريم حققت المركز الأول."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-0 right-0 text-[15rem] leading-none font-heading font-black text-dark-800 opacity-50 uppercase pointer-events-none -z-10 -translate-y-1/4 translate-x-1/4">Reviews</div>
      
      <div className="container mx-auto px-6 lg:px-12 text-center rtl font-arabic" dir="rtl">
        <h3 className="text-primary uppercase tracking-widest text-sm font-bold mb-4 flex justify-center items-center gap-2">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </h3>
        <h2 className="text-4xl lg:text-5xl font-bold mb-16">آراء <span className="text-gradient">الأبطال</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-dark-800 p-8 relative rounded-sm group hover:-translate-y-2 transition-transform duration-300"
            >
              <FaQuoteRight className="text-4xl text-dark-600 absolute top-8 left-8 group-hover:text-primary transition-colors" />
              <p className="text-lg text-gray-300 mb-8 relative z-10 leading-relaxed italic pr-8">
                "{rev.text}"
              </p>
              <div className="flex items-center justify-start gap-4">
                <div className="w-12 h-12 bg-dark-600 rounded-full flex items-center justify-center font-bold text-xl text-primary uppercase">
                  {rev.name.charAt(0)}
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-lg">{rev.name}</h4>
                  <span className="text-sm text-primary">{rev.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
