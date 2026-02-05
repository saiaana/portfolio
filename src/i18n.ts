import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./i18n/en.json";
import kr from "./i18n/kr.json";
import ru from "./i18n/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    kr: { translation: kr },
    ru: { translation: ru },
  },
  lng: "en", // язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
