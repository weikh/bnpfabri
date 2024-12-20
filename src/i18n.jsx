import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import laungageDetector from "i18next-browser-languagedetector";
import uzTranslation from "./locales/uz.json";
import ruTranslation from "./locales/ru.json";
import enTranslation from "./locales/en.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  .use(laungageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    lng: language,
    debug: true,
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
    },
  });

  export default i18n