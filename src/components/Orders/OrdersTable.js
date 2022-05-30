import axios from 'axios'
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import OrdersDetail from './OrdersDetail';

export default function OrdersTable() {
  const [ordersTable, setOrdersTable] = useState([])
  const [ordersDetailTable, setOrdersDetailTable] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8070/orden")
    .then(({ data }) => setOrdersTable(data))
    .catch(({ error }) => console.log(error));
  }, [])

  function handleClick(id){
    let productsAssociatedId = []
    axios.get("http://localhost:8070/detalleorden")
    .then(({data}) => {
      data.map(itemDetail => {
        let itemWantedId = itemDetail.detalleOrdenID.orden_compra.orden_compraID
        //let productsAssociatedId = []

        if(id === itemWantedId){
          let product = {
            productoid : itemDetail.producto.productoid,
            imagen : itemDetail.producto.imagen,
            nombre : itemDetail.producto.nombre,
            descripcion : itemDetail.producto.descripcion,
            precioCompra : itemDetail.precio,
            cantidad : itemDetail.cantidad,
            subtotal : itemDetail.subtotal
          }

          productsAssociatedId.push(product)
          setOrdersDetailTable(productsAssociatedId)
        }
      })
    })
    .catch(({ error }) => console.log(error));
  }

  const navigateRegister = useNavigate()

  function handleClickSearch(ruta){
    navigateRegister(`/ordenes/${ruta}`)
  }

  return (
    <div>
      <button
          onClick={() => handleClickSearch("generarlista")}
          type="button"
          className="btn btn-primary"
        >Buscar Productos</button>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Proveedor</th>
            <th>Empresa</th>
            <th>Trabajador</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordersTable.map(orderRow => {
            return (
              <tr key = {orderRow.orden_compraID}>
                <td>{orderRow.orden_compraID}</td>
                <td>{orderRow.fecha}</td>
                <td>{`S/. ${orderRow.total}`}</td>
                <td>{orderRow.estado}</td>
                <td>{orderRow.proveedor.nombre}</td>
                <td>{orderRow.proveedor.razon_social}</td>
                <td>{`${orderRow.trabajador.nombre}  ${orderRow.trabajador.apellidos}`}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => {handleClick(orderRow.orden_compraID)}} >Ver Lista</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div>
        <OrdersDetail products={ordersDetailTable}/>
      </div>
    </div>
  )
}
