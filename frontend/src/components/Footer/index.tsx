import './styles.scss';
import './responsive.scss';

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerTopContainer">
        <div className="footerEvolutionInformationsContainer">
          <h6>
            <i className="bx bx-rocket" />
            Evolution Scripts
          </h6>
          <p>
            A Evolution Scripts é uma empresa perfeita à sua base de <b>FiveM</b> e <b>RedM</b>!
          </p>
        </div>

        <div className="websiteMapContainer">
          <h6>Mapa do site</h6>
          <ul>
            <li>
              <i className="bx bx-star" />
              <a href="www">Exemplo 1</a>
            </li>
            <li>
              <i className="bx bx-star" />
              <a href="www">Exemplo 2</a>
            </li>
            <li>
              <i className="bx bx-star" />
              <a href="www">Exemplo 3</a>
            </li>
            <li>
              <i className="bx bx-star" />
              <a href="www">Exemplo 4</a>
            </li>
          </ul>
        </div>

        <div className="footerSocialMediaContainer">
          <h6>Nossas redes sociais</h6>
          <ul>
            <li>
              <a href="www">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="www">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href="www">
                <i className="bx bxl-discord-alt" />
              </a>
            </li>
            <li>
              <a href="www">
                <i className="bx bxl-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottomContainer">
        <p>Copyright ©2022 All rights reserved</p>
        <p>Evolution Scripts | 11.837.859/0001-76</p>
      </div>
    </footer>
  );
}

export default Footer;
