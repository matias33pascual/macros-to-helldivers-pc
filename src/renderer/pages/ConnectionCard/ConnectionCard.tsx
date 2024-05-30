/* eslint-disable import/no-unresolved */
import "./ConnectionCard.scss";
import { useGetConnectionInfo } from "renderer/hooks/useGetConnectionInfo";
import { Card, Input } from "renderer/components";

export function ConnectionCard() {
  const ip = useGetConnectionInfo();

  return (
    <div className="connection-card">
      <Card title="DIRECCION IP">
        <div className="connection-card__content">
          <Input placeholder="IP" value={ip} readOnly />
        </div>
      </Card>
    </div>
  );
}
