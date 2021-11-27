import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
 





const ClientesTodos = () => {

    //¿tiene lógica?
  const [clientes, setClientes] = useState("")
  console.log(clientes)
  
 
  useEffect(() => {
    const getClientes = async () => {
      try {
        let response = await axios("http://localhost:5001/api/cliente")
        console.log(response)
        setClientes(response)
      }catch(err){
        console.log(err)
      }
    }
    getClientes() //¿por qué tengo que ponerlo aquí, en lugar de fuera?
  }, [clientes]) // sin poner clientes, hacerlo para que se ejecute solo al iniciar el componete
  
 
  return (
    <div>
      aquí mostrará todos los clientes
    </div>
  )
}

export default ClientesTodos
