import "./app.scss";
import { ConnectionCard, PortCard, SettingsCard } from "./cards";
import { Footer } from "./components";
import LanguageProvider, {
  LanguageContext,
} from "renderer/context/languageContext";
import SelectLanguage from "./cards/SelectLanguage/SelectLanguage";
import { useContext, useEffect } from "react";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">Macros to Helldivers PC</p>
      <LanguageProvider>
        <div className="connection-cards">
          <ConnectionCard />
          <PortCard />
        </div>
        <SettingsCard />
        <SelectLanguage />
        <Footer />
      </LanguageProvider>
    </div>
  );
}
