// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Переводы для каждого языка
import translationRU from "./locales/ru.json";
import translationUA from "./locales/ua.json";
import translationEN from "./locales/en.json";

const resources = {
  ru: { translation: translationRU },
  ua: { translation: translationUA },
  en: { translation: translationEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "ru", // язык по умолчанию
  fallbackLng: "ru", // язык, если выбранный не найден
  interpolation: { escapeValue: false }, // без экранирования
});

export default i18n;
