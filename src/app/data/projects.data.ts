import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: { en: 'Malfa Jeddah', ar: 'ملفى جدة' },
    city: 'jeddah', category: 'residential',
    eyebrow: { en: 'Residential Community', ar: 'مجتمع سكني' },
    description: { en: 'A contemporary residential development designed around comfort, efficiency and quality delivery.', ar: 'مشروع سكني معاصر يركز على الراحة وكفاءة التخطيط وجودة التنفيذ.' },
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=82'
  },
  {
    id: 2,
    name: { en: 'Malfa Tabuk', ar: 'ملفى تبوك' },
    city: 'tabuk', category: 'residential',
    eyebrow: { en: 'Residential Development', ar: 'تطوير سكني' },
    description: { en: 'A modern housing destination with a clear focus on liveability, build quality and long-term value.', ar: 'وجهة سكنية حديثة تهتم بجودة الحياة وجودة البناء والقيمة طويلة المدى.' },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82'
  },
  {
    id: 3,
    name: { en: 'Malfa Al-Asalah', ar: 'ملفى الأصالة' },
    city: 'riyadh', category: 'residential',
    eyebrow: { en: 'Riyadh Residential', ar: 'مشروع سكني في الرياض' },
    description: { en: 'An integrated residential project supporting the growth of high-quality urban communities in Riyadh.', ar: 'مشروع سكني متكامل يدعم نمو المجتمعات العمرانية عالية الجودة في الرياض.' },
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82'
  },
  {
    id: 4,
    name: { en: 'Malfa Al-Hawiyah', ar: 'ملفى الحوية' },
    city: 'taif', category: 'residential',
    eyebrow: { en: 'Taif Residential', ar: 'مشروع سكني في الطائف' },
    description: { en: 'A residential destination bringing together practical planning, construction quality and a distinct sense of place.', ar: 'وجهة سكنية تجمع بين التخطيط العملي وجودة الإنشاء وهوية مكانية واضحة.' },
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=82'
  },
  {
    id: 5,
    name: { en: 'Nuzl Al-Dar', ar: 'نزل الدار' },
    city: 'madinah', category: 'residential',
    eyebrow: { en: 'Madinah Residential', ar: 'مشروع سكني في المدينة المنورة' },
    description: { en: 'A residential project in Madinah shaped around thoughtful execution and dependable delivery.', ar: 'مشروع سكني في المدينة المنورة يرتكز على التنفيذ المدروس والالتزام بالتسليم.' },
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=82'
  },
  {
    id: 6,
    name: { en: 'Al-Manar Plaza', ar: 'المنار بلازا' },
    city: 'jeddah', category: 'commercial',
    eyebrow: { en: 'Commercial Destination', ar: 'وجهة تجارية' },
    description: { en: 'A commercial development built to support retail, services and a strong day-to-day visitor experience.', ar: 'مشروع تجاري يخدم أنشطة التجزئة والخدمات ويوفر تجربة يومية عملية للزوار.' },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82'
  },
  {
    id: 7,
    name: { en: 'Al-Baraka Plaza', ar: 'البركة بلازا' },
    city: 'riyadh', category: 'commercial',
    eyebrow: { en: 'Commercial Development', ar: 'تطوير تجاري' },
    description: { en: 'A contemporary commercial project designed for functional circulation, visibility and efficient use.', ar: 'مشروع تجاري معاصر صُمم للحركة الوظيفية والوضوح والاستفادة الفعالة من المساحات.' },
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=82'
  },
  {
    id: 8,
    name: { en: 'Jawharat Al-Ghuroob', ar: 'جوهرة الغروب' },
    city: 'riyadh', category: 'residential',
    eyebrow: { en: 'Residential Community', ar: 'مجتمع سكني' },
    description: { en: 'A Riyadh residential destination combining modern planning with reliable construction execution.', ar: 'وجهة سكنية في الرياض تجمع بين التخطيط الحديث والتنفيذ الإنشائي الموثوق.' },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82'
  }
];
