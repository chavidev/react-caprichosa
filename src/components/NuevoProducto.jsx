import React from 'react'
import { Card, Switch, Button, Form, Input, Typography } from 'antd'
import useProductoProvider from '../providers/ProductoProvider'

const NuevoProducto = () => {
  const {
    newProducto,
    setNewProducto,
    formRef,
    atributo_nuevo,
    add_valor_atributo_nuevo,
    newAtributoValores,
    setNewAtributoValores,
    create
  } = useProductoProvider()
  return (
    <>
      <Button shape="round" type="primary" onClick={create}>
        Guardar
      </Button>
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
        {newProducto.valores.map((valor, index) => {
          return <p key={index}>{`${valor.nombre}: ${valor.valores.join(',')}`}</p>
        })}
        <p>Nuevo atributo</p>
        <Button shape="round" type="primary" onClick={atributo_nuevo}>
          Añadir Atributo
        </Button>
        <Form.Item
          label="Nombre atributo_nuevo_nombre"
          name="atributo_nuevo_nombre"
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
          label="valor_atributo_nuevo"
          name="valor_atributo_nuevo"
          rules={[
            {
              required: false,
              message: 'atributo'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Button shape="round" type="primary" onClick={add_valor_atributo_nuevo}>
          Añadir valor_atributo_nuevo
        </Button>
        {newAtributoValores.map((valor, index) => {
          return <p key={index}>{valor}</p>
        })}
      </Form>
    </>
  )
}

export default NuevoProducto

/* 
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
 */
