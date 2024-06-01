import { Card, Input } from "renderer/components";
import { useGetConnectionPort } from "renderer/hooks";

export function PortCard() {
  const port = useGetConnectionPort();

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
