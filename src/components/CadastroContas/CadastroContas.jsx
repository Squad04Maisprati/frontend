import { useState } from "react";
import "./CadastroContas.css";

const CadastroContas = () => {
  const [formData, setFormData] = useState({
    tipo: "pagar", // pagar ou receber
    descricao: "",
    valor: "",
    vencimento: "",
    pagamento: "boleto", // boleto, cartão, pix, transferência
    status: "pendente", // pendente ou pago
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Conta cadastrada:", formData);
    alert("Conta cadastrada com sucesso!");

    setFormData({
      tipo: "pagar",
      descricao: "",
      valor: "",
      vencimento: "",
      pagamento: "boleto",
      status: "pendente",
    });
  };

  return (
    <div className="cadastro-contas-container">
      <h2>Cadastro de Contas</h2>
      <form className="cadastro-contas-form" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="tipo">Tipo de Conta</label>
          <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange}>
            <option value="pagar">Conta a Pagar</option>
            <option value="receber">Conta a Receber</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
          
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

        <div className="campo">
          <label htmlFor="pagamento">Forma de Pagamento</label>
          <select id="pagamento" name="pagamento" value={formData.pagamento} onChange={handleChange}>
            <option value="boleto">Boleto</option>
            <option value="cartao">Cartão</option>
            <option value="pix">Pix</option>
            <option value="transferencia">Transferência</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" value={formData.status} onChange={handleChange}>
            <option value="pendente">Pendente</option>
            <option value="pago">Pago</option>
          </select>
        </div>

        <button type="submit" className="botao">Salvar</button>
      </form>
    </div>
  );
};

export default CadastroContas;
