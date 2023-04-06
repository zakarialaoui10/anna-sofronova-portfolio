import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import BackEnd from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationIT from "./locales/it/translation.json";
import translationFR from "./locales/fr/translation.json";

i18n
  .use(BackEnd)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["ru", "en", "it","fr"],
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
      it: {
        translation: translationIT,
      },
      fr: {
        translation: translationFR,
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
