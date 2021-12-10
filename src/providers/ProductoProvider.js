import React, { createContext, useContext, useState } from 'react'

const ProductoContext = createContext()
export const ProductoProvider = props => {
  const [producto, setProducto] = useState({})

  return (
    <ProductoContext.Provider
      value={{
        producto,
        setProducto
      }}
    >
      {/* && ¿props.children no me hace falta con mi estructura? */}
      {props.children}
    </ProductoContext.Provider>
  )
}

export default function useProductoProvider() {
  return useContext(ProductoContext)
}
