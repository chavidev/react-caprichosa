import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import React from 'react'

//import Email from '../components/Email'
//import Password from '../components/Password'

// const LoguinCliente = () => {
//   return (
//     <div>
//       Loguin Cliente
//       <Email name="usuario"/>
//       <Password/>
//       <Button type="primary">Loguin</Button>
//     </div>
//   )
// }

// export default LoguinCliente

//rafce


const LoguinCliente = () => {
  const onFinish = async(values) => {
    console.log('Success:', values);  
    let response = await axios.post("http://localhost:5001/api/loginCliente/login",JSON.stringify(values))
    console.log(response)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      labelCol={{ span: 8 }} //responsive ver
      wrapperCol={{ span: 16 }} //responsive ver
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Introduzca un Email válido' }]} //mensaje de error
      >
        <Input placeholder="Nombre" />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="pass"
        rules={[{ required: true, message: 'Introduzca su contraseña' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Recuerdame</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Loguin
        </Button>
      </Form.Item>
    </Form>
  );
};


export default LoguinCliente
