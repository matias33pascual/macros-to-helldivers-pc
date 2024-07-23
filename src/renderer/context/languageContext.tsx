import React, { createContext, useState, ReactNode } from "react";
import es from "../../assets/languages/es.json";
import en from "../../assets/languages/en.json";
import pt from "../../assets/languages/pt.json";

export const languages = [es, en, pt];

interface language {
  ip_address: string;
  port: string;
  stratagems_keyscode: string;
  up: string;
  down: string;
  left: string;
  right: string;
  footer_message: string;
  connected: string;
}

interface LanguageContextProps {
  currentLanguage: language;
  changeLanguage: (value: number) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentLanguage, setCurrentLanguage] = useState(languages[1]);

  function changeLanguage(value: number) {
    setCurrentLanguage(languages[value]);
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
