import { React } from 'react'
import NuevoProducto from '../components/NuevoProducto'
import useProductoProvider from '../providers/ProductoProvider'
import { Card, Switch, Button, Form, Input, Typography } from 'antd'
// import { Card, Switch, Button, Form, Input, Typography } from 'antd'
// import SpinnerCuadrado from '../components/Spinner'
// import Botones from '../components/Botones'
// import ModalEliminarCliente from '../components/ModalEliminarCliente'
// import Imagen from '../components/Imagen'
// const { Text } = Typography

const ProductoCreate = () => {
  const { newProducto, setNewProducto } = useProductoProvider()

  return (
    <>
      <div className="card-cliente-parent" id="card_cliente">
        <Card title="Nuevo producto" style={{ width: 500 }}>
          <NuevoProducto />
        </Card>
      </div>
    </>
  )
}

export default ProductoCreate
