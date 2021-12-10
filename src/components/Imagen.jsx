import React from 'react'
import useModalEliminarCliente from '../providers/ModalEliminarClienteProvider'
import { Card, Switch, Button, Form, Input, Typography, Tooltip, Upload, message } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { UploadOutlined } from '@ant-design/icons'
const { Text } = Typography

const Imagen = () => {
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
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <>
      <img src="https://joeschmoe.io/api/v1/joe" alt="avatar" style={{ width: 100 }} />
      <Tooltip title="editar">
        <Button type="primary" shape="circle" icon={<EditOutlined />} />
        <Button type="primary" shape="circle" icon={<UploadOutlined />} />
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        ,
      </Tooltip>
    </>
  )
}

export default Imagen
