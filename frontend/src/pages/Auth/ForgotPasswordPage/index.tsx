import PersonGTA5 from '../../../assets/imgs/personGta5-3.png';

import './styles.scss';
import './responsive.scss';

function ForgotPasswordPage() {
  return (
    <div className="forgotPasswordPage">
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
            Nós enviaremos um email de recuperação para você.
          </li>
        </ul>
      </div>
      <div className="rightContainer">
        <div className="forgotPasswordFormContainer">
          <form action="">
            <input type="email" name="email" placeholder="Seu email..." required />
            <button className="forgotPasswordButton" type="submit">
              Enviar
              <i className="bx bx-log-in" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
