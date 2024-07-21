import { useContext } from "react";
import { Card, Input } from "renderer/components";
import LanguageContext from "renderer/context/languageContext";
import { useGetConnectionPort } from "renderer/hooks";

export function PortCard() {
  const port = useGetConnectionPort();

  const language = useContext(LanguageContext);

  return (
    <div className="connection-card">
      <Card title={language.port}>
        <div className="connection-card__content">
          <Input placeholder={language.port} value={port} readOnly />
        </div>
      </Card>
    </div>
  );
}
