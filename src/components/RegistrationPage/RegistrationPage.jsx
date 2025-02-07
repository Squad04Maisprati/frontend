import React from 'react'
import { useState } from 'react'
import "./RegistrationPage.css"

function RegistrationPage() {
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        alert("Enviando os dados: " + firstName + " - " + lastName + " - " + email + " - " + password + " - " + confirmPassword)
    }

  return (
    <div className="registration-container">
      <div className="registration-left">
        <div className="registration-logo">
          <img src="./logo.png" alt="FINAE logo" className="logo" />
        </div>
      </div>
      <div className="registration-right">  
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="form-title">Criar Conta</h2>
        <div className="form-group">
            <div class="input-group">
            <input type="name" placeholder="Primeiro Nome"
            onChange={(e) => setFirstname(e.target.value)} className="form-input" />
            <input type="name" placeholder="Último Nome"
            onChange={(e) => setLastName(e.target.value)} className="form-input" />
            </div>
            <input type="email" placeholder="Endereço de Email" 
            onChange={(e) => setEmail(e.target.value)} className="form-input" />
            <div class="input-group">
            <input type="senha" placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)} className="form-input" />
            <input type="senha" placeholder="Repetir Senha"
            onChange={(e) => setConfirmPassword(e.target.value)} className="form-input"/>  
            </div>
        </div>

        <button type="submit" className="form-button">Criar Conta</button>
        <div class="separator"></div>
        <div className="form-links">
            <a href="#" className="link">Esqueceu a senha?</a>
            <a href="#" className="link">Já tem uma conta? Conecte-se!</a>
        </div>
      </form>
      </div>
    </div>
  )
}

export default RegistrationPage
