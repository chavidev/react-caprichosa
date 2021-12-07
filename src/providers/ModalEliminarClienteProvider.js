import React, { createContext, useContext, useState } from 'react'
const ModalEliminarClienteContext = createContext()
export const ModalStateProvider = props => {
  const [loading, setLoading] = useState(false)

  return (
    <ModalEliminarClienteContext.Provider value={{ setLoading, loading }}>
      {/* {loading && <SpinnerCuadrado />} */}
      {props.children}
    </ModalEliminarClienteContext.Provider>
  )
}

export default function useModalEliminarCliente() {
  return useContext(ModalEliminarClienteContext)
}
