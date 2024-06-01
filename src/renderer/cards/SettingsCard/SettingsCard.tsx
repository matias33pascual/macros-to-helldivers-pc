import { Icon } from "@nimbus-ds/components";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@nimbus-ds/icons";
import { Card, Input } from "renderer/components";
import { CUSTOM_KEY_MAPPING } from "renderer/constants";
import { useUserKeys } from "renderer/hooks";

export function SettingsCard() {
  const { userKeys, setUserKey } = useUserKeys();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputRef = e.target as HTMLInputElement;
    const focusedKey = inputRef.name;
    const { code, key } = e;

    setUserKey(focusedKey, CUSTOM_KEY_MAPPING[code] || key.toLowerCase());

    inputRef.blur();
  };

  return (
    <Card title="MENU DE ESTRATAGEMAS">
      <Input
        name="up"
        label="ARRIBA"
        placeholder="ARRIBA"
        append={<Icon source={<ChevronUpIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.up}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="down"
        label="ABAJO"
        placeholder="ABAJO"
        append={<Icon source={<ChevronDownIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.down}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="left"
        label="IZQUIERDA"
        placeholder="IZQUIERDA"
        append={<Icon source={<ChevronLeftIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.left}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="right"
        label="DERECHA"
        placeholder="DERECHA"
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
