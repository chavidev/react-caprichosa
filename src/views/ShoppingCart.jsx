//import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import useShopingCart from '../providers/ShopingCartProvider'
import { Card, Select, Form, Button, Image } from 'antd'
import { MinusCircleTwoTone, PlusCircleTwoTone, DeleteTwoTone } from '@ant-design/icons'
const { Meta } = Card

const ShoppingCart = () => {
  const {
    articlesShopingCart,
    setArticlesShopingCart,
    navegarShopingCart,
    shoppingCart,
    setShoppingCart,
    getShoppingCart
  } = useShopingCart()
  /* ¿es correcto dejarlo aquí y no llevarlo al provider?, pienso que si */
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
        cover={<img alt="example" src={'señorita-carrito.jpg'} />}
      >
        <Meta title="Shoping Cart" description="_" />
        {shoppingCart.variaciones?.map((variacion, i) => {
          console.log(`variacion=>${variacion}, i=>${i}`)
          return (
            <div key={i} style={{ display: 'block' }}>
              <Card hoverable style={{ width: 200 }}>
                <div className="card-shopingCart">
                  <img
                    className="img-card-shopingCart"
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                  <p>
                    Article:{i + 1} Ref:{variacion.id_variacion}{' '}
                    <DeleteTwoTone style={{ fontSize: '40px' }} />
                    <br />
                    dress n <br />
                    color: red <br />
                    size: M <br />
                    <MinusCircleTwoTone />
                    {` ${variacion.cantidad} `}
                    <PlusCircleTwoTone />
                  </p>
                </div>
              </Card>
            </div>
          )
        })}
      </Card>
    </div>
  )
}

export default ShoppingCart
