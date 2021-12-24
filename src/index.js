import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { SpinnerStateProvider } from './providers/SpinnerProvider'

ReactDOM.render(
  <BrowserRouter>
    <SpinnerStateProvider>
      <App />
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
