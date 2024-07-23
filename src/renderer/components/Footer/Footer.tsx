/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import "./Footer.scss";
import { useUserConnected } from "renderer/hooks/useUserConnected";
import { LanguageContext } from "renderer/context/languageContext";
const { shell } = window.require("electron");

export function Footer() {
  const userConnected = useUserConnected();

  const language = useContext(LanguageContext);

  const handleLinkClick = (event: any) => {
    event.preventDefault();
    shell.openExternal(
      "https://play.google.com/store/apps/details?id=com.macrosync.helldivers&hl=en-US&ah=Oa21Ap4Zo627XSmBHykjV3KRTps"
    );
  };

  return (
    <div className="footer">
      {userConnected ? (
        <p className="text user-connected">
          <strong>
            Macros to Helldivers {language.currentLanguage.connected}
          </strong>
        </p>
      ) : (
        <>
          <p>{language.currentLanguage.footer_message}</p>
          <p>
            <strong>Macros to Helldivers</strong>
          </p>
          <div className="link" onClick={handleLinkClick}>
            <p className="link-button">
              <span className="google-icon" />
              Google Play
            </p>
          </div>
        </>
      )}
    </div>
  );
}
