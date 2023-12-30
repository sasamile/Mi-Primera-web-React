import "./footer.css"
import { FaRegCopyright } from "react-icons/fa";
import logo from "../../../public/img/logo.png"

function Footer() {
  return (
    <footer className="footer">
        <div className="contenedor-grid">
            <div className="footer-Abstract">
                    <h2>Abstract</h2>
                    <p>Branches</p>
            </div>
            { /*fin*/ }
            <div className="footer-Abstract">
                    <h2>Resources</h2>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Release Notes</p>
                    <p>Status</p>
            </div>
            { /*fin*/ }
            <div className="footer-Abstract">
                    <h2>Community</h2>
                    <p>Twitter</p>
                    <p>Linkedln</p>
                    <p>Facebok</p>
                    <p>Dribble</p>
                    <p>Podcast</p>
            </div>
            { /*fin*/ }
            <div className="footer-Abstract">
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Legal</p> <br />
                    <h2>Contact Us</h2>
                    <p>info@abstract.com</p>
            </div>
            { /*fin*/ }
            <div className="copyright">
                <img src={logo} alt="logo" />
                <p> <FaRegCopyright /> Todos los derechos de autor Reservados</p>
            </div>
            
        </div>
    
    </footer>
  )
}

export default Footer