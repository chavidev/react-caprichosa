import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Pagination, Row, Col, List, Avatar, Typography, Space, Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import Header from '../components/Header'
//import imgDesktop from '../../public/img/1desktop_820_273.jpg' //../public/img/1-desktop_820_273.jpg
import Footer from '../components/Footer'

const { Meta } = Card
const { Text, Link } = Typography

const ProductosTodos = () => {
  const [productos, setProductos] = useState([])
  const navigate = useNavigate()

  const getProductos = async () => {
    try {
      let response = await axios('https://node-caprichosa.herokuapp.com/api/producto')
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
      {/* <Header /> */}
      <div className="img-desktop">
        <Image width={940} src={'img/1desktop_820_273.jpg'} />
      </div>
      <div className="img-tablet">
        <Image width={724} src={'img/1tablet_724_310.jpg'} />
      </div>
      <p className="title-head-line">AWAKEN YOUR INNER CHILD</p>
      <p className="body-head-line">
        We know you're picky when you're choosing a piece of clothing that defines you. You're in
        the right place! We have over 150,000 pieces of clothing. And if we don't have what you're
        looking for, we'll design your article.
      </p>
      <List
        grid={{ gutter: 16, column: 4, xs: 2, sm: 2, md: 4 }}
        pagination={{
          pageSize: 4
        }}
        dataSource={productos}
        renderItem={(producto, index) => (
          <List.Item>
            <div style={{ borderColor: 'blue', borderWidth: '10px', width: '100%' }}>
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
                <Meta title={producto.nombre} description={`${producto.P_V_P} €`} />

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
      {/* <Footer /> */}
    </div>
  )
}

export default ProductosTodos
