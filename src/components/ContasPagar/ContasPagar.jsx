import { useState } from 'react';
import './ContasPagar.css';

const ContasPagar = () => {
  const [formData, setFormData] = useState({
    descricao: '',
    valor: '',
    vencimento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Conta a Pagar:', formData);
    alert('Conta cadastrada com sucesso!');
    setFormData({ descricao: '', valor: '', vencimento: '' });
  };

  return (
    <div className="contas-pagar-container">
      <h2>Cadastro de Contas a Pagar</h2>
      <form className="contas-pagar-form" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descrição da conta"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="valor">Valor (R$)</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            placeholder="Valor da conta"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="vencimento">Data de Vencimento</label>
          <input
            type="date"
            id="vencimento"
            name="vencimento"
            value={formData.vencimento}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="botao">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default ContasPagar;
