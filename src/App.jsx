import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContasPagar from './components/ContasPagar/ContasPagar';
import ContasReceber from './components/ContasReceber/ContasReceber';
import CadastroBanco from './components/CadastroBanco/CadastroBanco';
import EmergencySavings from './components/EmergencySavings/EmergencySavings';
import Header from './components/Header'
// import RegistrationPage from './components/Registration/RegistrationPage'

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/contas-pagar" element={<ContasPagar />} />
        <Route path="/contas-receber" element={<ContasReceber />} />
        <Route path="/cadastro-banco" element={<CadastroBanco />} />
        <Route path="/emergency-savings" element={<EmergencySavings />} />
         {/* <div className="App">
        <RegistrationPage />
      </div> */}
      </Routes>
    </Router>
        
    </>
  );
}

export default App;
