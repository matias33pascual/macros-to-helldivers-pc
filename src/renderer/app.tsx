import "./app.scss";
import { ConnectionCard, PortCard, SettingsCard } from "./cards";
import { Footer } from "./components";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">Macros to Helldivers PC</p>
      <ConnectionCard />
      <PortCard />
      <SettingsCard />
      <Footer />
    </div>
  );
}
