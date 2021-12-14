import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Card } from 'antd'
import { useParams } from 'react-router-dom'

const { Meta } = Card

const ProductoUnico = () => {
  let id = useParams().id
  const [producto, setProducto] = useState({})

  const getProducto = async () => {
    try {
      let response = await axios(`http://localhost:5001/api/producto/${id}`)
      console.log(response.data)
      setProducto(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducto()
  }, [])
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <p>{producto.nombre}</p>
        <p>{`${producto.P_V_P} €`}</p>

        {producto.atributos?.map((valor, index2) => {
          return (
            <p key={index2}>{`${valor.nombre}: ${valor.valores.map(e => e.valor).join(',')}`}</p>
          )
        })}
      </Card>
    </div>
  )
}

export default ProductoUnico
