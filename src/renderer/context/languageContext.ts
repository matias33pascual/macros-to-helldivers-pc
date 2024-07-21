import { createContext } from "react";
import es from "./../../assets/languages/es.json";
import en from "./../../assets/languages/en.json";
import pt from "./../../assets/languages/pt.json";

const languages = [es, en, pt];

const currentLanguage = en;

export const translation = currentLanguage;

const LanguageContext = createContext(translation);

export default LanguageContext;

// import { LanguageProvider } from './languageContext';
// import React, {
//   createContext,
//   useState,
//   useEffect,
//   ReactNode,
//   FC,
// } from "react";
// import en from "./../../assets/languages/en.json";
// import es from "./../../assets/languages/es.json";
// import pt from "./../../assets/languages/pt.json";

// type Translations = {
//   [key: string]: string;
// };

// type Languages = {
//   en: Translations;
//   es: Translations;
//   pt: Translations;
// };

// const languages: Languages = {
//   en,
//   es,
//   pt,
// };

// interface LanguageContextType {
//   translations: Translations;
//   changeLanguage: (lang: keyof Languages) => void;
// }

// const LanguageContext = createContext<LanguageContextType>({
//   translations: languages.en,
//   changeLanguage: () => {},
// });

// interface LanguageProviderProps {
//   children: ReactNode;
// }

// export const LanguageProvider = ({ children }: LanguageProviderProps) => {
//   const [language, setLanguage] = useState<keyof Languages>("en");
//   const [translations, setTranslations] = useState<Translations>(
//     languages[language]
//   );

//   useEffect(() => {
//     setTranslations(languages[language]);
//   }, [language]);

//   const changeLanguage = (lang: keyof Languages) => {
//     setLanguage(lang);
//   };

//   return (

//     value={{ translations, changeLanguage }}
//       {children}
//     </>
//   );
// };

// export default LanguageContext;
