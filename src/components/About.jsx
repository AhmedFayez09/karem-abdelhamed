import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const points = [
    "7+ سنوات من الخبرة في التدريب",
    "مدرب لياقة بدنية معتمد دولياً",
    "خبير تغذية وتصميم أنظمة غذائية",
    "تدريب أونلاين ومتابعة شاملة"
  ];

  return (
    <section id="about" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -inset-4 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
          <div className="relative rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop" 
              alt="Coach Karem" 
              className="w-full h-[600px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary text-dark-900 p-6 rounded-sm font-heading flex flex-col items-center justify-center shadow-lg transform rtl:-left-8 rtl:right-auto">
            <span className="text-5xl font-bold">7+</span>
            <span className="text-sm font-bold tracking-wider uppercase">Years Experience</span>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2 text-right rtl font-arabic"
          dir="rtl"
        >
          <h3 className="text-primary uppercase tracking-widest text-sm font-bold mb-4 flex items-center justify-start gap-4">
            <span className="w-12 h-[2px] bg-primary"></span> <span>عن الكابتن</span>
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            بناء بطل يبدأ <span className="text-gradient">بالعقل والإرادة</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
           أنا الكابتن كريم عبدالحميد، مدرب كمال أجسام بخبرة 7 سنوات، ساعدت أكثر من 500 متدرب في تحقيق نتائج حقيقية من خلال برامج تدريبية مخصصة مبنية على أسس علمية وخبرة عملية داخل الجيم وأونلاين. هدفي هو تحويلك لأفضل نسخة من نفسك.
          </p>
          
          <ul className="space-y-4 mb-10">
            {points.map((point, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-lg font-bold text-gray-200"
              >
                <FaCheckCircle className="text-primary shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
