import { useState } from "react";
import './CadastroBanco.css';

const CadastroBanco = () => {
  const [dadosBanco, setDadosBanco] = useState({
    codigo: "",
    numero: "",
    agencia: "",
    caixa: "",
    conta: "",
    saldoInicial: "",
    uf: "",
  });

  const siglas = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
    "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
    "SP", "SE", "TO"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosBanco((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Banco cadastrado com sucesso!
      Código: ${dadosBanco.codigo}
      Número: ${dadosBanco.numero}
      Agência: ${dadosBanco.agencia}
      Caixa: ${dadosBanco.caixa}
      Conta: ${dadosBanco.conta}
      Saldo Inicial: ${dadosBanco.saldoInicial}
      UF: ${dadosBanco.uf}`);
    
    setDadosBanco({
      codigo: "",
      numero: "",
      agencia: "",
      caixa: "",
      conta: "",
      saldoInicial: "",
      uf: "",
    });
  };

  return (
    <main className="container">
      <h2>Cadastro de Bancos</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="formulario-group-item">
          <label htmlFor="codigo">Código</label>
          <input 
            type="text" 
            name="codigo" 
            value={dadosBanco.codigo} 
            onChange={handleChange} 
          />
        </div>
        <div className="formulario-group-item">
          <label htmlFor="numero">Número</label>
          <input 
            type="text" 
            name="numero" 
            value={dadosBanco.numero} 
            onChange={handleChange} 
          />
        </div>
        <div className="formulario-group-item">
          <label htmlFor="agencia">Agência</label>
          <input 
            type="text" 
            name="agencia" 
            value={dadosBanco.agencia} 
            onChange={handleChange} 
          />
        </div>
        <div className="formulario-group-item">
          <label htmlFor="caixa">Caixa/Banco</label>
          <input 
            type="text" 
            name="caixa" 
            value={dadosBanco.caixa} 
            onChange={handleChange} 
          />
        </div>
        <div className="formulario-group-item">
          <label htmlFor="conta">Conta</label>
          <input 
            type="text" 
            name="conta" 
            value={dadosBanco.conta} 
            onChange={handleChange} 
          />
        </div>
        <div className="formulario-group-item">
          <label htmlFor="saldoInicial">Saldo Inicial</label>
          <input 
            type="number" 
            name="saldoInicial" 
            value={dadosBanco.saldoInicial} 
            onChange={handleChange} 
          />
        </div>
        <div className="formulario-group-item">
          <label htmlFor="uf">UF</label>
          <select 
            name="uf" 
            id="uf" 
            value={dadosBanco.uf} 
            onChange={handleChange}
          >
            <option value="">Selecione um estado</option>
            {siglas.map((sigla) => (
              <option key={sigla} value={sigla}>{sigla}</option>
            ))}
          </select>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </main>
  );
};

export default CadastroBanco;
