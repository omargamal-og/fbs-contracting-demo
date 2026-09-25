import { CategoryKey, CityKey } from '../i18n/language.service';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface Project {
  id: number;
  name: LocalizedText;
  city: CityKey;
  category: CategoryKey;
  image: string;
  eyebrow: LocalizedText;
  description: LocalizedText;
}
