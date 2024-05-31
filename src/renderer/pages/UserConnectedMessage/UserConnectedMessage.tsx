/* eslint-disable import/no-unresolved */
import "./UserConnectedMessage.scss";
import { useUserConnected } from "renderer/hooks/useUserConnected";

export function UserConnectedMessage() {
  const userConnected = useUserConnected();

  return (
    <div>
      {userConnected ? (
        <p className="footer">
          <strong>MacroSync Mobile conectado</strong>
        </p>
      ) : (
        <p className="footer">
          Para utilizar esta aplicacion tiene que conectar
          <div>
            <strong>MacroSync Mobile Helldivers</strong>
          </div>
        </p>
      )}
    </div>
  );
}
