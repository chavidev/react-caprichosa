import React, { createContext, useContext, useState } from 'react'

const ShopingCartContext = createContext()
export const ShopingCartProvider = props => {
  const [articlesShopingCart, setArticlesShopingCart] = useState(0)

  return (
    <ShopingCartContext.Provider value={{ articlesShopingCart, setArticlesShopingCart }}>
      {props.children}
    </ShopingCartContext.Provider>
  )
}

export default function useShopingCart() {
  return useContext(ShopingCartContext)
}
