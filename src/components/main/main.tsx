import "./main.css";
import { GoArrowRight } from "react-icons/go";
import img1 from "../../../public/img/1.png";
import img2 from "../../../public/img/2.png";
import img3 from "../../../public/img/3.png";
import img4 from "../../../public/img/4.png";
import img5 from "../../../public/img/5.png";
import img6 from "../../../public/img/6.png";

function Main() {
  return (
    <main className="main-container">
      <div className="main">
        <div className="contenedor">
          <div className="imagen">
            <img src={img1} alt="" />
          </div>
          <div>
            <p className="titulo">Branches</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam debitis ex eaque perspiciatis mollitia. Officia aliquam
              eaque, sunt est obcaecati provident.
            </p>
            <a href="#">
              Learn More <GoArrowRight />{" "}
            </a>
          </div>
        </div>
        {/* Fin */}
        <div className="contenedor">
          <div className="imagen">
            <img src={img2} alt="" />
          </div>
          <div>
            <p className="titulo">Branches</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam debitis ex eaque perspiciatis mollitia. Officia aliquam
              eaque, sunt est obcaecati provident.
            </p>
            <a href="#">
              Learn More <GoArrowRight />{" "}
            </a>
          </div>
        </div>
        {/* Fin */}
        <div className="contenedor">
          <div className="imagen">
            <img src={img3} alt="" />
          </div>
          <div>
            <p className="titulo">Branches</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam debitis ex eaque perspiciatis mollitia. Officia aliquam
              eaque, sunt est obcaecati provident.
            </p>
            <a href="#">
              Learn More <GoArrowRight />{" "}
            </a>
          </div>
        </div>
        {/* Fin */}
        <div className="contenedor">
          <div className="imagen">
            <img src={img4} alt="" />
          </div>
          <div>
            <p className="titulo">Branches</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam debitis ex eaque perspiciatis mollitia. Officia aliquam
              eaque, sunt est obcaecati provident.
            </p>
            <a href="#">
              Learn More <GoArrowRight />{" "}
            </a>
          </div>
        </div>
        {/* Fin */}
        <div className="contenedor">
          <div className="imagen">
            <img src={img5} alt="" />
          </div>
          <div>
            <p className="titulo">Branches</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam debitis ex eaque perspiciatis mollitia. Officia aliquam
              eaque, sunt est obcaecati provident.
            </p>
            <a href="#">
              Learn More <GoArrowRight />{" "}
            </a>
          </div>
        </div>
        {/* Fin */}
        <div className="contenedor">
          <div className="imagen">
            <img src={img6} alt="" />
          </div>
          <div>
            <p className="titulo">Branches</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              magnam debitis ex eaque perspiciatis mollitia. Officia aliquam
              eaque, sunt est obcaecati provident.
            </p>
            <a href="#">
              Learn More <GoArrowRight />{" "}
            </a>
          </div>
        </div>
        {/* Fin */}
      </div>
    </main>
  );
}

export default Main;
