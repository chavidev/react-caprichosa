import React from 'react'
import qs from 'qs'
import { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { Card, Switch, Button, Form, Input, Typography, Modal } from 'antd'
const { Text } = Typography

const Cliente = () => {
  const [cliente, setCliente] = useState({})
  const [disabled, setDisabled] = useState(false) //editar

  const [deleteButon, setDeleteButon] = React.useState(true) //botón eliminar definitivamente
  const toggleDeleteButon = async () => {
    let confirmationInput = await inputRef.current.input.value //&&¿se puede hacer cejor?
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
  //#########################################################

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
  //##########################################################
  const formRef = useRef(null) //botton guardar desde fuera del formulario
  const inputRef = useRef(0)

  const toggle = () => {
    setDisabled(!disabled)
    console.log(`disabled:${disabled}`)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const getCliente = async () => {
    try {
      let tokenCliente = localStorage.getItem('tokenCliente')
      console.log('token:', tokenCliente)
      var config = {
        method: 'get',
        url: `http://localhost:5001/api/cliente/myaccount`,
        headers: {
          authorization: `Bearer ${tokenCliente}`
        }
      }
      let response = await axios(config)
      console.log(response)
      setCliente(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCliente()
  }, [])

  const guardar = async () => {
    const dataForm = await formRef.current?.validateFields() // validateFields() es validación de ant // ? evitaerrores si entra undefine, pero aquí no haría falta

    var data = qs.stringify({
      ...dataForm //tengo qeu hacer un destructuring para que funcione
    })
    console.log(`data:${data}`)
    var config = {
      method: 'put',
      url: `http://localhost:5001/api/cliente/${cliente.id_cliente}`,
      //url: 'http://localhost:5001/api/cliente/27',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data //{...data} hay qeu hacer un destrúcturing
    }

    //&& al punto then, tengo que poder extraerle la función y quitar el .then => try catch
    await axios(config) //&& sin await también funciona, ¿se lo pongo?
      .then(function (response) {
        getCliente() //&& ¿forma correcta de actualizar la llamada a los clientes?
        //console.log('response axios:', JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
    toggle()
  }

  //alternativa react.fragment
  return (
    <>
      <div className="card-cliente-parent" id="card_cliente">
        <Card title="Mis datos" style={{ width: 300 }}>
          <img src="https://joeschmoe.io/api/v1/joe" alt="avatar" />

          <Switch value={disabled} checked={disabled} onClick={toggle} />
          {/* onClick={toggle} defaultChecked disabled={disabled} */}
          <br />
          {!disabled ? (
            <Button type="primary" onClick={toggle}>
              Editar
            </Button>
          ) : (
            <>
              <Button type="default" onClick={toggle}>
                Cancelar
              </Button>
              <Button type="primary" onClick={guardar}>
                Guardar
              </Button>
            </>
          )}
          {!disabled ? (
            <>
              <p>Nombre</p>
              <p>{cliente.nombre}</p>
              <p>Email:</p>
              <p>{cliente.email}</p>
              <p>Teléfono:</p>
              <p>{cliente.telefono}</p>
            </>
          ) : (
            <>
              <Form
                ref={formRef}
                labelCol={{
                  span: 8
                }}
                wrapperCol={{
                  span: 16
                }}
                initialValues={{
                  nombre: cliente.nombre,
                  email: cliente.email,
                  telefono: cliente.telefono
                }}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="nombre"
                  name="nombre"
                  rules={[
                    {
                      required: true,
                      message: 'introduce tu nombre de usuario'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'introduce tu email'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="telefono"
                  name="telefono"
                  rules={[
                    {
                      required: true,
                      message: 'introduce tu telefono'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Form>
              <Text type="danger">
                Zona de peligro, si eliminas tus datos, no es posible deshacer
              </Text>

              <Button type="primary" danger onClick={showModal}>
                Eliminar mis datos
              </Button>
              <Modal
                title="Eliminar mis datos DEFINITIVAMENTE"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Text type="danger">
                  ¿Estás seguro que quieres eliminar definitivamente tus datos?
                </Text>
                <br />
                <Text type="danger">ÉSTA ACCIÓN NO TIENE MARCHA ATRÁS</Text>
                <br />
                <Text>Pon tu número de cliente para confirmar: </Text>
                <br />
                <Text type="danger">{cliente.id_cliente}</Text>
                <br />
                <Input ref={inputRef} onChange={toggleDeleteButon} />
                <NavLink to={`/farewellclient`}>
                  <Button disabled={deleteButon} danger onClick={deleteCliente}>
                    eliminar definitivamente
                  </Button>
                </NavLink>
              </Modal>
            </>
          )}
        </Card>
      </div>
    </>
  )
}

export default Cliente
