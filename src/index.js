import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { SpinnerStateProvider } from './providers/SpinnerProvider'

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
import { ShopingCartProvider } from './providers/ShopingCartProvider'

ReactDOM.render(
  <BrowserRouter>
    <SpinnerStateProvider>
      <ShopingCartProvider>
        <Routes>
          <Route path="/" element={<App />}>
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
          </Route>
        </Routes>
      </ShopingCartProvider>

      <link
        href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Asul&family=Concert+One&display=swap"
        rel="stylesheet"
      ></link>
    </SpinnerStateProvider>
  </BrowserRouter>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals() //&&¿Ésto que es?
