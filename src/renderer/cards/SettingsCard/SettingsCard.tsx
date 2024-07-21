import { Icon } from "@nimbus-ds/components";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@nimbus-ds/icons";
import { useContext } from "react";
import { Card, Input } from "renderer/components";
import { CUSTOM_KEY_MAPPING } from "renderer/constants";
import LanguageContext from "renderer/context/languageContext";
import { useUserKeys } from "renderer/hooks";

export function SettingsCard() {
  const { userKeys, setUserKey } = useUserKeys();

  const language = useContext(LanguageContext);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputRef = e.target as HTMLInputElement;
    const focusedKey = inputRef.name;
    const { code, key } = e;

    setUserKey(focusedKey, CUSTOM_KEY_MAPPING[code] || key.toLowerCase());

    inputRef.blur();
  };

  return (
    <Card title={language.stratagems_keyscode}>
      <Input
        name="up"
        label={language.up}
        placeholder={language.up}
        append={<Icon source={<ChevronUpIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.up}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="down"
        label={language.down}
        placeholder={language.down}
        append={<Icon source={<ChevronDownIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.down}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="left"
        label={language.left}
        placeholder={language.left}
        append={<Icon source={<ChevronLeftIcon />} />}
        appendPosition="start"
        hiddenCaret
        value={userKeys.left}
        readOnly
        onKeyDown={handleKeyDown}
      />
      <Input
        name="right"
        label={language.right}
        placeholder={language.right}
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
