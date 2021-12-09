import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
import 'antd/dist/antd.css' //importo la librería de los chinos
import LoginAdmin from './views/LoginAdmin'
import LoginCliente from './views/LoginCliente'
import ClientesTodos from './views/ClientesTodos'
import Cliente from './views/Cliente'
import FarewellClient from './views/FarewellClient'
import { ModalStateProvider } from './providers/ModalEliminarClienteProvider'
function App() {
  return (
    <div className="App">
      <p> aquí puedo meter la nav</p>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/login" element={<LoginCliente />} />
        <Route path="/clientes" element={<ClientesTodos />} />
        <Route
          path="/cliente"
          element={
            <ModalStateProvider>
              <Cliente />
            </ModalStateProvider>
          }
        />
        <Route path="/farewellclient" element={<FarewellClient />} />
      </Routes>
    </div>
  )
}

export default App
