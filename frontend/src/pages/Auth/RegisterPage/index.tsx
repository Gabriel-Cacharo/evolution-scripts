import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import PersonGTA5 from '../../../assets/imgs/personGta5-2.png';
import { api } from '../../../services/api.js';

import './styles.scss';
import './responsive.scss';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const showOrHidePassword = () => {
    const passwordInputAttribute = document.getElementById('passwordInput')?.getAttribute('type');
    const repeatPasswordInputAttribute = document.getElementById('repeatPasswordInput')?.getAttribute('type');

    if (passwordInputAttribute && repeatPasswordInputAttribute === 'password') {
      document.getElementById('passwordInput')?.setAttribute('type', 'text');
      document.getElementById('repeatPasswordInput')?.setAttribute('type', 'text');
    } else {
      document.getElementById('passwordInput')?.setAttribute('type', 'password');
      document.getElementById('repeatPasswordInput')?.setAttribute('type', 'password');
    }
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error('A sua senha deve conter pelo menos 6 caracteres.');

      return;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem.');

      return;
    }

    try {
      const responseRegister = await api.post('/auth/register', {
        email,
        name,
        password,
        confirmPassword,
      });

      toast(responseRegister.data.msg);
    } catch (err) {
      toast.error('Houve um erro ao realizar seu registro.');
    }
  };

  return (
    <div className="registerPage">
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
        <div className="registerFormContainer">
          <form onSubmit={(e) => handleRegister(e)}>
            <input
              type="email"
              name="email"
              placeholder="Seu email..."
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="name"
              placeholder="Seu nome..."
              required
              onChange={(e) => setName(e.target.value)}
            />
            <div className="passwordInputContainer">
              <input
                id="passwordInput"
                type="password"
                name="password"
                placeholder="Sua senha..."
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={() => showOrHidePassword()}>
                <i className="bx bx-show" />
              </button>
            </div>
            <div className="passwordInputContainer">
              <input
                id="repeatPasswordInput"
                type="password"
                name="password"
                placeholder="Repita a sua senha..."
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="button" onClick={() => showOrHidePassword()}>
                <i className="bx bx-show" />
              </button>
            </div>
            <span>
              Já possui uma conta? Faça <Link to="/login">Login</Link>
            </span>
            <button className="registerButton" type="submit">
              Registrar
              <i className="bx bx-log-in" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
