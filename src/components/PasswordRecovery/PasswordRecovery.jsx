import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordRecovery.css'

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Sending password recovery request for email:', email);
  };

  const navigate = useNavigate();
  
  const handleLoginRedirect = () => {
        navigate('/'); 
  };
    

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Recuperação de Senha</h1>
        <p>Insira o seu email e enviaremos um código para que você possa recuperar o acesso à sua conta.</p>
        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Seu email"
            required
          />
        </div>
        <button type="submit" className="button">Enviar</button>
        <div class="separator"></div>
        <a onClick={handleLoginRedirect} className="link">Lembrou da senha? Conecte-se!</a>
      </form>
    </div>
  );
};

export default PasswordRecovery 