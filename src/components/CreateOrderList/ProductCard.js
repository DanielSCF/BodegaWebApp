import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({product, productSelected2}) {
  const {productoid,nombre,descripcion,preciocompra,imagen} = product

  const productOrder = {
    productoid : product.productoid,
    nombre : product.nombre,
    descripcion : product.descripcion,
    preciocompra : product.preciocompra,
    imagen : product.imagen,
    cantidad : 0,
    subtotal : 0
  }

  function handleChangeQuantity(value){
    productOrder.cantidad = parseInt(value, 10)
    productOrder.subtotal = productOrder.cantidad * productOrder.preciocompra

    //console.log(productOrder)
  }

  //const navigateRegister = useNavigate()

  //sendProductSelected()
  /* function handleClickRedirect(){
    productSelected2(productOrder)
    navigateRegister("/ordenes/generarlista");
  } */


  
  return (
    <div className='card text-bg-light border-primary mb-3' style={{maxWidth: '540px', marginTop : '10px'}}>
      
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={imagen} className='img-fluid rounded mx-auto d-block' alt="imagen de producto" style={{marginTop : '20px'}}/>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h4 className='card-title'>{`Nombre: ${nombre}`}</h4>
            <p>{`ID: ${productoid}`}</p>
            <p><strong>{`Descripcion: ${descripcion}`}</strong></p>
            <p>{`Precio Compra: ${preciocompra}`}</p>

            <label>Cantidad</label>
            <input type='number' className='form-control' min='1' max='100' onChange={(e) => {handleChangeQuantity(e.target.value)}} style={{width : '80px'}}/>
            
            <button className='btn btn-info' onClick={() => productSelected2(productOrder)}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
