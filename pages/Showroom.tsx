
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import { useTranslation } from '../i18n';
import {
  Filter, Search, X, ChevronRight
} from 'lucide-react';

const Showroom = () => {
  const { t, lang } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const productName = p.name[lang].toLowerCase();
      const productDesc = p.description[lang].toLowerCase();
      const query = searchQuery.toLowerCase();
      return matchesCat && (productName.includes(query) || productDesc.includes(query));
    });
  }, [selectedCategory, searchQuery, lang]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <header className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-bold mb-4">{t('showroom_title')}</h1>
          <p className="text-slate-400 max-w-2xl">{t('showroom_desc')}</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white p-4 rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={t('search_placeholder')}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 text-sm outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-slate-400" />
            <select
              className="bg-slate-50 border-none py-3 px-4 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 font-medium outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
            >
              <option value="ALL">{t('all_categories')}</option>
              {Object.values(Category).map(cat => (
                <option key={cat} value={cat}>{t(`cat_${cat}`)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
            <div className="h-64 overflow-hidden relative">
              <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur shadow-sm px-3 py-1 rounded-lg text-[10px] font-black uppercase text-blue-600">
                {t(`cat_${product.category}`)}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2">{product.name[lang]}</h3>
              <p className="text-slate-500 text-sm mb-6 line-clamp-2">{product.description[lang]}</p>
              <button onClick={() => setSelectedProduct(product)} className="text-blue-600 font-bold text-sm flex items-center">
                {lang === 'zh' ? '查看详情' : 'View Details'} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 z-20 bg-white shadow-xl p-2 rounded-full">
              <X size={24} />
            </button>
            <div className="md:w-1/2">
              <img src={selectedProduct.image} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 overflow-y-auto">
              <h2 className="text-3xl font-bold mb-6">{selectedProduct.name[lang]}</h2>
              <div className="space-y-4">
                {selectedProduct.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">{spec.label[lang]}</span>
                    <span className="font-bold">{spec.value[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showroom;
