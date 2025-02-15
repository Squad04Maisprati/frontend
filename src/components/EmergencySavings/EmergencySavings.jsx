import React, { useState } from 'react';
import './EmergencySavings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPiggyBank,
  faCoins,
  faWallet,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

function EmergencySavings() {
  const [totalInvestido, setTotalInvestido] = useState('R$: ');
  const [totalPoupanca, setTotalPoupanca] = useState('R$ ');
  const [reservaEmergencia, setReservaEmergencia] = useState(0);

  const formatarValor = (valor) => {
    const valorLimpo = valor.replace(/[^\d,.]/g, '');
    const valorComPonto = valorLimpo.replace(',', '.');
    return `R$ ${valorComPonto}`;
  };

  const handleInputChange = (setter) => (e) => {
    const valorFormatado = formatarValor(e.target.value);
    setter(valorFormatado);
  };

  const calcularReservaEmergencia = () => {
    const valorInvestido = parseFloat(totalInvestido.replace('R$ ', '')) || 0;
    const valorPoupanca = parseFloat(totalPoupanca.replace('R$ ', '')) || 0;
    const reserva = valorInvestido + valorPoupanca;
    setReservaEmergencia(reserva);
  };

  const formatarValorTotal = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="container">
      <h1>
        <FontAwesomeIcon icon={faPiggyBank} /> Reserva de Emergência
      </h1>
      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faCoins} /> Total de Valores Investidos:
        </label>
        <input
          type="text"
          value={totalInvestido}
          onChange={handleInputChange(setTotalInvestido)}
        />
      </div>
      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faWallet} /> Total de Dinheiro Guardado na Poupança:
        </label>
        <input
          type="text"
          value={totalPoupanca}
          onChange={handleInputChange(setTotalPoupanca)}
        />
      </div>
      <button onClick={calcularReservaEmergencia}>
        <FontAwesomeIcon icon={faExclamationTriangle} /> Calcular Reserva de Emergência
      </button>
      <div className="resultado">
        <h2>
          <FontAwesomeIcon icon={faExclamationTriangle} /> Reserva de Emergência: R${' '}
          {formatarValorTotal(reservaEmergencia)}
        </h2>
      </div>
    </div>
  );
}

export default EmergencySavings;



