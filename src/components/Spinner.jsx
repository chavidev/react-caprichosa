//https://ant.design/components/spin/?theme=dark#header
import React from 'react'
import { Spin, Space } from 'antd'

const SpinnerCuadrado = () => {
  return (
    <>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </>
  )
}

export default SpinnerCuadrado
