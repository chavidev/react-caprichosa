import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const ClientesTodos = () => {
  //¿tiene lógica?
  const [clientes, setClientes] = useState([])

  const getClientes = async () => {
    try {
      //let response = await axios('https://node-caprichosa.herokuapp.com/api/cliente')
      let response = await axios('https://node-caprichosa.herokuapp.com/api/cliente') //https://node-caprichosa.herokuapp.com/
      console.log(response.data)
      setClientes(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getClientes()
  }, []) // [] solo se ejecutará cuando se monta el componente la primera vez

  return (
    <div>
      {clientes.map((cliente, index) => {
        return <p key={index}>{cliente.nombre}</p>
      })}
    </div>
  )
}

export default ClientesTodos
