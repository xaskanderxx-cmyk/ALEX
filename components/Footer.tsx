
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-bold gradient-text mb-6 block">إسلام اسكندر</span>
            <p className="text-sm leading-relaxed mb-6">
              منصة تعليمية رائدة تهدف إلى تمكين الشباب العربي من امتلاك المهارات الرقمية والبرمجية اللازمة لمواكبة سوق العمل العالمي.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="hover:text-blue-500 transition"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="hover:text-red-500 transition"><i className="fab fa-youtube text-xl"></i></a>
              <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-linkedin text-xl"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition">عن الأكاديمية</a></li>
              <li><a href="#courses" className="hover:text-white transition">الكورسات المتاحة</a></li>
              <li><a href="#ai-advisor" className="hover:text-white transition">المستشار الذكي</a></li>
              <li><a href="#" className="hover:text-white transition">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">التخصصات</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition">تطوير الويب</a></li>
              <li><a href="#" className="hover:text-white transition">الأوفيس والأعمال</a></li>
              <li><a href="#" className="hover:text-white transition">تصميم الجرافيك</a></li>
              <li><a href="#" className="hover:text-white transition">الأمن السيبراني</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">تواصل معنا</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@eslameskander.com
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +20 123 456 789
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} أكاديمية إسلام اسكندر. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
