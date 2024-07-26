import "./app.scss";
import { ConnectionCard, PortCard, SettingsCard } from "./cards";
import { Footer } from "./components";
import LanguageProvider from "./context/languageContext";
import SelectLanguage from "./cards/SelectLanguage/SelectLanguage";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">Macros to Helldivers PC</p>
      <LanguageProvider>
        <ConnectionCard />
        <PortCard />
        <SettingsCard />
        <SelectLanguage />
        <Footer />
      </LanguageProvider>
    </div>
  );
}
