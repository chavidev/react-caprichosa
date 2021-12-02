import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Card } from 'antd';
//import

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
      <div className="card-cliente-parent" id="card_cliente">
        <Card title="Mis datos"  style={{ width: 300 }}>          
          <img src="https://joeschmoe.io/api/v1/joe" alt="avatar" />
          <p>Nombre</p>
          <p>{cliente.nombre}</p>
          <p>Email:</p>
          <p>{cliente.email}</p>
          <p>Teléfono:</p>
          <p>{cliente.telefono}</p>
        </Card>
      </div>
      
    </>
  )
}

export default Cliente


