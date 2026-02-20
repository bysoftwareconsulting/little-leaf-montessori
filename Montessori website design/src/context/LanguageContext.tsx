import { createContext, useContext, useState } from "react";
import { en } from "../i18n/eng";
import { jpn } from "../i18n/jpn";

type Language = "en" | "ja";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const translations = language === "en" ? en : jpn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}