import React, { useEffect, useState } from 'react'

export default function OrderTableList({lista2, removeProduct}) {
  const [estado, setEstado] = useState([])
  //setL(lista)

  

  let count = 1
  /* useEffect(() => {
    console.log(lista)
    console.log(count++)
  }, []) */

  //setEstado([...estado,lista])
  //let finalArray = []

  function handleClickRemove(id){
    removeProduct(id)
  }

  return (
    <table className='table' style={{width : '950px'}}>
      <thead className='table-dark'>
        <tr>
          <th>ID</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio Compra</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
        lista2.map((product) => {
          console.log("entre al map")
          return (
            <tr key = {product.productoid}>
              <td>{product.productoid}</td>
              <td><img className="product-image" alt="Producto" src={product.imagen}/></td>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>{`S/. ${product.preciocompra}`}</td>
              <td>{product.cantidad}</td>
              <td>{`S/. ${product.subtotal}`}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleClickRemove(product.productoid)}>Quitar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
