import { useContext } from "react";
import { LanguageContext } from "renderer/context/languageContext";
import "./SelectLanguage.scss";

export default function SelectLanguage() {
  const language = useContext(LanguageContext);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    language.changeLanguage(selectedLanguage);
  };

  return (
    <div className="container">
      <select
        className="custom-select"
        name="language"
        id="language-select"
        onChange={handleSelectChange}
        defaultValue=""
      >
        <option value="" disabled>
          {language.currentLanguage.language}
        </option>
        <option value="en" className="option">
          English
        </option>
        <option value="pt" className="option">
          <span className="pt-flag" />
          Português
        </option>
        <option value="es" className="option">
          <span className="es-flag" />
          Español
        </option>
        <option value="ru" className="option">
          <span className="ru-flag" />
          РУССКИЙ
        </option>
      </select>
    </div>
  );
}
