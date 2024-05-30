/* eslint-disable import/no-unresolved */
import "./PortCard.scss";
import { Card, Input } from "renderer/components";
import { useGetConnectionInfoPort } from "renderer/hooks/useGetConnectionInfoPort";

export function PortCard() {
  const port = useGetConnectionInfoPort();

  return (
    <div className="connection-card">
      <Card title="PUERTO">
        <div className="connection-card__content">
          <Input placeholder="PUERTO" value={port} readOnly />
        </div>
      </Card>
    </div>
  );
}
