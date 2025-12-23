
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'zh' | 'en';

interface Translations {
  [key: string]: {
    zh: string;
    en: string;
  };
}

export const UI_STRINGS: Translations = {
  // Navbar
  nav_showroom: { zh: '产品中心', en: 'Showroom' },
  nav_capabilities: { zh: '研发实力', en: 'R&D' },
  nav_solutions: { zh: '解决方案', en: 'Solutions' },
  nav_rfq: { zh: '在线询价', en: 'RFQ' },
  nav_resources: { zh: '资源下载', en: 'Resources' },
  btn_quote: { zh: '立即询价', en: 'Get a Quote' },
  
  // Home
  hero_badge: { zh: '下一代智能制造解决方案', en: 'Next-Gen Industrial Solutions' },
  hero_title_1: { zh: '工程设计', en: 'Engineering' },
  hero_title_2: { zh: '铸就未来', en: 'The Future' },
  hero_desc: { zh: '泰坦机电为全球领先的航空航天、汽车及医疗器械先驱提供先进的工业设备与全链路自动化系统。', en: 'Titan-Mech provides advanced industrial machinery and automation systems for aerospace, automotive, and medical pioneers.' },
  btn_explore: { zh: '探索展厅', en: 'Explore Showroom' },
  btn_custom: { zh: '定制化方案', en: 'Custom Solutions' },
  
  // Showroom
  showroom_title: { zh: '深度产品展示中心', en: 'Product Showroom' },
  showroom_desc: { zh: '浏览我们全面的工业设备和精密系统目录。使用对比工具寻找最适合您生产需求的配置。', en: 'Browse our comprehensive catalog of industrial equipment and precision systems.' },
  search_placeholder: { zh: '搜索产品名称、规格或技术关键词...', en: 'Search products, specs, or technologies...' },
  all_categories: { zh: '全部类别', en: 'All Categories' },
  compare_title: { zh: '横向技术指标对比', en: 'Technical Comparison' },
  btn_compare: { zh: '开始横向对比', en: 'Start Comparison' },
  custom_title: { zh: '需要非标定制方案？', en: 'Need Custom Design?' },
  btn_engineering: { zh: '咨询工程专家', en: 'Talk to Engineers' },
  
  // RFQ
  rfq_title: { zh: '在线询价', en: 'Request for Quote' },
  form_name: { zh: '您的姓名', en: 'Full Name' },
  form_email: { zh: '工作邮箱', en: 'Work Email' },
  form_company: { zh: '公司名称', en: 'Company Name' },
  form_industry: { zh: '所属行业', en: 'Industry' },
  form_details: { zh: '项目详情', en: 'Project Details' },
  form_upload: { zh: '上传 CAD 或工程图纸', en: 'Upload CAD or Drawings' },
  btn_submit: { zh: '提交询价单', en: 'Submit RFQ' },
  
  // Categories
  cat_PRECISION_MACHINING: { zh: '精密加工设备', en: 'Precision Machining' },
  cat_AUTOMATION_SYSTEMS: { zh: '自动化系统', en: 'Automation' },
  cat_ENERGY_SOLUTIONS: { zh: '能源解决方案', en: 'Energy Solutions' },
  cat_AEROSPACE_COMPONENTS: { zh: '航空航天组件', en: 'Aerospace' },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Fixed: Using React.createElement instead of JSX in .ts file to avoid parsing errors
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('zh');

  const t = (key: string) => {
    return UI_STRINGS[key]?.[lang] || key;
  };

  return React.createElement(LanguageContext.Provider, { 
    value: { lang, setLang, t } 
  }, children);
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};
