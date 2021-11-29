import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
//import TitleLogin from '../components/login';
//rafce


const LoginCliente = () => {
  const onFinish = async(values) => {  //Tengo qeu meterle un try catch, ejemplo al final de éste documento
    console.log('Success:', values);  
    //let response = await axios.post("http://localhost:5001/api/loginCliente/login",JSON.stringify(values))
   
    var config = {
      method: 'post',
      url: 'http://localhost:5001/api/loginCliente/login',
      data : values
    };
    
    let response = await axios(config)
    //let response = await axios.post('http://localhost:5001/api/loginCliente/login',values)
    console.log(response)
    let res = JSON.stringify(response.data.token)
    localStorage.setItem('tokenCliente', res)
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
        <Input placeholder="introduce tu Email" />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="pass"
        rules={[{ required: true, message: 'Introduzca su Contraseña' }]}
      >
        <Input.Password placeholder="introduce tu contraseña" />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Recuerdame</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};



export default LoginCliente


/* 
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
}); */