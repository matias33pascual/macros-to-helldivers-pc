import { Icon } from '@nimbus-ds/components';
import { Button, Card, Input } from 'renderer/components';
import './ConnectionCard.scss';
import { CopyIcon } from '@nimbus-ds/icons';
import { useNavigate } from 'react-router-dom';
import { useGetConnectionInfo } from 'renderer/hooks';

export function ConnectionCard() {
  const navigate = useNavigate();
  const ip = useGetConnectionInfo();

  const handleClickConnect = () => {
    navigate('/settings');
  };

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
          <Button onClick={handleClickConnect}>Connect</Button>
        </div>
      </Card>
    </div>
  );
}
