import React, { createContext, useContext, useState, useRef } from 'react'
import axios from 'axios'

import { NavLink } from 'react-router-dom'

const ModalEliminarClienteContext = createContext()
export const ModalStateProvider = props => {
  const [cliente, setCliente] = useState({}) //&&confirmar qeu la expoortación es correcta
  const [deleteButon, setDeleteButon] = React.useState(true) //botón eliminar definitivamente
  const inputRef = useRef(0) //input de validación con el número de cliente

  const toggleDeleteButon = async () => {
    let confirmationInput = await inputRef.current.input.value //&&¿se puede hacer mejor?
    if (parseInt(cliente.id_cliente, 10) === parseInt(confirmationInput, 10)) {
      //&& la condición seguro que se puede hace mejor
      setDeleteButon(false)
    } else {
      setDeleteButon(true)
    }
  }
  const deleteCliente = async () => {
    try {
      let config = {
        method: 'delete',
        url: `http://localhost:5001/api/cliente/${cliente.id_cliente}`
      }
      let response = await axios(config)
      console.log(`Se ha eliminado el cliente ${cliente.id_cliente}
      en src/views/Cliente.jsx`)
      console.log(response)
    } catch (err) {
      console.err(err) // falta por ponerlo de la forma correcta err.message err.parecido y el otro sistema
    }
  }

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    setIsModalVisible(false)
    console.log('ok de la caja modal')
    let confirmationInput = await inputRef.current
    console.log(confirmationInput.input.value)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <ModalEliminarClienteContext.Provider
      value={{
        cliente,
        setCliente,
        deleteButon,
        setDeleteButon,
        inputRef,
        toggleDeleteButon,
        //confirmationInput, //en principio éste no hace falta
        deleteCliente,
        isModalVisible,
        showModal,
        handleOk,
        handleCancel
      }}
    >
      {/* {loading && <SpinnerCuadrado />} */}
      {props.children}
    </ModalEliminarClienteContext.Provider>
  )
}

export default function useModalEliminarCliente() {
  return useContext(ModalEliminarClienteContext)
}
