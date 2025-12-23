
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { 
  Download, FileText, PlayCircle, BookOpen, 
  ChevronRight, Calendar, Search, ArrowRight 
} from 'lucide-react';
// Import useTranslation to access current language
import { useTranslation } from '../i18n';

const Resources = () => {
  // Get current language from hook
  const { lang } = useTranslation();

  const downloads = [
    { title: '2024 年度产品总目录', size: '12.4 MB', type: 'PDF' },
    { title: '泰坦-V5 安装与调试指南', size: '4.8 MB', type: 'PDF' },
    { title: 'AS-ROB 系列 3D CAD 模型包', size: '85 MB', type: 'ZIP' },
    { title: '控制系统 v2.4 驱动程序', size: '210 MB', type: 'EXE' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <header className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-display font-bold mb-6">行业知识与资源中心</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            获取最新的技术文档、行业洞察，以及来自泰坦机电全球基地的企业动态。
          </p>
          <div className="max-w-xl mx-auto mt-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="搜索技术指南、论文 or 驱动程序..." 
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-6 text-white focus:bg-white focus:text-slate-900 transition-all outline-none"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <h2 className="text-3xl font-bold flex items-center">
            <BookOpen className="text-blue-600 mr-3" /> 最新行业洞察
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row group shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 md:w-2/3 flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    {/* Fixed: Access localized property using current language */}
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{post.category[lang]}</span>
                    <span className="flex items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      <Calendar size={12} className="mr-1" /> {post.date}
                    </span>
                  </div>
                  {/* Fixed: Access localized property using current language */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{post.title[lang]}</h3>
                  {/* Fixed: Access localized property using current language */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{post.excerpt[lang]}</p>
                  <button className="flex items-center text-slate-900 font-bold text-sm hover:translate-x-2 transition-transform">
                    阅读全文 <ArrowRight size={16} className="ml-2 text-blue-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl font-bold text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-all">
            加载更多文章
          </button>
        </div>

        <div className="lg:col-span-1 space-y-12">
          <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Download className="text-blue-600 mr-3" /> 下载中心
            </h2>
            <div className="space-y-6">
              {downloads.map((dl, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{dl.title}</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{dl.type} • {dl.size}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
              ))}
            </div>
            <button className="w-full mt-10 bg-slate-900 text-white py-4 rounded-xl font-bold text-sm shadow-xl hover:bg-black transition-all">
              浏览所有文档
            </button>
          </section>

          <section className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <PlayCircle className="mb-6 text-blue-200" size={48} />
              <h3 className="text-2xl font-bold mb-4">技术网络研讨会</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-8">
                加入我们的专家讲座，深入探讨设备维护与工厂效能优化。
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl text-xs font-bold shadow-lg flex items-center">
                观看往期回放 <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <PlayCircle size={200} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resources;
