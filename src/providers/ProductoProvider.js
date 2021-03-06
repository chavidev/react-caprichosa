import axios from 'axios'
import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const ProductoContext = createContext()
export const ProductoProvider = props => {
  const [newProducto, setNewProducto] = useState({ valores: [] })
  const [newAtributoValores, setNewAtributoValores] = useState([])
  const formRef = useRef()
  useEffect(() => {
    console.log('newAtributoValores', newAtributoValores)
  }, [newAtributoValores])

  // 1-- Ej=> atributo_nuevo:[verde, rojo, azul]
  const add_valor_atributo_nuevo = async () => {
    let response = await formRef.current?.validateFields()
    console.log('valor_atributo_nuevo', response.valor_atributo_nuevo)
    setNewAtributoValores([...newAtributoValores, response.valor_atributo_nuevo]) //newAtributo.valores.push(response.valor_atributo_nuevo))
  }

  // 2-- Ej=> color:[verde, rojo, azul]
  const atributo_nuevo = async () => {
    console.log('nuevo atributo añadido')
    //let response = await formRef.inputRef.current //.input.value
    const dataForm = await formRef.current?.validateFields()
    console.log(dataForm)
    console.log(dataForm.atributo_nuevo_nombre)
    let valores = [
      ...newProducto.valores,
      {
        nombre: dataForm.atributo_nuevo_nombre,
        valores: newAtributoValores
      }
    ]
    console.log(valores)
    setNewProducto({ ...dataForm, valores })
    setNewAtributoValores([])
  }

  //3-- crea un nuevo producto
  const create = async () => {
    const dataForm = await formRef.current?.validateFields()
    const finalProducto = newProducto.valores.map(e => ({
      nombre: e.nombre,
      valores: e.valores.map(l => ({ valor: l }))
    }))
    const values = { atributos: finalProducto, ...dataForm }
    console.log(values)

    var config = {
      method: 'post',
      url: `https://node-caprichosa.herokuapp.com/api/producto`,
      data: values
    }

    let response = await axios(config)
    console.log(response)
  }

  return (
    <ProductoContext.Provider
      value={{
        newProducto,
        setNewProducto,
        newAtributoValores,
        setNewAtributoValores,
        formRef,
        add_valor_atributo_nuevo,
        atributo_nuevo,
        create
      }}
    >
      {props.children}
    </ProductoContext.Provider>
  )
}

export default function useProductoProvider() {
  return useContext(ProductoContext)
}
