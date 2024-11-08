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

    switch (language.currentLanguage.code) {
      case "es":
        urlManual =
          "https://sites.google.com/view/manual-macros-es/p%C3%A1gina-principal";
        break;

      case "pt":
        urlManual =
          "https://sites.google.com/view/manual-macros-pt/p%C3%A1gina-principal";
        break;

      case "ru":
        urlManual =
          "https://sites.google.com/view/manual-macros-ru/p%C3%A1gina-principal";
        break;

      case "en":
      default:
        urlManual =
          "https://sites.google.com/view/manual-macros-en/p%C3%A1gina-principal";
        break;
    }

    shell.openExternal(urlManual);
  };

  const handleVideoTutorialClick = (event: any) => {
    event.preventDefault();
    shell.openExternal(
      "https://www.youtube.com/watch?v=nUkQs_cpJ4o&ab_channel=MatiasPascual"
    );
  };

  const handlePlaystoreClick = (event: any) => {
    event.preventDefault();
    shell.openExternal(
      "https://play.google.com/store/apps/details?id=com.macros.helldivers"
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
      <div className="playstore" onClick={handlePlaystoreClick}>
        <span className="playstore-icon"></span>
        {language.currentLanguage.download_app}
      </div>
      <div>
        {userConnected ? (
          <p className="text user-connected">
            <strong>
              Macros to HD2 Game {language.currentLanguage.connected}
            </strong>
          </p>
        ) : (
          <>
            <strong>
              <p>{language.currentLanguage.footer_message}</p>
              <p>
                <strong>Macros to HD2 Game</strong>
              </p>
            </strong>
          </>
        )}
      </div>
    </div>
  );
}
