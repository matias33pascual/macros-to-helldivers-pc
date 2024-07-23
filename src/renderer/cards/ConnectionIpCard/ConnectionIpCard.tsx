import { useGetConnectionIp } from "renderer/hooks";
import { Card, Input } from "renderer/components";
import { useContext } from "react";
import { LanguageContext } from "renderer/context/languageContext";

export function ConnectionCard() {
  const ip = useGetConnectionIp();

  const language = useContext(LanguageContext);

  return (
    <div className="connection-card">
      <Card title={language.currentLanguage.ip_address}>
        <div className="connection-card__content">
          <Input placeholder="IP" value={ip} readOnly />
        </div>
      </Card>
    </div>
  );
}
