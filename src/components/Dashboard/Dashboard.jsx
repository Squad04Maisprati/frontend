import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts';
import './Dashboard.css';

function Dashboard() {
  const [dados] = useState({
    saldo: 4216,
    entradas: 20300,
    despesas: [
      { categoria: 'Supermercado', valor: 1500 },
      { categoria: 'Cartão de crédito', valor: 1800 },
      { categoria: 'Plano de saúde', valor: 1200 },
      { categoria: 'Prestação da casa', valor: 2929 },
      { categoria: 'Presentes', valor: 900 },
    ],
    evolucaoMensal: [
      { mes: 'Jan', despesas: 3000, entradas: 5000, saldo: 2000 },
      { mes: 'Fev', despesas: 2500, entradas: 4500, saldo: 2000 },
      { mes: 'Mar', despesas: 4000, entradas: 6000, saldo: 2000 },
      { mes: 'Abr', despesas: 3500, entradas: 5500, saldo: 2000 },
      { mes: 'Mai', despesas: 3000, entradas: 5000, saldo: 2000 },
      { mes: 'Jun', despesas: 4500, entradas: 7000, saldo: 2500 },
    ],
  });

  const totalDespesas = dados.despesas.reduce((total, despesa) => total + despesa.valor, 0);

  const corSaldo = dados.saldo >= 0 ? 'verde' : 'vermelho';

  return (
    <div className="dashboard">
      <h1>Finanças Pessoais</h1>
      <div className="resumo">
        <div className="card">
          <h2>SALDO</h2>
          <p className={corSaldo}>R$ {dados.saldo.toLocaleString()}</p>
        </div>
        <div className="card">
          <h2>ENTRADAS</h2>
          <p className="verde">R$ {dados.entradas.toLocaleString()}</p>
        </div>
        <div className="card">
          <h2>DESPESAS</h2>
          <p className="vermelho">R$ {totalDespesas.toLocaleString()}</p>
        </div>
      </div>

      <div className="evolucao">
        <h2>Evolução Mensal: Despesas vs. Entradas</h2>
        <LineChart width={1100} height={400} data={dados.evolucaoMensal}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="despesas" stroke="#ff7300" />
          <Line type="monotone" dataKey="entradas" stroke="#387908" />
        </LineChart>
      </div>

      <div className="filtros">
        <h2>Filtrar por Período</h2>
        <div className="filtro-periodo">
          <label>
            Data Inicial:
            <input type="date" />
          </label>
          <label>
            Data Final:
            <input type="date" />
          </label>
        </div>
        <button>Limpar Filtros</button>
      </div>
    </div>
  );
}

export default Dashboard;