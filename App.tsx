
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import AICourseAdvisor from './components/AICourseAdvisor';
import Footer from './components/Footer';
import { COURSES, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-tajawal selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">لماذا تتعلم في أكاديمية إسلام اسكندر؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'محتوى محدث', desc: 'نحرص على تقديم أحدث الإصدارات والتقنيات في كل دورة.', icon: '⚡' },
                { title: 'دعم فني مستمر', desc: 'إمكانية التواصل المباشر مع المهندس إسلام لحل أي مشكلات.', icon: '🤝' },
                { title: 'شهادات معتمدة', desc: 'احصل على شهادة تثبت مهاراتك بعد إتمام كل دورة.', icon: '📜' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:scale-105 transition">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <div className="text-right">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">أحدث الكورسات</h2>
                <p className="text-gray-500">اختر من بين تشكيلة واسعة من الكورسات المتميزة</p>
              </div>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                <button className="px-6 py-2 bg-white rounded-lg shadow-sm font-bold text-blue-600">الكل</button>
                <button className="px-6 py-2 rounded-lg text-gray-500 hover:text-gray-700">برمجة</button>
                <button className="px-6 py-2 rounded-lg text-gray-500 hover:text-gray-700">تصميم</button>
                <button className="px-6 py-2 rounded-lg text-gray-500 hover:text-gray-700">أوفيس</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {COURSES.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-black transition shadow-xl">
                شاهد جميع الكورسات
              </button>
            </div>
          </div>
        </section>

        {/* AI Advisor Section */}
        <AICourseAdvisor />

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 italic">آراء طلابنا المبدعين</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-gray-50 p-8 rounded-3xl relative">
                  <div className="absolute -top-6 -right-6 text-6xl text-blue-100 font-serif">"</div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10">{t.text}</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/></svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">جاهز لبدء مغامرتك التعليمية؟</h2>
              <p className="text-blue-100 mb-8 text-lg relative z-10">انضم إلى أكثر من 5000 طالب وباشر بتطوير مهاراتك اليوم مع إسلام اسكندر.</p>
              <button className="bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition shadow-lg relative z-10">
                سجل الآن مجاناً
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
