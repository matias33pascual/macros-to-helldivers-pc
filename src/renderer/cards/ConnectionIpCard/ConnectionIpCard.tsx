import { useGetConnectionIp } from "renderer/hooks";
import { Card, Input } from "renderer/components";

export function ConnectionCard() {
  const ip = useGetConnectionIp();

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
