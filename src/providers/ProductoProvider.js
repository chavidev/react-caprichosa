import React, { createContext, useContext, useState, useRef } from 'react'

const ProductoContext = createContext()
export const ProductoProvider = props => {
  const [newProducto, setNewProducto] = useState({})
  const formRef = useRef()
  return (
    <ProductoContext.Provider
      value={{
        newProducto,
        setNewProducto,
        formRef
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
