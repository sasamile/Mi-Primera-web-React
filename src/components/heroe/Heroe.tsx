import "./heroe.css";
import { GoArrowRight } from "react-icons/go";


function Heroe() {
  return (
    <section className="Heroe contenido">
      <div className="Heroe-contenedor">
        <h1 className="Heroe-titulo">How can we help?</h1>
        <div className="search">
          <input type="text" placeholder="search" />
          <button>
            <GoArrowRight />
          </button>
          
        </div>
      </div>
    </section>
  );
}

export default Heroe;
