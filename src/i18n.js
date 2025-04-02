import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationRU from "./locales/ru.json";
import translationUA from "./locales/ua.json";
import translationEN from "./locales/en.json";

const resources = {
  ru: { translation: translationRU },
  ua: { translation: translationUA },
  en: { translation: translationEN },
};

const storedLanguage = localStorage.getItem("language") || "ua";

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage,
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
