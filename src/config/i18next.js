import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Translationzu from "../assets/locale/zu.json";
import TranslationUz from "../assets/locale/uz.json";
import TranslationEn from "../assets/locale/en.json";
const resources = {
  uz: {
    translation: TranslationUz,
  },
  ru: {
    translation: Translationzu,
  },
  en: {
    translation: TranslationEn,
  },
};
i18n.use(initReactI18next).init({
  resources: resources,
  lng: localStorage.getItem("JADID_LAN") ?? "uz",
  fallbackLng: localStorage.getItem("JADID_LAN") ?? "uz",

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
