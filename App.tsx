
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronRight, Search, Globe, FileText, 
  Settings, Award, Users, Mail, MessageSquare, 
  Download, Box, Cpu, HardHat, TrendingUp, BarChart3, 
  MapPin, Phone, Github, Linkedin, Twitter, Languages
} from 'lucide-react';
import { LanguageProvider, useTranslation, Language } from './i18n';
import Home from './pages/Home';
import Showroom from './pages/Showroom';
import Capabilities from './pages/Capabilities';
import CaseStudies from './pages/CaseStudies';
import RFQ from './pages/RFQ';
import Resources from './pages/Resources';
import AIChat from './components/AIChat';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, lang, setLang } = useTranslation();

  const navLinks = [
    { name: t('nav_showroom'), path: '/showroom', icon: <Box size={18} /> },
    { name: t('nav_capabilities'), path: '/capabilities', icon: <Cpu size={18} /> },
    { name: t('nav_solutions'), path: '/solutions', icon: <TrendingUp size={18} /> },
    { name: t('nav_rfq'), path: '/rfq', icon: <Mail size={18} /> },
    { name: t('nav_resources'), path: '/resources', icon: <Download size={18} /> },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
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
                  to={link.path}
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
            <Link to="/rfq" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-md shadow-blue-900/20">
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
                to={link.path}
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

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/solutions" element={<CaseStudies />} />
        <Route path="/rfq" element={<RFQ />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </main>
    <AIChat />
  </div>
);

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout />
      </Router>
    </LanguageProvider>
  );
}
