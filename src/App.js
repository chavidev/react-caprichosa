import { Routes, Route, Link, Outlet } from 'react-router-dom'

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
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="flex-div">
        <Header />
        <p>antes del outlet</p>
        <Outlet />
        <p>después del outlet</p>
        <Footer />
      </div>
    </>
  )
}

export default App
