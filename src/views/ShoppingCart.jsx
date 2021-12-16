import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Select, Form, Button } from 'antd'
const { Meta } = Card

const ShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState({})

  const getShoppingCart = async () => {
    console.log('inicio__getShoppingCart__________________')
    try {
      let tokenCliente = localStorage.getItem('tokenCliente')
      var config = {
        method: 'get',
        url: `http://localhost:5001/api/shoppingCart`,
        headers: {
          authorization: `Bearer ${tokenCliente}`
        }
      }
      let response = await axios(config)
      console.log('response____________________', response)

      console.log(response.data)
      setShoppingCart(response.data.shoppingCart)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getShoppingCart()
  }, [])
  /* 
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
 */
  const onFinish = () => {
    console.log('onFinish ejecutado => COMPRADO')
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
        <Meta title="tittle" description="description" />
        {shoppingCart.variaciones?.map((variacion, i) => {
          return (
            <div key={i} style={{ display: 'block' }}>
              {variacion.id_variacion}
            </div>
          )
        })}
      </Card>
    </div>
  )
}

export default ShoppingCart
