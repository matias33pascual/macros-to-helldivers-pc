import "./Footer.scss";
import { useUserConnected } from "renderer/hooks/useUserConnected";

export function Footer() {
  const userConnected = useUserConnected();

  return (
    <div className="footer">
      {userConnected ? (
        <strong>MacroSync Mobile conectado</strong>
      ) : (
        <>
          <span>Para utilizar esta aplicacion tiene que conectar</span>
          <span>
            <strong>MacroSync Mobile Helldivers</strong>
          </span>
        </>
      )}
    </div>
  );
}
