import "./app.scss";
import { ConnectionCard, PortCard, SettingsCard } from "./cards";
import { Footer } from "./components";
import LanguageProvider from "renderer/context/languageContext";
import SelectLanguage from "./cards/SelectLanguage/SelectLanguage";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">Macros to HD2 Game PC</p>
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
