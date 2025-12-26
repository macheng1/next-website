
import React from 'react';
import Image from 'next/image';
import {
  Shield, Award, Globe, CheckCircle2, Monitor
} from 'lucide-react';

const Capabilities = () => {
  const certifications = [
    { name: 'ISO 9001:2015', icon: <Award className="text-blue-600" />, desc: '质量管理体系认证' },
    { name: 'AS9100D', icon: <Shield className="text-blue-600" />, desc: '航空航天质量管理标准' },
    { name: 'CE 认证', icon: <CheckCircle2 className="text-blue-600" />, desc: '欧盟健康安全指令标准' },
    { name: 'ISO 14001', icon: <Globe className="text-blue-600" />, desc: '环境管理体系认证' }
  ];

  const facilityFeatures = [
    { title: '万级无尘装配车间', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600', desc: '用于医疗和航空电子设备的超洁净组装环境。' },
    { title: 'AI 增强型柔性生产线', img: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600', desc: '利用专利机器学习模型实现的实时自适应生产控制。' },
    { title: '高精尖检测实验室', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600', desc: '支持极端环境下的振动、热循环及应力测试。' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-display font-bold mb-6">世界领先的研发与生产实力</h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              从最初的概念设计到高产量的批量化生产，我们的工厂旨在突破现代制造技术的边界。
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
          <Monitor size={400} className="text-blue-500 absolute -right-20 -top-20" />
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">生产设施展示</h2>
            <p className="text-slate-500">全球生产足迹超过 120 万平方英尺的智能工厂空间。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {facilityFeatures.map((f, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <Image
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width={400}
                    height={224}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 z-10">
              <h2 className="text-4xl font-bold mb-8">定制化方案 (OEM/ODM)</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                我们每年超过 60% 的产出来自非标定制。我们不只是销售产品，更是根据您独特的空间和产出需求量身定制工程方案。
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  '快速原型开发 (3-7 天交付)',
                  '定制化 PLC 与控制软件集成',
                  '交钥匙工厂自动化整线设计',
                  '材料替代性工程研究与测试'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-blue-50 font-medium">
                    <CheckCircle2 size={20} className="text-blue-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-blue-50 transition-all">
                提交设计提案
              </button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?auto=format&fit=crop&q=80&w=400"
                  alt="生产车间"
                  className="rounded-2xl rotate-3 shadow-xl"
                  width={400}
                  height={224}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Image
                  src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=400"
                  alt="检测实验室"
                  className="rounded-2xl -rotate-6 translate-y-8 shadow-xl"
                  width={400}
                  height={224}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">合规性与国际认证</h2>
            <p className="text-slate-500">对标准的严苛执着，是为了交付毫无妥协的高质量成果。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((c, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center group hover:bg-blue-600 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-white">{c.name}</h4>
                <p className="text-sm text-slate-500 group-hover:text-blue-100">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
