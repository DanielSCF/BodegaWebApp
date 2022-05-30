import React from 'react'

export default function OrdersDetail({products}) {

  /* 
    productoid : itemDetail.producto.productoid,
    imagen : itemDetail.producto.imagen,
    nombre : itemDetail.producto.nombre,
    descripcion : itemDetail.producto.descripcion,
    precioCompra : itemDetail.precio,
    cantidad : itemDetail.cantidad,
    subtotal : itemDetail.subtotal 
  */

  return (
    <table className="table">
      <thead className="table">
        <tr>
          <th>ID Producto</th>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio Compra</th>
          <th>Cantidad</th>
          <th>Sub Total</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product => {
            return (
              <tr key={product.productoid}>
                <td>{product.productoid}</td>
                <td><img className="product-image" alt="Producto" src={product.imagen}/></td>
                <td>{product.nombre}</td>
                <td>{product.descripcion}</td>
                <td>{product.precioCompra}</td>
                <td>{product.cantidad}</td>
                <td>{product.subtotal}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}