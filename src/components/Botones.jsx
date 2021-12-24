//https://ant.design/components/spin/?theme=dark#header
import React from 'react'
import useModalEliminarCliente from '../providers/ModalEliminarClienteProvider'
import { Card, Switch, Button, Form, Input, Typography } from 'antd'
const { Text } = Typography

const Botones = () => {
  const {
    cliente,
    setCliente,
    deleteButon,
    setDeleteButon,
    showModal,
    isModalVisible,
    handleOk,
    handleCancel,
    inputRef,
    toggleDeleteButon,
    confirmationInput,
    deleteCliente,
    formRef,
    toggle,
    disabled,
    setDisabled,
    getCliente,
    loading,
    setLoading,
    guardar
  } = useModalEliminarCliente()
  return (
    <>
      {!disabled ? (
        <Button type="primary" onClick={toggle}>
          Editar
        </Button>
      ) : (
        <>
          <Button type="default" onClick={toggle}>
            Cancelar
          </Button>
          <Button type="primary" onClick={guardar}>
            Guardar
          </Button>
        </>
      )}
    </>
  )
}

export default Botones
