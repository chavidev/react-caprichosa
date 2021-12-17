import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
import 'antd/dist/antd.css' //importo la librería de los chinos
import LoginAdmin from './views/LoginAdmin'
import LoginCliente from './views/LoginCliente'
import ClientesTodos from './views/ClientesTodos'
import Cliente from './views/Cliente'
import FarewellClient from './views/FarewellClient'
import { ModalStateProvider } from './providers/ModalEliminarClienteProvider'
import { ProductoProvider } from './providers/ProductoProvider'
import ProductoCreate from './views/ProductoCreate'
import ProductosTodos from './views/ProductosTodos'
import ProductoUnico from './views/ProductoUnico'
import ShoppingCart from './views/ShoppingCart'

function App() {
  return (
    <div className="App">
      <p> nav</p>
      <h1>ReactRouter</h1>
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
        <Route
          path="/productocreate"
          element={
            <ProductoProvider>
              <ProductoCreate />
            </ProductoProvider>
          }
        />
        <Route path="/productostodos" element={<ProductosTodos />} />
        <Route path="/productounico/:id" element={<ProductoUnico />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </div>
  )
}

export default App
