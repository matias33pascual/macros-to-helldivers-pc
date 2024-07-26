import { useContext } from "react";
import { LanguageContext } from "renderer/context/languageContext";
import "./SelectLanguage.scss";

export default function SelectLanguage() {
  const language = useContext(LanguageContext);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;

    language.changeLanguage(selectedLanguage);

    console.log(`Selected language: ${selectedLanguage}`);
  };

  return (
    <select
      className="custom-select"
      name="language"
      id="language-select"
      onChange={handleSelectChange}
    >
      <option value="en" className="option-container">
        English
      </option>
      <option value="pt" className="option">
        Portuguese
      </option>
      <option value="es" className="option">
        Español
      </option>
    </select>
  );
}
