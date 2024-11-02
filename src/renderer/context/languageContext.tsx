import React, { createContext, useState, ReactNode, useEffect } from "react";
import es from "../../assets/languages/es.json";
import en from "../../assets/languages/en.json";
import pt from "../../assets/languages/pt.json";

export const languages = {
  english: en,
  spanish: es,
  portuguese: pt,
};

interface ILanguage {
  ip_address: string;
  port: string;
  stratagems_keyscode: string;
  up: string;
  down: string;
  left: string;
  right: string;
  footer_message: string;
  connected: string;
  user_manual: string;
  video_tutorial: string;
  language: string;
  code: string;
}

interface LanguageContextProps {
  currentLanguage: ILanguage;
  changeLanguage: (value: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentLanguage, setCurrentLanguage] = useState(languages.english);

  useEffect(() => {
    setLanguageStored();
  }, []);

  function changeLanguage(value: string) {
    localStorage.setItem("language", value);

    switch (value) {
      case "es":
        setCurrentLanguage(languages.spanish);
        break;

      case "pt":
        setCurrentLanguage(languages.portuguese);
        break;

      case "en":
      default:
        setCurrentLanguage(languages.english);
        break;
    }
  }

  function setLanguageStored() {
    const languageStored = localStorage.getItem("language");

    if (!languageStored) {
      setCurrentLanguage(languages.english);
    } else {
      switch (languageStored) {
        case "es":
          setCurrentLanguage(languages.spanish);
          break;

        case "pt":
          setCurrentLanguage(languages.portuguese);
          break;

        case "en":
        default:
          setCurrentLanguage(languages.english);
          break;
      }
    }
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
