import React from 'react'
import { Card, Switch, Button, Form, Input, Typography } from 'antd'
import useProductoProvider from '../providers/ProductoProvider'

const NuevoProducto = () => {
  const { newProducto, setNewProducto, formRef, addAtributo } = useProductoProvider()
  return (
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
          ref: '',
          nombre: '',
          precio_coste: '',
          P_V_P: ''
        }}
        /* Ups, si falla, nos quedamos sin nada */
        /* onFinishFailed={onFinishFailed} */
        autoComplete="off"
      >
        <Form.Item
          label="ref"
          name="ref"
          rules={[
            {
              required: false /* ha de ser true */,
              message: 'ref del proveedor'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="nombre"
          name="nombre"
          rules={[
            {
              required: false,
              message: 'introduce nombre del artículo Ej: Vestido Unicornio'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="precio de coste"
          name="precio_coste"
          rules={[
            {
              required: false,
              message: 'introduce el precio de coste'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="PVP"
          name="P_V_P"
          rules={[
            {
              required: false,
              message: 'ponle precio, que no se va a vender GRATIS'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <p>Atributos_1</p>
        <Form.Item
          label="Atributo_nombre_1"
          name="atributo_nombre_1"
          rules={[
            {
              required: false,
              message: 'atributo'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Atributo_valor_1"
          name="atributo_valor_1"
          rules={[
            {
              required: false,
              message: 'atributo'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <p>Atributos_2</p>
        <Form.Item
          label="Atributo_nombre_2"
          name="atributo_nombre_2"
          rules={[
            {
              required: false,
              message: 'atributo'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Atributo_valor_2"
          name="atributo_valor_2"
          rules={[
            {
              required: false,
              message: 'atributo'
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Button shape="round" type="primary" onClick={addAtributo}>
        Añadir Atributo
      </Button>
    </>
  )
}

export default NuevoProducto
