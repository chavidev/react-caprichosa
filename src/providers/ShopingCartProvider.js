import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from 'react'

const ShopingCartContext = createContext()
export const ShopingCartProvider = props => {
  const [articlesShopingCart, setArticlesShopingCart] = useState(0)

  const [shoppingCart, setShoppingCart] = useState({})
  const [variacionProducto, setVariacionProducto] = useState([])

  const getShoppingCart = async () => {
    console.log('inicio__getShoppingCart__________________')
    try {
      let tokenCliente = localStorage.getItem('tokenCliente')
      var config = {
        method: 'get',
        url: `https://node-caprichosa.herokuapp.com/api/shoppingCart`,
        headers: {
          authorization: `Bearer ${tokenCliente}`
        }
      }
      let response = await axios(config)
      console.log(
        'response.data.shoppingCart.variaciones.length____________________',
        response.data.shoppingCart.variaciones.length
      )

      console.log(response.data)
      setShoppingCart(response.data.shoppingCart)
      setVariacionProducto(response.data.variacionProducto)
      setArticlesShopingCart(response.data.shoppingCart.variaciones.length)
    } catch (err) {
      console.log(err)
    }
  }
  // &&si quito el use efect de aquí no funciona pero no entiendo por qué
  useEffect(() => {
    getShoppingCart()
  }, [])
  return (
    <ShopingCartContext.Provider
      value={{
        articlesShopingCart,
        setArticlesShopingCart,
        shoppingCart,
        setShoppingCart,
        getShoppingCart,
        variacionProducto,
        setVariacionProducto
      }}
    >
      {props.children}
    </ShopingCartContext.Provider>
  )
}

export default function useShopingCart() {
  return useContext(ShopingCartContext)
}
