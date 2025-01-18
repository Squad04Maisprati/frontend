import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContasPagar from './components/ContasPagar/ContasPagar';
import ContasReceber from './components/ContasReceber/ContasReceber';
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
         {/* <div className="App">
        <RegistrationPage />
      </div> */}
      </Routes>
    </Router>
        
    </>
  );
}

export default App;
