import React from 'react'

export default function SaleTableList({lista2, removeProduct}) {

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
          <th>Precio Venta</th>
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
              <td>{`S/. ${product.precioventa}`}</td>
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
