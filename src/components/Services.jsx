import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaLaptop, FaAppleAlt, FaFireAlt, FaTrophy } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptop className="text-4xl" />,
      title: "خطة تدريب وتغذيه حسب مستواك",
      desc: "برامج تدريبية متكاملة مصممة خصيصاً لك، مع متابعة دورية وتقييم مستمر لتحقيق أهدافك من أي مكان."
    },
    {
      icon: <FaDumbbell className="text-4xl" />,
      title: "متابعة دورية حقيقة لضمان انك ماشي صح وبتتطور",
      desc: "إشراف مباشر خطوة بخطوة داخل الجيم لضمان الأداء الصحيح وتحقيق أقصى استفادة من التمارين."
    },
    {
      icon: <FaAppleAlt className="text-4xl" />,
      title: "سرعة الرد",
      desc: "التواصل مباشر ومنتظم ، الرد علي كل الاسئله في اسرع وقت ممكن بدقه ومن غير اي عشوائيه او تاخير."
    },
    {
      icon: <FaFireAlt className="text-4xl" />,
      title: " ملف كامل ",
      desc: "ملف شامل فيه الأسئلة الشائعة وتعليمات التمرين من أول يوم"
    },
    // {
    //   icon: <FaTrophy className="text-4xl" />,
    //   title: "تجهيز للبطولات",
    //   desc: "متابعة احترافية دقيقة لأبطال كمال الأجسام للوصول إلى أفضل مستوى قبل الصعود إلى المسرح."
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 lg:px-12 font-arabic text-center rtl">
        <h3 className="text-primary uppercase tracking-widest text-sm font-bold mb-4 font-heading">Services</h3>
        <h2 className="text-4xl lg:text-5xl font-bold mb-16">خدمات <span className="text-gradient">التدريب</span></h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          dir="rtl"
        >
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-dark-800 p-10 rounded-sm border-t-2 border-transparent hover:border-primary transition-all duration-300 group hover:-translate-y-2 shadow-lg ${idx === 3 ? 'lg:col-start-1 lg:ml-auto lg:w-3/4' : ''} ${idx === 4 ? 'lg:col-start-3 lg:mr-auto lg:w-3/4' : ''}`}
            >
              <div className="text-dark-600 mb-6 group-hover:text-primary transition-colors flex justify-center">
                {srv.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{srv.title}</h4>
              <p className="text-text-muted leading-relaxed">
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
