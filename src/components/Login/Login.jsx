import React from 'react';
import { useState } from 'react';
import './Login.css';

function Login() {
  const [firstName, setFirstname] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Enviando os dados: ${firstName} - ${password} - Lembrar Senha: ${rememberMe}`);
  };

  return (
    <div className="container">
      <div className="login-left">
        <div className="login-logo">
          <img src="./logo.png" alt="FINAE logo" className="logo" />
        </div>
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="form-title">Bem vindo(a/e)</h2>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                placeholder="Usuário"
                onChange={(e) => setFirstname(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>
              <div className="remember-forgot">
                <label>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Lembrar Senha
                </label>
              </div>
          </div>
          <button type="submit" className="form-button">
            Entrar
          </button>
          <div className="separator"></div>
          <div className="form-links">
            <a href="#" className="link">
              Esqueceu a senha?
            </a>
            <a href="#" className="link">
              Não tem uma conta? Cadastre-se!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;