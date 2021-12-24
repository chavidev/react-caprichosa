import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Select, Form, Button } from 'antd'
import { useParams } from 'react-router-dom'
const { Option } = Select

const { Meta } = Card

const ProductoUnico = () => {
  let id = useParams().id
  const [producto, setProducto] = useState({})

  const getProducto = async () => {
    try {
      let response = await axios(`http://localhost:5001/api/producto/${id}`)
      console.log(response.data)
      setProducto(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducto()
  }, [])

  //maneja el select

  const onFinish = async value => {
    console.log(value)
    const variacion = producto.variaciones.find(
      e => e.atributo_1 === value.atributo_1 && e.atributo_2 === value.atributo_2
    )
    console.log(variacion)
    //##################
    let tokenCliente = localStorage.getItem('tokenCliente')
    var config = {
      method: 'post',
      url: `http://localhost:5001/api/shoppingCart`,
      headers: {
        authorization: `Bearer ${tokenCliente}`
      },
      data: { id_variacion: variacion.id_variacion, cantidad: 1 }
    }
    let response = await axios(config)
    console.log('response', response)

    //##################
  }

  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Meta title={producto.nombre} description={`${producto.P_V_P} €`} />
        <Form onFinish={onFinish}>
          {producto.atributos?.map((valor, index2) => {
            return (
              <div key={index2} style={{ display: 'block' }}>
                {valor.nombre}
                <Form.Item name={`atributo_${index2 + 1}`}>
                  <Select style={{ width: 120 }}>
                    {valor.valores.map((e, i) => (
                      <Option key={i} value={e.valor}>
                        {e.valor}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            )
          })}
          <Button htmlType="submit">Añadir</Button>
        </Form>
      </Card>
    </div>
  )
}

export default ProductoUnico
