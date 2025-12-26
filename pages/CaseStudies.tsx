
import React from 'react';
import Image from 'next/image';
import { CASE_STUDIES } from '../constants';
import { ShieldAlert, Cpu, ArrowRight } from 'lucide-react';
// Import useTranslation to access current language
import { useTranslation } from '../i18n';


const CaseStudies = () => {
  // Get current language from hook
  const { lang } = useTranslation();

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">行业解决方案与案例</h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                了解泰坦机电的精密工程如何助力全球合作伙伴解决生产痛点，将挑战转化为竞争优势。
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex space-x-2">
              {['全部', '航空航天', '汽车工业', '医疗器械'].map(tag => (
                <button key={tag} className="px-5 py-2 rounded-full border border-slate-200 text-sm font-bold hover:bg-slate-900 hover:text-white transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
        {CASE_STUDIES.map((study, index) => (
          <div key={study.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Fixed: Access localized property using current language */}
                <Image
                  src={study.image}
                  alt={study.title[lang]}
                  className="rounded-[3rem] shadow-2xl relative z-10 w-full"
                  width={800}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                  priority={index === 0}
                />
                <div className={`absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-full opacity-10 z-0`}></div>
                <div className={`absolute -bottom-6 -right-6 w-48 h-48 bg-slate-900 rounded-[3rem] opacity-5 z-0`}></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block mb-6">
                {/* Fixed: Access localized property using current language */}
                {study.industry[lang]} 行业
              </div>
              {/* Fixed: Access localized property using current language */}
              <h2 className="text-4xl font-bold mb-8 leading-tight">{study.title[lang]}</h2>
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-blue-600 font-bold uppercase text-xs tracking-wider mb-2 flex items-center">
                    <ShieldAlert size={14} className="mr-2" /> 痛点挑战
                  </h4>
                  {/* Fixed: Access localized property using current language */}
                  <p className="text-slate-600">{study.challenge[lang]}</p>
                </div>
                <div>
                  <h4 className="text-blue-600 font-bold uppercase text-xs tracking-wider mb-2 flex items-center">
                    <Cpu size={14} className="mr-2" /> 解决方案
                  </h4>
                  {/* Fixed: Access localized property using current language */}
                  <p className="text-slate-600">{study.solution[lang]}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 p-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</p>
                    {/* Fixed: Access localized property using current language */}
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">{metric.label[lang]}</p>
                  </div>
                ))}
              </div>
              <button className="mt-12 group flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors">
                阅读详细白皮书 <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
