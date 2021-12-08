import React, { createContext, useContext, useState, useRef } from 'react'

const ModalEliminarClienteContext = createContext()
export const ModalStateProvider = props => {
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

  const inputRef = useRef(0) //input de validación con el número de cliente

  return (
    <ModalEliminarClienteContext.Provider
      value={{ isModalVisible, showModal, handleOk, handleCancel, inputRef }}
    >
      {/* {loading && <SpinnerCuadrado />} */}
      {props.children}
    </ModalEliminarClienteContext.Provider>
  )
}

export default function useModalEliminarCliente() {
  return useContext(ModalEliminarClienteContext)
}
