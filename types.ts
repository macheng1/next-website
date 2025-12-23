
export enum Category {
  PRECISION_MACHINING = 'PRECISION_MACHINING',
  AUTOMATION_SYSTEMS = 'AUTOMATION_SYSTEMS',
  ENERGY_SOLUTIONS = 'ENERGY_SOLUTIONS',
  AEROSPACE_COMPONENTS = 'AEROSPACE_COMPONENTS'
}

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface TechnicalSpec {
  label: LocalizedString;
  value: LocalizedString;
}

export interface Product {
  id: string;
  name: LocalizedString;
  category: Category;
  description: LocalizedString;
  image: string;
  specs: TechnicalSpec[];
  cadUrl: string;
  isCustomizable: boolean;
}

export interface CaseStudy {
  id: string;
  title: LocalizedString;
  industry: LocalizedString;
  challenge: LocalizedString;
  solution: LocalizedString;
  impact: LocalizedString;
  image: string;
  metrics: { label: LocalizedString; value: string }[];
}

export interface BlogItem {
  id: string;
  title: LocalizedString;
  date: string;
  excerpt: LocalizedString;
  category: LocalizedString;
  image: string;
}
