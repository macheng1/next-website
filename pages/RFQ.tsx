
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Paperclip, CheckCircle2, Globe, Building2 } from 'lucide-react';

const RFQ = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-[2rem] p-12 text-center shadow-2xl animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4">询价单已提交</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            感谢您选择泰坦机电。我们的应用工程师将审核您的需求，并在 24 个工作小时内与您取得联系。
          </p>
          <button onClick={() => setSubmitted(false)} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
            返回询价中心
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-display font-bold mb-6">在线询价 (RFQ)</h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            准备好提升您的产能了吗？请在下方提供您的技术规格和项目要求，我们将为您提供详细的技术建议与报价。
          </p>
        </div>
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-10">
          <Globe size={400} />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">您的姓名</label>
                  <input required type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="例如：张先生" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">工作邮箱</label>
                  <input required type="email" className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="name@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">公司名称</label>
                  <input required type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 transition-all" placeholder="所属单位全称" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">所属行业</label>
                  <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 transition-all">
                    <option>航空航天</option>
                    <option>汽车工业</option>
                    <option>医疗器械</option>
                    <option>能源电力</option>
                    <option>其他制造业</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">项目详情</label>
                <textarea required className="w-full bg-slate-50 border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 transition-all h-40 resize-none" placeholder="请描述您的技术要求、预计产量和时间计划..." />
              </div>

              <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50 text-center group hover:border-blue-400 transition-all cursor-pointer">
                <input type="file" id="file-upload" className="hidden" />
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                  <Paperclip className="text-slate-400 group-hover:text-blue-500 mb-4 transition-colors" size={32} />
                  <p className="text-sm font-bold text-slate-700">上传 CAD 或工程图纸</p>
                  <p className="text-xs text-slate-400 mt-2">支持 PDF, STEP, DWG, SLDPRT (最大 50MB)</p>
                </label>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl text-lg font-bold shadow-xl shadow-blue-900/20 hover:bg-blue-700 transition-all flex items-center justify-center group">
                提交询价单 <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Building2 size={24} className="text-blue-500 mr-3" />
                全球总部
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-slate-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold">亚太地区中心</p>
                    <p className="text-sm text-slate-400">上海市浦东新区工业大道123号 泰坦大厦</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-slate-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold">销售服务热线</p>
                    <p className="text-sm text-slate-400">+86 (021) 5888-9900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-slate-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold">官方咨询邮箱</p>
                    <p className="text-sm text-slate-400">inquiry@titan-mech.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-xs text-slate-500 mb-4">全球分支机构：</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">德国 柏林</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">美国 休斯顿</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">日本 东京</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">新加坡</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2rem] p-8 text-white text-center">
              <h4 className="font-bold text-xl mb-4">技术即时支持</h4>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">需要即时的技术指导？我们的 AI 助理可以 24/7 全天候分析您的需求。</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl text-sm font-bold shadow-lg">
                开始对话
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFQ;
