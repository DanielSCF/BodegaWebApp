import axios from 'axios'
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import SalesDetail from './SalesDetail';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function SalesTable() {
  const [salesTable, setSalesTable] = useState([])
  const [salesDetailTable, setSalesDetailTable] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8070/pedido")
    .then(({ data }) => setSalesTable(data))
    .catch(({ error }) => console.log(error));
  }, [])

  function handleClickModal(orderSale){
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: '¿Esta seguro de cambiar el estado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cambialo!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(orderSale)
        axios.put("http://localhost:8070/pedido",{...orderSale, estado : 'completado'})
        .then(({ data }) => {
          console.log(data)
          Swal.fire(
            'Hecho!',
            'Se ha cambiado el estado.',
            'success'
          )
        })
        .catch(({ error }) => console.log(error));
      }
    })
  }
  
  function handleClick(id){
    let productsAssociatedId = []
    axios.get("http://localhost:8070/detallepedido")
    .then(({data}) => {
      console.log(data)
      data.map(itemDetail => {
        let itemWantedId = itemDetail.detallePedidoID.pedido.pedidoID

        if(id === itemWantedId){
          let product = {
            productoid : itemDetail.producto.productoid,
            imagen : itemDetail.producto.imagen,
            nombre : itemDetail.producto.nombre,
            descripcion : itemDetail.producto.descripcion,
            precioVenta : itemDetail.precio_venta,
            cantidad : itemDetail.cantidad,
            subtotal : itemDetail.subtotal
          }

          productsAssociatedId.push(product)
          setSalesDetailTable(productsAssociatedId)
        }
      })
    })
    .catch(({ error }) => console.log(error));
  }

  const navigateRegister = useNavigate()

  function handleClickSearch(ruta){
    navigateRegister(`/pedidos/${ruta}`)
  }

  return (
    <div>
      <button
          onClick={() => handleClickSearch("generarventa")}
          type="button"
          className="btn btn-primary"
        >Buscar Productos</button>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Modalidad</th>
            <th>Estado</th>
            <th>Cliente</th>
            <th>Trabajador</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {salesTable.map(saleRow => {
            return (
              <tr key = {saleRow.pedidoID}>
                <td>{saleRow.pedidoID}</td>
                <td>{saleRow.fecha}</td>
                <td>{`S/. ${saleRow.total}`}</td>
                <td>{saleRow.modalidad}</td>
                <td>{saleRow.estado}</td>
                <td>{`${saleRow.cliente.nombre}  ${saleRow.cliente.apellidos}`}</td>
                <td>{saleRow.trabajador === null ? "---": `${saleRow.trabajador.nombre} ${saleRow.trabajador.apellidos}`}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => {handleClick(saleRow.pedidoID)}} >Ver Detalle</button>
                  <button className="btn btn-info" onClick={() => {handleClickModal(saleRow)}} >Cambiar Estado</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div>
        <SalesDetail products={salesDetailTable}/>
      </div>
    </div>
  )
}
