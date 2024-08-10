/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import "./Footer.scss";
import { useUserConnected } from "renderer/hooks/useUserConnected";
import { LanguageContext } from "renderer/context/languageContext";

const { shell } = window.require("electron");

export function Footer() {
  const userConnected = useUserConnected();

  const language = useContext(LanguageContext);

  const handleUserManualClick = (event: any) => {
    event.preventDefault();
    shell.openExternal(
      "https://sites.google.com/view/macrostohelldiversmanual/p%C3%A1gina-principal"
    );
  };

  const handleVideoTutorialClick = (event: any) => {
    event.preventDefault();
    // TODO: poner el link del video aca -> 08/08 | 12:04
    shell.openExternal(
      "https://github.com/matias33pascual/macros-to-helldivers-pc"
    );
  };

  return (
    <div className="footer">
      <div className="buttons">
        <div className="manual" onClick={handleUserManualClick}>
          <span className="manual-icon"></span>
          {language.currentLanguage.user_manual}
        </div>
        <div className="video" onClick={handleVideoTutorialClick}>
          <span className="video-icon"></span>
          {language.currentLanguage.video_tutorial}
        </div>
      </div>
      <div>
        {userConnected ? (
          <p className="text user-connected">
            <strong>
              Macros to Helldivers {language.currentLanguage.connected}
            </strong>
          </p>
        ) : (
          <>
            <strong>
              <p>{language.currentLanguage.footer_message}</p>
              <p>
                <strong>Macros to Helldivers </strong>
              </p>
            </strong>
          </>
        )}
      </div>
    </div>
  );
}
