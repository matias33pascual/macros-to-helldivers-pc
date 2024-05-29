import "./app.css";
import { ConnectionCard, SettingsPage } from './pages';

export default function App() {
  return (
    <div className="app-container">
      <ConnectionCard />
      <SettingsPage />
    </div>
  );
}
