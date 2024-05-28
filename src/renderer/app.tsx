import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@nimbus-ds/styles"
import "./app.css";
import { HomePage, SettingsPage } from './pages';

export default function App() {
  return (
    <ThemeProvider theme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
