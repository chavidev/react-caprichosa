import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import 'antd/dist/antd.css'; //importo la librería de los chinos
import LoguinAdmin from "./views/LoguinAdmin";
import LoguinCliente from "./views/LoguinCliente";

function App() {
  
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/loguinadmin" element={<LoguinAdmin />} />
      <Route path="/loguin" element={<LoguinCliente />} />
    </Routes>
    </div>
  );
}

export default App;
