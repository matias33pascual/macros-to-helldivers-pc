import "./app.css";
import {
  ConnectionCard,
  PortCard,
  SettingsPage,
  UserConnectedMessage,
} from "./pages";

export default function App() {
  return (
    <div className="app-container">
      <p className="title">MacroSync Desktop Helldivers</p>
      <ConnectionCard />
      <PortCard />
      <SettingsPage />
      <UserConnectedMessage />
    </div>
  );
}
