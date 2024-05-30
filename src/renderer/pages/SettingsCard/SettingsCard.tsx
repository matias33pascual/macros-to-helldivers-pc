/* eslint-disable import/no-unresolved */
import { Icon } from "@nimbus-ds/components";
import {
  AlignLeftIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  DragIcon,
} from "@nimbus-ds/icons";
import { Card, Input } from "renderer/components";
import { CUSTOM_KEY_MAPPING } from "renderer/constants";
import { useUserKeys } from "renderer/hooks";

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
    setUserKey("isHold", !userKeys.isHold);
  };

  return (
    <Card title="MENU DE ESTRATAGEMAS">
      <Input
        name="openMenu"
        label="ABRIR MENU"
        placeholder="Abrir menu de estratagemas"
        append={<Icon source={<AlignLeftIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.openMenu}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="isHold"
        label="MODO DE MENU"
        placeholder="Presionar / Mantener"
        hiddenCaret
        value={userKeys.isHold ? "Mantener" : "Presionar"}
        readOnly
        onClick={handleChangeIsHold}
      />
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
