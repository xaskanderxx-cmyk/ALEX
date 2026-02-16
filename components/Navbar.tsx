
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">إسلام اسكندر</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">الرئيسية</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition font-medium">الكورسات</a>
            <a href="#ai-advisor" className="text-gray-700 hover:text-blue-600 transition font-medium">المستشار الذكي</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">من نحن</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-200">
              تسجيل الدخول
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">الرئيسية</a>
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">الكورسات</a>
            <a href="#ai-advisor" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">المستشار الذكي</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">من نحن</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-md font-bold">تسجيل الدخول</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
