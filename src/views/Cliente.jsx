import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

const Cliente = () => {

  const [cliente, setCliente] = useState({})
  
  const getCliente = async () => {
    try {
      let tokenCliente = localStorage.getItem('tokenCliente')
      console.log("token:",tokenCliente)
      var config = {
        method: 'get',
        url: `http://localhost:5001/api/cliente/myaccount`,
        headers: { 
          'authorization': `Bearer ${tokenCliente}`
        }
      };
      let response = await axios(config)
      console.log(response)
      setCliente(response.data)
    }catch(err){
      console.log(err)
    }
  }
 
  useEffect(() => {
    getCliente() 
  } ,[]) 
  
 //alternativa react.fragment
  return (
    <>
      <p >{cliente.nombre}</p>
      <p >{cliente.email}</p>
    </>
  )
}

export default Cliente


