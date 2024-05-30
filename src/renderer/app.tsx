import "./app.css";
import { ConnectionCard, PortCard, SettingsPage } from "./pages";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">MacroSync Desktop Helldivers</p>
      <ConnectionCard />
      <PortCard />
      <SettingsPage />
      <p className="footer">
        Esta aplicacion funciona a traves de{" "}
        <strong>MacroSync Mobile Helldivers</strong>
      </p>
    </div>
  );
}
