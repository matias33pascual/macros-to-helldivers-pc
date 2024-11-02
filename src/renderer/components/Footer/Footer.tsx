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

    let urlManual = "";

    if (language.currentLanguage.code === "es") {
      urlManual =
        "https://sites.google.com/view/manual-macros-es/p%C3%A1gina-principal";
    } else if (language.currentLanguage.code === "pt") {
      urlManual =
        "https://sites.google.com/view/manual-macros-pt/p%C3%A1gina-principal";
    } else {
      urlManual =
        "https://sites.google.com/view/manual-macros-en/p%C3%A1gina-principal";
    }

    shell.openExternal(urlManual);
  };

  const handleVideoTutorialClick = (event: any) => {
    event.preventDefault();
    shell.openExternal(
      "https://www.youtube.com/watch?v=nUkQs_cpJ4o&ab_channel=MatiasPascual"
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
