
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-right space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            ابدأ رحلتك في <span className="gradient-text">عالم التكنولوجيا</span> مع إسلام اسكندر
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            نقدم لك أفضل الكورسات المتخصصة في البرمجة، مهارات الأوفيس، وتكنولوجيا المعلومات بأسلوب مبسط وعملي يساعدك على النجاح في سوق العمل.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <a href="#courses" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-100">
              تصفح الكورسات
            </a>
            <a href="#ai-advisor" className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition">
              جرب المستشار الذكي (AI)
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-reverse space-x-6 pt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">+5000</p>
              <p className="text-sm text-gray-500">طالب مسجل</p>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">+20</p>
              <p className="text-sm text-gray-500">دورة متخصصة</p>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-500">تقييم الطلاب</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
          <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-blue-100 absolute -z-10 animate-pulse"></div>
          <img 
            src="https://picsum.photos/seed/instructor/500/500" 
            alt="Eslam Eskander" 
            className="rounded-2xl shadow-2xl w-full max-w-md border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
