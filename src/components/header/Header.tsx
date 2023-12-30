import "./header.css";
import logo from "../../../public/img/logo.png"

function Header() {
  return (
    <header className="Header-contenedor container">
      <div className="Abstract">
        <img className="logo" src={logo} alt="" />
        <h1 className="Abstract-titulo"> Abstract | Help Center</h1>
      </div>
      <div className="boton">
        <button className="boton-negro">Submi a request</button>
        <button className="boton-azul">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
