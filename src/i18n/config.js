import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from '../locales/en.json';
import frJSON from '../locales/fr.json';
import nlJSON from '../locales/nl.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJSON },
    fr: { translation: frJSON },
    nl: { translation: nlJSON }
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;