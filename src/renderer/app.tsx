import "./app.scss";
import { ConnectionCard, PortCard, SettingsCard } from "./cards";
import { Footer } from "./components";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">Macro Sync Desktop Helldivers</p>
      <ConnectionCard />
      <PortCard />
      <SettingsCard />
      <Footer />
    </div>
  );
}
