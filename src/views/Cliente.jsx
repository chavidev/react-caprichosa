import React, { useEffect } from 'react'
import { Card, Switch, Button, Form, Input, Typography } from 'antd'
import SpinnerCuadrado from '../components/Spinner'
import useModalEliminarCliente from '../providers/ModalEliminarClienteProvider'
import ModalEliminarCliente from '../components/ModalEliminarCliente'
import Botones from '../components/Botones'
import Imagen from '../components/Imagen'
const { Text } = Typography

const Cliente = () => {
  const {
    cliente,
    setCliente,
    deleteButon,
    setDeleteButon,
    showModal,
    isModalVisible,
    handleOk,
    handleCancel,
    inputRef,
    toggleDeleteButon,
    confirmationInput,
    deleteCliente,
    formRef,
    toggle,
    disabled,
    setDisabled,
    getCliente,
    loading,
    setLoading,
    guardar
  } = useModalEliminarCliente()

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    getCliente()
  }, [])
  //alternativa react.fragment
  return (
    <>
      <div className="card-cliente-parent" id="card_cliente">
        <Card title="Mis datos" style={{ width: 300 }}>
          {/* style={{ width: 300 }} no termino de entender por que tiene dol llaves */}
          <Imagen />
          <br />
          {loading && <SpinnerCuadrado />}
          {!loading && <Switch value={disabled} checked={disabled} onClick={toggle} />}
          <br />
          {!loading && <Botones />}
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
              <ModalEliminarCliente />
            </>
          )}
        </Card>
      </div>
    </>
  )
}

export default Cliente
