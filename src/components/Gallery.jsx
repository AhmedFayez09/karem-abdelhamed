import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const transformations = [
    { before: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" },
    { before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" },
    { before: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop" },
    { before: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1470&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" },
  ];

  return (
    <section id="gallery" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6 lg:px-12 text-center rtl font-arabic" dir="rtl">
        <h3 className="text-primary uppercase tracking-widest text-sm font-bold mb-4 font-heading">Transformations</h3>
        <h2 className="text-4xl lg:text-5xl font-bold mb-16">قصص <span className="text-gradient">نجاح</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-sm"
            >
              {/* Using a simple side-by-side flex for Before/After */}
              <div className="flex h-[400px]">
                <div className="w-1/2 relative">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover filter contrast-75 brightness-75 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-dark-900/80 text-white px-3 py-1 text-sm font-bold uppercase rounded-sm border border-dark-600">Before</div>
                </div>
                <div className="w-[2px] bg-primary z-10"></div>
                <div className="w-1/2 relative">
                  <img src={item.after} alt="After" className="w-full h-full object-cover filter contrast-125 group-hover:contrast-100 transition-all duration-500" />
                  <div className="absolute top-4 right-4 bg-primary text-dark-900 px-3 py-1 text-sm font-bold uppercase rounded-sm">After</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
