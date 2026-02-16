
import React, { useState } from 'react';
import { getCourseAdvice } from '../services/geminiService';

const AICourseAdvisor: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!interest.trim()) return;
    setLoading(true);
    const advice = await getCourseAdvice(interest);
    setResponse(advice || 'لم نتمكن من الحصول على رد حالياً.');
    setLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-20 bg-blue-600 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">المستشار التعليمي الذكي (AI)</h2>
        <p className="text-blue-100 text-lg mb-10">
          هل تشعر بالحيرة؟ أخبرنا بما تحبه أو بمجال عملك، وسيقوم ذكاء اصطناعي مدرب من أكاديمية إسلام اسكندر باقتراح المسار الأفضل لك.
        </p>
        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="مثلاً: أحب تصميم الجرافيك وأريد تعلم البرمجة..."
              className="flex-grow bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button 
              onClick={handleAsk}
              disabled={loading}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition disabled:opacity-50 shadow-lg"
            >
              {loading ? 'جاري التحليل...' : 'اسأل المستشار'}
            </button>
          </div>

          {response && (
            <div className="mt-8 text-right bg-white text-gray-800 p-6 rounded-2xl animate-fade-in shadow-inner">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-2 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2 text-lg">نصيحة المستشار:</h4>
                  <p className="leading-relaxed whitespace-pre-wrap">{response}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AICourseAdvisor;
