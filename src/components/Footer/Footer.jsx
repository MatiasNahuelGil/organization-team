import footerImagen from "../../assets/img/footer.png";
import facebookImagen from '../../assets/img/facebook.png';
import instagramImagen from '../../assets/img/instagram.png';
import twitterImagen from '../../assets/img/twitter.png';
import Logo from '../../assets/img/Logo.png'
import './Footer.css'

export default function Footer() {

  const footerImg = `url(${footerImagen})`

  return (
    <>
      <footer className="footer" style={{ backgroundImage:  footerImg  }}>
        <div
          className="networks"
        >
          <a href="https://www.aluracursos.com/">
            <img src={facebookImagen} alt="Facebook" />
          </a>
          <a href="https://www.aluracursos.com/">
            <img src={twitterImagen} alt="twitter" />
          </a>
          <a href="https://www.aluracursos.com/">
            <img src={instagramImagen} alt="instagram" />
          </a>
        </div>
        <img src={Logo} alt="org" />
        <strong>Desarrollado por Gil Matias</strong>
      </footer>
    </>
  );
}
