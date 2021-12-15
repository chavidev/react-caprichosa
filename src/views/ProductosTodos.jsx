import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Pagination, Row, Col, List, Avatar, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
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

  const listData = []
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    })
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )

  return (
    <div className="flex-div">
      {/* <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row> */}
      <List
        grid={{ gutter: 16, column: 2, xs: 2, sm: 4 }}
        pagination={{
          pageSize: 4
        }}
        dataSource={productos}
        renderItem={(producto, index) => (
          <List.Item>
            <div
              style={{ borderColor: 'blue', borderWidth: '10px', height: '500px', width: '100%' }}
            >
              <Card
                key={index}
                hoverable
                onClick={() => navegarProducto(producto.id_producto)}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
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
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ProductosTodos
