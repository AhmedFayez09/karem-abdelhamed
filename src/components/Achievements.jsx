import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { num: 500, suffix: '+', title: "عميل راضٍ" },
    { num: 7, suffix: '+', title: "سنوات خبرة" },
    { num: 200, suffix: '+', title: "قصة نجاح" },
    { num: 50, suffix: '+', title: "تصحيح القوام" },
  ];

  return (
    <section ref={ref} className="py-20 bg-primary bg-opacity-10 rtl font-arabic" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6"
            >
              <div className="text-5xl font-bold font-heading text-primary mb-2" dir="ltr">
                {inView ? (
                  <AnimatedCounter end={stat.num} duration={2.5} />
                ) : "0"}
                {stat.suffix}
              </div>
              <div className="text-xl font-bold text-white uppercase">{stat.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
