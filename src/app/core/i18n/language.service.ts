import { Injectable, computed, signal } from '@angular/core';

export type AppLanguage = 'en' | 'ar';
export type CityKey = 'riyadh' | 'jeddah' | 'tabuk' | 'taif' | 'madinah';
export type CategoryKey = 'residential' | 'commercial';

export const COPY = {
  en: {
    meta: {
      title: 'FBS Contracting | Building What Lasts',
      description: 'FBS Contracting — Saudi construction expertise across residential, commercial, fit-out, hospitality, education and industrial developments.'
    },
    brand: { company: 'CONTRACTING', home: 'FBS Contracting home' },
    nav: {
      about: 'About', capabilities: 'Capabilities', projects: 'Projects', footprint: 'Footprint', contact: 'Contact',
      cta: 'Start a conversation', language: 'العربية', primaryAria: 'Primary navigation', mobileAria: 'Mobile navigation', menuAria: 'Toggle navigation'
    },
    intro: {
      skip: 'Skip intro', company: 'CONTRACTING', message: 'BUILDING WITH PURPOSE · DELIVERING WITH PRECISION', location: 'RIYADH · SAUDI ARABIA'
    },
    hero: {
      kicker: 'FBS CONTRACTING · RIYADH, SAUDI ARABIA', code: 'EST. 2019 · KSA', overline: 'CONSTRUCTION · DELIVERY · PRECISION',
      line1: 'WE BUILD', line2: 'WHAT', line2Accent: 'LASTS.',
      lead: 'Saudi-built construction expertise delivering residential and commercial developments with disciplined execution, quality and purpose.',
      projectsCta: 'Explore projects', capabilitiesCta: 'Our capabilities', projectFocus: 'PROJECT FOCUS',
      facts: ['Riyadh HQ', 'Residential', 'Commercial', 'Fit-Out'], scroll: 'SCROLL TO DISCOVER', scrollAria: 'Scroll to discover',
      edgeLeft: 'FBS · BUILT FOR THE KINGDOM', edgeRight: '01 / INTRODUCTION', heroSlidesAria: 'Hero slides', showSlideAria: 'Show slide',
      manifesto: ['BUILT WITH PURPOSE', 'DELIVERED WITH PRECISION', 'MADE FOR THE KINGDOM'],
      slides: [
        { title: 'Integrated Construction', location: 'Saudi Arabia', sector: 'Residential · Commercial' },
        { title: 'Built Environments', location: 'Across the Kingdom', sector: 'Quality · Precision · Delivery' },
        { title: 'Commercial Delivery', location: 'Riyadh · Jeddah', sector: 'Construction · Fit-Out' }
      ]
    },
    about: {
      eyebrow: 'WHO WE ARE', title: 'Construction built around', titleAccent: 'quality, trust and execution.',
      lead: 'FBS Contracting is a Saudi contracting company delivering general construction and fit-out works across residential, commercial, hospitality, educational and industrial developments.',
      body: 'Serving as the contracting partner behind FBS Real Estate developments, our role is to turn ambitious projects into dependable built environments through disciplined delivery, strong site execution and a commitment to quality at every stage.',
      link: 'Explore our capabilities'
    },
    capabilities: {
      eyebrow: 'WHAT WE DO', title: 'Built for the demands of', titleAccent: 'modern Saudi development.',
      items: ['Residential', 'Commercial', 'Fit-Out', 'Hospitality', 'Education', 'Industrial'], altSuffix: 'construction project'
    },
    stats: {
      items: [
        { value: '2019', label: 'Established' },
        { value: '17+', label: 'Portfolio projects showcased' },
        { value: '6', label: 'Core construction capabilities' },
        { value: 'KSA', label: 'Kingdom-wide project footprint' }
      ]
    },
    projects: {
      eyebrow: 'SELECTED PROJECTS', title: 'Places that become part of', titleAccent: 'everyday life.', filterAria: 'Project filters',
      filters: { all: 'All', residential: 'Residential', commercial: 'Commercial' }, portfolio: 'FBS Portfolio'
    },
    cities: { riyadh: 'Riyadh', jeddah: 'Jeddah', tabuk: 'Tabuk', taif: 'Taif', madinah: 'Madinah' },
    categories: { residential: 'Residential', commercial: 'Commercial' },
    footprint: {
      eyebrow: 'PROJECT FOOTPRINT', title: 'Across the', titleAccent: 'Kingdom.',
      intro: 'Select a city to explore a snapshot of FBS project activity across Saudi Arabia.', selectedCity: 'SELECTED CITY',
      projectCount: 'in this demo portfolio', mapAria: 'Stylized map of Saudi Arabia', showProjectsIn: 'Show projects in'
    },
    safety: {
      eyebrow: 'QUALITY & SAFETY', title: 'Built right.', titleAccent: 'Built responsibly.', pillars: ['Quality', 'Safety', 'Reliability', 'Delivery']
    },
    contact: {
      eyebrow: "LET'S BUILD TOGETHER", title: 'Have a project in mind?', lead: 'Start a conversation with FBS Contracting.',
      location: 'Riyadh, Saudi Arabia', address: 'Uthman Ibn Affan Rd · Al Taawun',
      fields: { name: 'Name', email: 'Email', company: 'Company', message: 'Message' },
      placeholders: { name: 'Your name', email: 'name@company.com', company: 'Company name', message: 'Tell us about your project' },
      submit: 'Send message', success: 'Demo submitted successfully — backend integration can be connected later.'
    },
    footer: {
      company: 'CONTRACTING', links: { about: 'About', projects: 'Projects', footprint: 'Footprint', contact: 'Contact' },
      business: 'General Construction Works', location: 'Riyadh, Saudi Arabia', copyright: '© 2026 FBS Contracting — Demo concept', note: 'Built as a presentation microsite'
    }
  },
  ar: {
    meta: {
      title: 'FBS للمقاولات | نبني ما يدوم',
      description: 'FBS للمقاولات — خبرة سعودية في تنفيذ المشاريع السكنية والتجارية وأعمال التشطيبات والضيافة والتعليم والمشاريع الصناعية.'
    },
    brand: { company: 'للمقاولات', home: 'الصفحة الرئيسية لـ FBS للمقاولات' },
    nav: {
      about: 'عن الشركة', capabilities: 'مجالات العمل', projects: 'المشاريع', footprint: 'انتشار المشاريع', contact: 'تواصل معنا',
      cta: 'تواصل معنا', language: 'English', primaryAria: 'التنقل الرئيسي', mobileAria: 'قائمة التنقل للجوال', menuAria: 'فتح أو إغلاق قائمة التنقل'
    },
    intro: {
      skip: 'تخطي المقدمة', company: 'للمقاولات', message: 'نبني بهدف · وننفذ بدقة', location: 'الرياض · المملكة العربية السعودية'
    },
    hero: {
      kicker: 'FBS للمقاولات · الرياض، المملكة العربية السعودية', code: 'تأسست عام 2019 · السعودية', overline: 'إنشاءات · تنفيذ · دقة',
      line1: 'نبني', line2: 'ما', line2Accent: 'يدوم.',
      lead: 'خبرة سعودية في المقاولات تنفذ المشاريع السكنية والتجارية بجودة وانضباط ودقة، من بداية المشروع وحتى التسليم.',
      projectsCta: 'استكشف المشاريع', capabilitiesCta: 'مجالات عملنا', projectFocus: 'مشروع مختار',
      facts: ['المقر: الرياض', 'مشاريع سكنية', 'مشاريع تجارية', 'أعمال التشطيبات'], scroll: 'اكتشف المزيد', scrollAria: 'انتقل لاكتشاف المزيد',
      edgeLeft: 'FBS · نبني للمملكة', edgeRight: '01 / المقدمة', heroSlidesAria: 'شرائح الواجهة الرئيسية', showSlideAria: 'عرض الشريحة',
      manifesto: ['نبني بهدف', 'ننفذ بدقة', 'نصنع للمملكة'],
      slides: [
        { title: 'تنفيذ إنشائي متكامل', location: 'المملكة العربية السعودية', sector: 'سكني · تجاري' },
        { title: 'بيئات عمرانية متقنة', location: 'في مختلف أنحاء المملكة', sector: 'جودة · دقة · التزام' },
        { title: 'تنفيذ تجاري باحترافية', location: 'الرياض · جدة', sector: 'إنشاءات · تشطيبات' }
      ]
    },
    about: {
      eyebrow: 'من نحن', title: 'مقاولات ترتكز على', titleAccent: 'الجودة والثقة ودقة التنفيذ.',
      lead: 'FBS للمقاولات شركة سعودية تنفذ أعمال المقاولات العامة والتشطيبات في المشاريع السكنية والتجارية والضيافة والتعليم والمشاريع الصناعية.',
      body: 'وبصفتنا شريك التنفيذ لمشاريع FBS العقارية، نحول الرؤية التطويرية إلى واقع مبني يمكن الاعتماد عليه، من خلال إدارة منضبطة للتنفيذ، وكفاءة في الموقع، والتزام بالجودة في كل مرحلة.',
      link: 'اكتشف مجالات عملنا'
    },
    capabilities: {
      eyebrow: 'مجالات عملنا', title: 'قدرات إنشائية تواكب', titleAccent: 'تطور المملكة وطموح مشاريعها.',
      items: ['المشاريع السكنية', 'المشاريع التجارية', 'أعمال التشطيبات', 'الضيافة', 'التعليم', 'المشاريع الصناعية'], altSuffix: 'من تنفيذ FBS للمقاولات'
    },
    stats: {
      items: [
        { value: '2019', label: 'عام التأسيس' },
        { value: '17+', label: 'مشروعًا ضمن المحفظة المعروضة' },
        { value: '6', label: 'مجالات إنشائية رئيسية' },
        { value: 'السعودية', label: 'انتشار المشاريع داخل المملكة' }
      ]
    },
    projects: {
      eyebrow: 'مشاريع مختارة', title: 'مشاريع تصبح جزءًا من', titleAccent: 'الحياة اليومية.', filterAria: 'تصفية المشاريع',
      filters: { all: 'الكل', residential: 'سكني', commercial: 'تجاري' }, portfolio: 'محفظة FBS'
    },
    cities: { riyadh: 'الرياض', jeddah: 'جدة', tabuk: 'تبوك', taif: 'الطائف', madinah: 'المدينة المنورة' },
    categories: { residential: 'سكني', commercial: 'تجاري' },
    footprint: {
      eyebrow: 'انتشار المشاريع', title: 'في مختلف أنحاء', titleAccent: 'المملكة.',
      intro: 'اختر مدينة لاستعراض مجموعة من مشاريع FBS في مناطق المملكة العربية السعودية.', selectedCity: 'المدينة المختارة',
      projectCount: 'ضمن المحفظة التجريبية', mapAria: 'خريطة توضيحية للمملكة العربية السعودية', showProjectsIn: 'عرض المشاريع في'
    },
    safety: {
      eyebrow: 'الجودة والسلامة', title: 'نبني بإتقان.', titleAccent: 'وننفذ بمسؤولية.', pillars: ['الجودة', 'السلامة', 'الموثوقية', 'الالتزام بالتسليم']
    },
    contact: {
      eyebrow: 'لنبنِ معًا', title: 'لديك مشروع جديد؟', lead: 'ابدأ تواصلك مع FBS للمقاولات.',
      location: 'الرياض، المملكة العربية السعودية', address: 'طريق عثمان بن عفان · حي التعاون',
      fields: { name: 'الاسم', email: 'البريد الإلكتروني', company: 'الشركة', message: 'الرسالة' },
      placeholders: { name: 'اكتب اسمك', email: 'name@company.com', company: 'اسم الشركة', message: 'حدثنا عن مشروعك' },
      submit: 'إرسال الرسالة', success: 'تم إرسال النموذج التجريبي بنجاح — ويمكن ربطه بالخادم لاحقًا.'
    },
    footer: {
      company: 'للمقاولات', links: { about: 'عن الشركة', projects: 'المشاريع', footprint: 'انتشار المشاريع', contact: 'تواصل معنا' },
      business: 'أعمال المقاولات العامة', location: 'الرياض، المملكة العربية السعودية', copyright: '© 2026 FBS للمقاولات — نموذج تجريبي', note: 'تم تطويره كنموذج عرض للموقع'
    }
  }
} as const;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly languageSignal = signal<AppLanguage>(this.getInitialLanguage());

  readonly language = this.languageSignal.asReadonly();
  readonly copy = computed(() => COPY[this.languageSignal()]);
  readonly isRtl = computed(() => this.languageSignal() === 'ar');

  constructor() {
    this.applyDocumentLanguage(this.languageSignal());
  }

  setLanguage(language: AppLanguage): void {
    this.languageSignal.set(language);
    localStorage.setItem('fbs-language', language);
    this.applyDocumentLanguage(language);
    this.syncUrl(language);
  }

  toggle(): void {
    this.setLanguage(this.languageSignal() === 'en' ? 'ar' : 'en');
  }

  private getInitialLanguage(): AppLanguage {
    const url = new URL(window.location.href);
    const queryLanguage = url.searchParams.get('lang');
    if (queryLanguage === 'ar' || queryLanguage === 'en') return queryLanguage;

    const saved = localStorage.getItem('fbs-language');
    if (saved === 'ar' || saved === 'en') return saved;

    return 'en';
  }

  private applyDocumentLanguage(language: AppLanguage): void {
    const copy = COPY[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.dataset['language'] = language;
    document.title = copy.meta.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = copy.meta.description;
  }

  private syncUrl(language: AppLanguage): void {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
  }
}
