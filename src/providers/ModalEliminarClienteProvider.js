import React, { createContext, useContext, useState, useRef } from 'react'
import qs from 'qs'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import useSpinner from './SpinnerProvider'

const ModalEliminarClienteContext = createContext()
export const ModalStateProvider = props => {
  const [cliente, setCliente] = useState({}) //&&confirmar qeu la expoortación es correcta
  const [deleteButon, setDeleteButon] = React.useState(true) //botón eliminar definitivamente
  const inputRef = useRef(0) //input de validación con el número de cliente
  const [disabled, setDisabled] = useState(false) //editar
  const { loading, setLoading } = useSpinner()

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
        url: `https://node-caprichosa.herokuapp.com/api/cliente/${cliente.id_cliente}`
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

  const formRef = useRef(null) //botton guardar desde fuera del formulario
  //const inputRef = useRef(0)

  const toggle = () => {
    setDisabled(!disabled)
    console.log(`disabled:${disabled}`)
  }

  const getCliente = async () => {
    try {
      setLoading(true)
      let tokenCliente = localStorage.getItem('tokenCliente')
      console.log('token:', tokenCliente)
      var config = {
        method: 'get',
        url: `https://node-caprichosa.herokuapp.com/api/cliente/myaccount`,
        headers: {
          authorization: `Bearer ${tokenCliente}`
        }
      }
      let response = await axios(config)
      console.log(response)
      setCliente(response.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const guardar = async () => {
    const dataForm = await formRef.current?.validateFields() // validateFields() es validación de ant // ? evitaerrores si entra undefine, pero aquí no haría falta

    var data = qs.stringify({
      ...dataForm //tengo qeu hacer un destructuring para que funcione
    })
    console.log(`data:${data}`)
    var config = {
      method: 'put',
      url: `https://node-caprichosa.herokuapp.com/api/cliente/${cliente.id_cliente}`,
      //url: 'https://node-caprichosa.herokuapp.com/api/cliente/27',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data //{...data} hay qeu hacer un destrúcturing
    }
    //setLoading(true)
    //&& al punto then, tengo que poder extraerle la función y quitar el .then => try catch
    await axios(config) //&& sin await también funciona, ¿se lo pongo?
      .then(function (response) {
        getCliente() //&& ¿forma correcta de actualizar la llamada a los clientes?
        //console.log('response axios:', JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
    //setLoading(false)
    toggle()
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
        handleCancel,
        formRef,
        toggle,
        disabled,
        setDisabled,
        getCliente,
        loading,
        setLoading,
        guardar
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
