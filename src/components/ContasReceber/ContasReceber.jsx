import { useState } from 'react';
import './ContasReceber.css';

const ContasReceber = () => {
  const [formData, setFormData] = useState({
    descricao: '',
    valor: '',
    recebimento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Conta a Receber:', formData);
    alert('Conta cadastrada com sucesso!');
    setFormData({ descricao: '', valor: '', recebimento: '' });
  };

  return (
    <div className="contas-receber-container">
      <h2>Cadastro de Contas a Receber</h2>
      <form className="contas-receber-form" onSubmit={handleSubmit}>
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
          <label htmlFor="recebimento">Data de Recebimento</label>
          <input
            type="date"
            id="recebimento"
            name="recebimento"
            value={formData.recebimento}
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

export default ContasReceber;
