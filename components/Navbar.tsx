import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Menu, X, Languages, Box, Cpu, TrendingUp, Mail, Download
} from 'lucide-react';
import { useTranslation } from '../i18n';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t, lang, setLang } = useTranslation();

  const navLinks = [
    { name: t('nav_showroom'), path: '/Showroom', icon: <Box size={18} /> },
    { name: t('nav_capabilities'), path: '/Capabilities', icon: <Cpu size={18} /> },
    { name: t('nav_solutions'), path: '/CaseStudies', icon: <TrendingUp size={18} /> },
    { name: t('nav_rfq'), path: '/RFQ', icon: <Mail size={18} /> },
    { name: t('nav_resources'), path: '/Resources', icon: <Download size={18} /> },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-display font-bold text-2xl">T</div>
              <span className="text-xl font-display font-bold tracking-tight hidden md:block">
                {lang === 'zh' ? '泰坦机电' : 'TITAN-MECH'}
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive(link.path) ? 'text-blue-400 bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 text-slate-400 hover:text-white transition-colors bg-slate-800 rounded-lg"
            >
              <Languages size={18} />
              <span className="text-xs font-bold uppercase">{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>
            <Link href="/RFQ" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-900/20">
              {t('btn_quote')}
            </Link>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLanguage} className="p-2 text-slate-400 bg-slate-800 rounded-lg">
              <Languages size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 block px-3 py-4 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'text-blue-400 bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
