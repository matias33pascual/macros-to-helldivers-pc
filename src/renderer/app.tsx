import "./app.scss";
import { ConnectionCard, PortCard, SettingsCard } from "./cards";
import { Footer } from "./components";
import LanguageProvider from "./context/languageContext";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">Macros to Helldivers PC</p>
      <LanguageProvider>
        <ConnectionCard />
        <PortCard />
        <SettingsCard />
        <Footer />
      </LanguageProvider>
    </div>
  );
}
