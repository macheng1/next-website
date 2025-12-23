

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Zap, Factory, Microscope } from 'lucide-react';
import { useTranslation } from '../i18n';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5f566f1f?auto=format&fit=crop&q=80&w=1920" 
            alt="Manufacturing Facility" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              <Zap size={14} />
              <span>{t('hero_badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {t('hero_title_1')} <br />
              <span className="text-blue-500">{t('hero_title_2')}</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              {t('hero_desc')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/Showroom" passHref legacyBehavior>
                <a className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center transition-all shadow-xl shadow-blue-900/40">
                  {t('btn_explore')} <ChevronRight className="ml-2" />
                </a>
              </Link>
              <Link href="/RFQ" passHref legacyBehavior>
                <a className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center transition-all border border-white/20">
                  {t('btn_custom')}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
