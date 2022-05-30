import React from 'react'

export default function ProductCard({product, productSelected2}) {
  const {productoid,nombre,descripcion,precioventa,imagen} = product

  const productSale = {
    productoid : product.productoid,
    nombre : product.nombre,
    descripcion : product.descripcion,
    precioventa : product.precioventa,
    imagen : product.imagen,
    cantidad : 0,
    subtotal : 0
  }

  function handleChangeQuantity(value){
    productSale.cantidad = parseInt(value, 10)
    productSale.subtotal = productSale.cantidad * productSale.precioventa

  }


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
            <p>{`Precio Venta: ${precioventa}`}</p>

            <label>Cantidad</label>
            <input type='number' className='form-control' min='1' max='100' onChange={(e) => {handleChangeQuantity(e.target.value)}} style={{width : '80px'}}/>
            
            <button className='btn btn-info' onClick={() => productSelected2(productSale)}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}