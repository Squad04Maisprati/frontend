import React, { useState } from 'react';
import './EmergencySavings.css';

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

  const reservaAlta = reservaEmergencia > 10000;

  return (
    <div className="container">
      <h1>
        Reserva de Emergência
        </h1>
      <div className="form-group">
        <label>Total de Valores Investidos:</label>
        <input
          type="text"
          value={totalInvestido}
          onChange={handleInputChange(setTotalInvestido)}
        />
      </div>
      <div className="form-group">
        <label>Total de Dinheiro Guardado na Poupança:</label>
        <input
          type="text"
          value={totalPoupanca}
          onChange={handleInputChange(setTotalPoupanca)}
        />
      </div>
      <button onClick={calcularReservaEmergencia}>Calcular Reserva de Emergência</button>
      <div className="resultado">
        <h2>Reserva de Emergência: R$ {reservaEmergencia.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default EmergencySavings;



