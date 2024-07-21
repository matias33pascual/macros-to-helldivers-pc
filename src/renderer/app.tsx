import "./app.scss";
import { ConnectionCard, PortCard, SettingsCard } from "./cards";
import { Footer } from "./components";
import LanguageContext, {
  translation as currentLanguage,
} from "./context/languageContext";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">Macros to Helldivers PC</p>
      <LanguageContext.Provider value={currentLanguage}>
        <ConnectionCard />
        <PortCard />
        <SettingsCard />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}
