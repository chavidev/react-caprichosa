import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Meta } = Card

const ProductosTodos = () => {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate()

  const getProductos = async () => {
    try {
      let response = await axios('http://localhost:5001/api/producto')
      console.log(response.data)
      setProductos(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const navegarProducto = id => {
    navigate(`/productounico/${id}`)
  }

  useEffect(() => {
    getProductos()
  }, [])
  // [] solo se ejecutará cuando se monta el componente la primera vez
  // && tiene que hacerlo cuando se modifican los productos
  return (
    <div>
      {productos.map((producto, index) => {
        //return <p key={index}>{cliente.nombre}</p>
        //return <p key={index}>{producto.nombre}</p>
        return (
          <Card
            key={index}
            hoverable
            onClick={() => navegarProducto(producto.id_producto)}
            style={{ width: 280 }}
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <p>{producto.nombre}</p>
            <p>{`${producto.P_V_P} €`}</p>

            {producto.atributos.map((valor, index2) => {
              return (
                <p key={index2}>{`${valor.nombre}: ${valor.valores
                  .map(e => e.valor)
                  .join(',')}`}</p>
              )
            })}
          </Card>
        )
      })}
    </div>
  )
}

export default ProductosTodos

/* 


ReactDOM.render(
  ,
  mountNode,
); */
