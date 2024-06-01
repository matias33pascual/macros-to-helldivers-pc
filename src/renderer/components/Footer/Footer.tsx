import "./Footer.scss";
import { useUserConnected } from "renderer/hooks/useUserConnected";

export function Footer() {
  const userConnected = useUserConnected();

  return (
    <div className="footer">
      {userConnected ? (
        <p className="text user-connected">
          <strong>MacroSync Mobile conectado</strong>
        </p>
      ) : (
        <>
          <p className="text">
            Para utilizar esta aplicacion tiene que conectar
          </p>
          <p className="text">
            <strong>MacroSync Mobile Helldivers</strong>
          </p>
        </>
      )}
    </div>
  );
}
