import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import 'antd/dist/antd.css'; //importo la librería de los chinos
import LoginAdmin from "./views/LoginAdmin";
import LoginCliente from "./views/LoginCliente";
import ClientesTodos from "./views/ClientesTodos";

function App() {
  
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/loginadmin" element={<LoginAdmin />} />
      <Route path="/login" element={<LoginCliente />} />
      <Route path="/clientes" element={<ClientesTodos />} />
    </Routes>
    </div>
  );
}

export default App;
