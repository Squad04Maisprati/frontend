// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard/Dashboard';
// import ContasPagar from './components/ContasPagar/ContasPagar';
// import ContasReceber from './components/ContasReceber/ContasReceber';
// import CadastroBanco from './components/CadastroBanco/CadastroBanco';
// import CadastroContas from './components/CadastroContas/CadastroContas';
// import EmergencySavings from './components/EmergencySavings/EmergencySavings';
// import Header from './components/Header'
// // import RegistrationPage from './components/Registration/RegistrationPage'

// function App() {
//   return (
//     <>
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/contas-pagar" element={<ContasPagar />} />
//         <Route path="/contas-receber" element={<ContasReceber />} />
//         <Route path="/cadastro-banco" element={<CadastroBanco />} />
//         <Route path="/cadastro-contas" element={<CadastroContas />} />
//         <Route path="/emergency-savings" element={<EmergencySavings />} />
//          {/* <div className="App">
//         <RegistrationPage/>
//       </div> */}
//       </Routes>
//     </Router>
        
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import ContasPagar from './components/ContasPagar/ContasPagar';
import ContasReceber from './components/ContasReceber/ContasReceber';
import CadastroBanco from './components/CadastroBanco/CadastroBanco';
import CadastroContas from './components/CadastroContas/CadastroContas';
import EmergencySavings from './components/EmergencySavings/EmergencySavings';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Header />}
      {isAuthenticated && <Sidebar active={() => {}} />}

      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contas-pagar" element={<ContasPagar />} />
            <Route path="/contas-receber" element={<ContasReceber />} />
            <Route path="/cadastro-banco" element={<CadastroBanco />} />
            <Route path="/cadastro-contas" element={<CadastroContas />} />
            <Route path="/emergency-savings" element={<EmergencySavings />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
