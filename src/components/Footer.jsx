import React from 'react';
import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-dark-900 pt-16 pb-8 border-t border-dark-800 font-arabic" dir="rtl">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-right">

          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="text-3xl font-bold font-heading tracking-wider mb-6" dir="ltr">
              <span className="text-primary">KAREM</span> ABD EL HAMID
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              مدرب كمال أجسام احترافي وخبير تغذية. نهدف إلى مساعدتك في تحقيق أفضل نسخة من جسمك بطريقة علمية مدروسة.
            </p>
            <div className="flex gap-4 text-xl" dir="ltr">
              <a href="https://www.instagram.com/kemo00__11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark-900 transition-colors"><FaInstagram /></a>
              <a href="https://wa.me/+201005376843" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark-900 transition-colors"><FaFacebookF /></a>
              <a href="https://www.tiktok.com/@karemabdelhamid11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark-900 transition-colors"><FaTiktok /></a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold mb-6 text-white border-b-2 border-primary pb-2 inline-block">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><Link to="hero" smooth={true} duration={500} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">الرئيسية</Link></li>
              <li><Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">عن الكابتن</Link></li>
              <li><Link to="services" smooth={true} duration={500} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">الخدمات التدريبية</Link></li>
              <li><Link to="gallery" smooth={true} duration={500} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">قبل وبعد</Link></li>
              <li><Link to="testimonials" smooth={true} duration={500} className="text-gray-400 hover:text-primary transition-colors cursor-pointer">آراء المتدربين</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold mb-6 text-white border-b-2 border-primary pb-2 inline-block">الخدمات</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">تدريب أونلاين متابعة يومية</li>
              <li className="text-gray-400">تدريب شخصي VIP</li>
              <li className="text-gray-400">أنظمة غذائية وبرامج مكملات</li>
              <li className="text-gray-400">تصحيح القوام</li>
            </ul>
          </div>

        </div>
        <div className="pt-8 border-t border-dark-800 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Karem Abd El Hamid. All rights reserved.</p>

          <p dir="ltr">
            Designed & Developed with{" "}
            <span className="text-secondary">♥</span>{" "}
            <a
              href="https://www.facebook.com/ahmed.afroto.71868"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-semibold text-primary hover:text-secondary transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
            >
              Ahmed Fayez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
