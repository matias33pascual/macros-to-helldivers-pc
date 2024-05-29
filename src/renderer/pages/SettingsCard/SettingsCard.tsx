import { Icon } from '@nimbus-ds/components';
import {
  AlignLeftIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  DragIcon,
} from '@nimbus-ds/icons';
import { Card, Input } from 'renderer/components';
import { CUSTOM_KEY_MAPPING } from 'renderer/constants';
import { useUserKeys } from 'renderer/hooks';

export function SettingsPage() {
  const { userKeys, setUserKey } = useUserKeys();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputRef = e.target as HTMLInputElement;
    const focusedKey = inputRef.name;
    const { code, key } = e;

    setUserKey(focusedKey, CUSTOM_KEY_MAPPING[code] || key.toLowerCase());

    inputRef.blur();
  };

  const handleChangeIsHold = () => {
    setUserKey('isHold', !userKeys.isHold);
  }

  return (
    <Card title="Keys settings">
      <Input
        name="openMenu"
        placeholder="Open stratagem's menu"
        append={<Icon source={<DragIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.openMenu}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="isHold"
        placeholder="Press/hold key to open menu"
        append={<Icon source={<AlignLeftIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.isHold ? 'Hold to open menu' : 'Press to open menu'}
        readOnly
        onClick={handleChangeIsHold}
      />
      <Input
        name="up"
        placeholder="Up arrow key"
        append={<Icon source={<ChevronUpIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.up}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="down"
        placeholder="Down arrow key"
        append={<Icon source={<ChevronDownIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.down}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="left"
        placeholder="Left arrow key"
        append={<Icon source={<ChevronLeftIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.left}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="right"
        placeholder="Right arrow key"
        append={<Icon source={<ChevronRightIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.right}
        readOnly
        onKeyDown={handleKeyDown}
      />
    </Card>
  );
}
