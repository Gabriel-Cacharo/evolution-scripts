import { Link } from 'react-router-dom';

import EvolutionLogo from '../../assets/imgs/logoEvolution.png';

import './styles.scss';
import './responsive.scss';

function Header() {
  return (
    <header className="headerContainer">
      <div className="topHeader">
        <div className="topContainer">
          <Link to="/">
            <img src={EvolutionLogo} alt="Logo Evolution" />
          </Link>
          <div className="searchContainer">
            <input type="text" placeholder="Pesquise aqui um produto..." />
            <i className="bx bx-chevrons-right" />
          </div>
        </div>
        <div className="bottomContainer">
          <div className="informationTopHeader">
            <i className="bx bx-cart" />
            <p>
              Meu <br />
              <p>
                <Link to="/cart">
                  <b>carrinho</b>
                </Link>
              </p>
            </p>
          </div>
          <div className="informationTopHeader">
            <i className="bx bx-user-circle" />
            <p>
              Fazer
              <Link to="/login">
                <b>login</b>
              </Link>
              <br />
              <p>
                ou
                <Link to="/register">
                  <b>cadastro</b>
                </Link>
              </p>
            </p>
          </div>

          <div className="toggleThemeContainer">
            <i className="bx bx-toggle-left" />
          </div>
        </div>
      </div>
      <div className="bottomHeader">
        <ul>
          <li>
            <a href="www">
              <i className="bx bx-home" />
              Home
            </a>
          </li>
          <li>
            <a href="www">
              <i className="bx bx-map-alt" />
              Mapas
            </a>
          </li>
          <li>
            <a href="www">
              <i className="bx bxs-terminal" />
              Scripts
            </a>
          </li>
          <li>
            <a href="www">
              <i className="bx bx-tv" />
              Huds
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
