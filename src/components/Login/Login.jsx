import React from 'react'
import "./Login.css" 

const Login = () => {
  return (
    <div className="containerWrapper">
      <div className="imagem">
        <img src="./logo.png" alt="FINAE logo" className="logo" />
      </div>
      <div className="container">
        <form>
          <h1>Bem Vindo(a)!</h1>
          <div className="inputBox">
            <input placeholder="Usuário" type="email" />
          </div>
          <div className="inputBox">
            <input placeholder="Senha" type="password" />
          </div>
          <div className="rememberForgot">
            <label>
              <input type="checkbox" />
              Lembrar Senha
            </label>
            <a href="#">Esqueci Senha</a>
          </div>
          <button type="submit" className="login">Entrar</button>
          <div className="registerLink">
            <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;