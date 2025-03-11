import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true); // Define como autenticado
    navigate('/dashboard'); // Redireciona para o Dashboard
  };

  return (
    <div className="login-container">
      <h2>Bem-vindo(a)!</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="campo">
          <label htmlFor="email">Usuário</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        
        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
          />
        </div>
        
        <div className="campo">
          <label className="esqueci-senha"><br></br>
          Esqueci a senha
          </label>
        </div>

        <button type="submit" className="botao">Entrar</button>

        <div className="register-link">
          <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
