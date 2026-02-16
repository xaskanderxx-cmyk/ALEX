
import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-blue-600 px-3 py-1 rounded-lg text-sm font-bold shadow-sm">
          {course.category}
        </span>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-600">{course.level}</span>
          <div className="mr-auto flex items-center text-yellow-500">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-bold mr-1">{course.rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight h-14 overflow-hidden">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">${course.price}</span>
            <span className="text-xs text-gray-400 line-through mr-2">${course.price * 1.5}</span>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-bold text-sm">التفاصيل ←</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
