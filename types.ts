export interface ServiceItem {
  id: string;
  title: string;
  category: 'ai' | 'marketing' | 'web' | 'growth';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  roiImpact: string;
  timeToDeploy: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'ai' | 'web' | 'marketing' | 'seo';
  image: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  heroImage: string;
  growthMultiplier: string;
  primaryMetric: string;
  secondaryMetric: string;
  summary: string;
  beforeStats: { label: string; value: string }[];
  afterStats: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  companyLogo?: string;
  quote: string;
  rating: number;
  highlightMetric: string;
  verified: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  badge?: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface TechItem {
  name: string;
  category: 'AI & ML' | 'Web & Cloud' | 'Marketing Tech' | 'Analytics & CRM';
  icon: string;
  desc: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Services & AI' | 'Pricing & ROI' | 'Timeline';
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  website: string;
  budget: string;
  servicesNeeded: string[];
  goals: string;
  message: string;
}
