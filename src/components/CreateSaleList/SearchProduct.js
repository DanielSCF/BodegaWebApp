import axios from 'axios';
import React, { useState } from 'react'
import ProductCard from './ProductCard';

export default function SearchProduct({productSelected1}) {
  const [listCards, setListCards] = useState([])

  function handleChange(productName) {
    axios.get(`http://localhost:8070/productos/buscar/${productName}`)
    .then(({ data }) => setListCards(data))
    .catch(({ error }) => console.log(error));
  }

  return (
    <div style={{width : '350px'}}>
      <label className='form-label'>Busque algun producto:</label><br/>
      <input type="search" onChange={(e) => {handleChange(e.target.value)}} className='form-control'/>
      {
        listCards.map((card) => {
          return <ProductCard key={card.productoid} product={card} productSelected2={productSelected1}/>
        })
      }
    </div>
  )
}
