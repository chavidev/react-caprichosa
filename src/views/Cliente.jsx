import React from 'react'
import qs from 'qs'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Card, Switch, Button, Form, Input } from 'antd'

const Cliente = () => {
  const [cliente, setCliente] = useState({})

  const [disabled, setDisabled] = useState(false) // la palabra React no me cuadra, ¿se puede quitar?

  const formRef = useRef(null)

  const toggle = () => {
    setDisabled(!disabled)
    console.log(`disabled:${disabled}`)
  }

  const onFinish = values => {
    console.log('Success:', values)
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

    //##############################################

    var data = qs.stringify({
      dataForm
      // 'nombre': '27 -nombre cliente 27'
    })
    var config = {
      method: 'put',
      url: `http://localhost:5001/api/cliente/${cliente.id_cliente}`,
      //url: 'http://localhost:5001/api/cliente/27',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    }

    axios(config)
      .then(function (response) {
        console.log('respuesta', JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })

    //#################################
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
            <Button className="boton-editar" type="primary" onClick={toggle}>
              Editar
            </Button>
          ) : (
            <>
              <Button className="boton-cancel" type="primary" onClick={toggle}>
                Cancelar
              </Button>
              <Button className="boton-guardar" type="primary" onClick={guardar}>
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
            </>
          )}
        </Card>
      </div>
    </>
  )
}

export default Cliente
