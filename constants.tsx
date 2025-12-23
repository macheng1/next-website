
import { Category, Product, CaseStudy, BlogItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'tm-5000',
    name: { zh: '泰坦-V5 五轴联动加工中心', en: 'Titan-V5 5-Axis CNC Center' },
    category: Category.PRECISION_MACHINING,
    description: { 
      zh: '专为航空航天领域极端精度要求设计的五轴联动加工中心。', 
      en: 'High-precision 5-axis machining center designed for extreme aerospace requirements.' 
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    specs: [
      { label: { zh: '主轴转速', en: 'Spindle Speed' }, value: { zh: '24,000 RPM', en: '24,000 RPM' } },
      { label: { zh: '定位精度', en: 'Accuracy' }, value: { zh: '±0.002 mm', en: '±0.002 mm' } }
    ],
    cadUrl: '#',
    isCustomizable: true
  },
  {
    id: 'as-rob-01',
    name: { zh: '哨兵-12 工业机器人', en: 'Sentinel-12 Industrial Robot' },
    category: Category.AUTOMATION_SYSTEMS,
    description: { 
      zh: '集成 AI 视觉系统的高负载工业机械臂。', 
      en: 'High-payload industrial robotic arm with integrated AI vision.' 
    },
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    specs: [
      { label: { zh: '有效负载', en: 'Payload' }, value: { zh: '12 kg', en: '12 kg' } },
      { label: { zh: '重复精度', en: 'Repeatability' }, value: { zh: '±0.05 mm', en: '±0.05 mm' } }
    ],
    cadUrl: '#',
    isCustomizable: true
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    title: { zh: '航空机翼精密组件优化', en: 'Aerospace Wing Component Optimization' },
    industry: { zh: '航空航天', en: 'Aerospace' },
    challenge: { zh: '显著降低关键组件重量。', en: 'Significantly reduce weight of critical parts.' },
    solution: { zh: '采用泰坦-V5加工中心配合 T-600 合金。', en: 'Using Titan-V5 center with T-600 alloy.' },
    impact: { zh: '减重 22%，刚度提升 15%。', en: '22% weight reduction, 15% stiffness increase.' },
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200',
    metrics: [
      { label: { zh: '减重', en: 'Weight Red.' }, value: '22%' },
      { label: { zh: '效率', en: 'Efficiency' }, value: '+15%' }
    ]
  }
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: 'b1',
    title: { zh: 'AI 预测性维护前景', en: 'AI Predictive Maintenance' },
    date: '2024-05-15',
    excerpt: { zh: '探讨机器学习如何改变工厂维护。', en: 'How machine learning transforms factory maintenance.' },
    category: { zh: '行业趋势', en: 'Insights' },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400'
  }
];
