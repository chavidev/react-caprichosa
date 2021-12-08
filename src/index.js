import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { SpinnerStateProvider } from './providers/SpinnerProvider'
import { ModalStateProvider } from './providers/ModalEliminarClienteProvider'

ReactDOM.render(
  <BrowserRouter>
    <ModalStateProvider>
      <SpinnerStateProvider>
        <App />
      </SpinnerStateProvider>
    </ModalStateProvider>
  </BrowserRouter>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals() //&&¿Ésto que es?
