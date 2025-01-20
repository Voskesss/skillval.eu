import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import nl from './locales/nl.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import it from './locales/it.json';

export const languages = {
  en: { nativeName: 'English', flag: '🇬🇧' },
  nl: { nativeName: 'Nederlands', flag: '🇳🇱' },
  de: { nativeName: 'Deutsch', flag: '🇩🇪' },
  fr: { nativeName: 'Français', flag: '🇫🇷' },
  es: { nativeName: 'Español', flag: '🇪🇸' },
  it: { nativeName: 'Italiano', flag: '🇮🇹' }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      nl: { translation: nl },
      de: { translation: de },
      fr: { translation: fr },
      es: { translation: es },
      it: { translation: it }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'nl', 'de', 'fr', 'es', 'it'],
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
