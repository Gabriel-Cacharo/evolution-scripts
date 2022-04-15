import { Link } from 'react-router-dom';

import PersonGTA5 from '../../../assets/imgs/personGta5.png';

import './styles.scss';
import './responsive.scss';

function LoginPage() {
  const showOrHidePassword = () => {
    const passwordInputAttribute = document.getElementById('passwordInput')?.getAttribute('type');

    if (passwordInputAttribute === 'password') {
      document.getElementById('passwordInput')?.setAttribute('type', 'text');
    } else {
      document.getElementById('passwordInput')?.setAttribute('type', 'password');
    }
  };

  return (
    <div className="loginPage">
      <div className="leftContainer">
        <img src={PersonGTA5} alt="" />
        <ul>
          <li>
            <i className="bx bx-subdirectory-right" />
            Nós não temos nenhum acesso às suas informações;
          </li>
          <li>
            <i className="bx bx-subdirectory-right" />A sua senha é totalmente criptografada;
          </li>
          <li>
            <i className="bx bx-subdirectory-right" />
            Dica: Utilize uma senha com números e letras.
          </li>
        </ul>
      </div>
      <div className="rightContainer">
        <div className="loginFormContainer">
          <form action="">
            <input type="email" name="email" placeholder="Seu email..." required />
            <div className="passwordInputContainer">
              <input id="passwordInput" type="password" name="password" placeholder="Sua senha..." required />
              <button type="button" onClick={() => showOrHidePassword()}>
                <i className="bx bx-show" />
              </button>
            </div>
            <span>
              Não possui uma conta? Se <Link to="/register">Registre</Link>
            </span>
            <button className="loginButton" type="submit">
              Logar
              <i className="bx bx-log-in" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
