import React from 'react'
import { Card, Image } from 'antd'

const FarewellClient = () => {
  return (
    <>
      <div className="card-client-farewell" id="farewell_client">
        <Card title="Good Bye" bordered={false} style={{ width: 300 }}>
          <p>
            Haz Borrado correctamente tu Información de nuestra Base de datos, lamentamos que te
            vayas.
          </p>
          <Image width={200} src={'farewell.jpg'} />
        </Card>
      </div>
    </>
  )
}

export default FarewellClient
