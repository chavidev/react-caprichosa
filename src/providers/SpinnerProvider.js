import React, { createContext, useContext, useState } from 'react'
//import SpinnerCuadrado from '../components/Spinner'
const SpinnerContext = createContext()
export const SpinnerStateProvider = props => {
  const [loading, setLoading] = useState(false)

  return (
    <SpinnerContext.Provider value={{ setLoading, loading }}>
      {/* {loading && <SpinnerCuadrado />} */}
      {props.children}
    </SpinnerContext.Provider>
  )
}

export default function useSpinner() {
  return useContext(SpinnerContext)
}
