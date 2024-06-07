/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Footer.scss";
import { useUserConnected } from "renderer/hooks/useUserConnected";
const { shell } = window.require("electron");

export function Footer() {
  const userConnected = useUserConnected();

  const handleLinkClick = (event: any) => {
    event.preventDefault();
    shell.openExternal("https://www.google.com");
  };

  return (
    <div className="footer">
      {userConnected ? (
        <p className="text user-connected">
          <strong>Macro Sync Helldivers conectado</strong>
        </p>
      ) : (
        <>
          <p>Para utilizar esta aplicacion tienes que conectar</p>
          <p>
            <strong>Macro Sync Helldivers</strong>
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
