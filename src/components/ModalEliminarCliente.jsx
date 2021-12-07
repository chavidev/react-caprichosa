import React from 'react'
import { NavLink } from 'react-router-dom'
import { Modal, Text, Input, Button } from 'antd'

const ModalEliminarCliente = () => {
  return (
    <>
      <Modal
        title="Eliminar mis datos DEFINITIVAMENTE"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            Cancel
          </Button>
        ]}
      >
        <Text type="danger">¿Estás seguro que quieres eliminar definitivamente tus datos?</Text>
        <br />
        <Text type="danger">ÉSTA ACCIÓN NO TIENE MARCHA ATRÁS</Text>
        <br />
        <Text>Pon tu número de cliente para confirmar: </Text>
        <br />
        <Text type="danger">{cliente.id_cliente}</Text>
        <br />
        <Input ref={inputRef} onChange={toggleDeleteButon} />
        <NavLink to={`/farewellclient`}>
          <Button disabled={deleteButon} danger onClick={deleteCliente}>
            eliminar definitivamente
          </Button>
        </NavLink>
      </Modal>
    </>
  )
}

export default ModalEliminarCliente
