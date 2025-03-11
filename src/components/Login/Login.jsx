import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true); 
    navigate('/dashboard'); 
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); 
  };

  const handlePasswordForget = () => {
    navigate('/password-recovery'); 
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
        
        <div className="register-link">
          <p><a onClick={handlePasswordForget}>Esqueci a senha</a></p>
        </div>

        <button type="submit" className="botao">Entrar</button>

        <div className="register-link">
          <p>Não tem uma conta? <a onClick={handleRegisterRedirect}>Cadastre-se</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;