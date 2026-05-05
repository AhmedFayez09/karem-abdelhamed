import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', goal: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Simulate sending
  //   alert("تم إرسال رسالتك بنجاح. سيتم التواصل معك قريباً!");
  //   setFormData({ name: '', phone: '', goal: '', message: '' });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `الاسم: ${formData.name}%0Aرقم الهاتف: ${formData.phone}%0Aالهدف: ${formData.goal}`;
    if (formData.message && formData.message.trim() !== "") {
      text += `%0Aملاحظات: ${formData.message}`;
    }
    const url = `https://wa.me/+201005376843?text=${text}`;
    window.open(url, "_blank");
    setFormData({ name: '', phone: '', goal: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6 lg:px-12 rtl font-arabic" dir="rtl">

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h3 className="text-primary uppercase tracking-widest text-sm font-bold mb-4 font-heading">Contact</h3>
            <h2 className="text-4xl font-bold mb-8">دعنا <span className="text-gradient">نتواصل</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              هل لديك استفسار أو ترغب في الاشتراك في أحد برامج التدريب؟ تواصل معنا اليوم وسنقوم بالرد عليك في أقرب وقت.
            </p>

            <div className="space-y-6">
              <a href="https://wa.me/+201005376843" target="_blank" rel="noreferrer" className="flex items-center gap-4 group p-4 bg-dark-900 rounded-sm hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center text-2xl group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">تواصل عبر واتساب</h4>
                  <p className="text-xl font-bold font-body" dir="ltr">+20 10 05376843</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group p-4 bg-dark-900 rounded-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">اتصال هاتفي</h4>
                  <p className="text-xl font-bold font-body" dir="ltr">+20 10 05376843</p>
                </div>
              </div>

              {/* <div className="flex items-center gap-4 group p-4 bg-dark-900 rounded-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">البريد الإلكتروني</h4>
                  <p className="text-lg font-bold font-body">كريم اوف اح @gmail.com</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-dark-900 p-8 md:p-12 rounded-sm border-t-4 border-primary shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-8">أرسل بياناتك وسنتواصل معك</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2 font-bold">الاسم بالكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800 border border-dark-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all font-body"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-bold">رقم الهاتف (واتساب)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800 border border-dark-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all font-body text-right"
                    placeholder="رقم الموبايل"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 font-bold">هدفك من التدريب</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full bg-dark-800 border border-dark-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all font-body appearance-none"
                >
                  <option value="">-- اختر الهدف --</option>
                  <option value="تضخيم">بناء عضلات (تضخيم)</option>
                  <option value="تنشيف">تخسيس وحرق دهون (تنشيف)</option>
                  <option value="تصحيح القوام">تصحيح القوام</option>
                  <option value="لياقة">لياقة بدنية عامة</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 font-bold">رسالة إضافية (اختياري)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-dark-800 border border-dark-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-white transition-all font-body resize-none"
                  placeholder="إذا كان لديك أي إصابات أو ملاحظات، اكتبها هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-dark-900 font-bold text-xl py-4 rounded-sm hover:bg-[#F4D068] transition-colors"
              >
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
