import { Icon } from '@nimbus-ds/components';
import { Card, Input } from 'renderer/components';
import './ConnectionCard.scss';
import { CopyIcon } from '@nimbus-ds/icons';
import { useGetConnectionInfo } from 'renderer/hooks';

export function ConnectionCard() {
  const ip = useGetConnectionInfo();

  return (
    <div className="connection-card">
      <Card title="Device pairing">
        <div className="connection-card__content">
          <Input
            placeholder="IP"
            append={<Icon source={<CopyIcon />} />}
            appendPosition="end"
            value={ip}
            readOnly
          />
        </div>
      </Card>
    </div>
  );
}
