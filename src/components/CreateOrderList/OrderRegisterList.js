import React, { useEffect, useState } from 'react'
import SearchProduct from './SearchProduct'
import OrderTableList from './OrderTableList'
import './OrderStyles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function OrderRegisterList() {
  const [list, setList] = useState([])

  const [listWorkers, setListWorkers] = useState([])
  const [listSuppliers, setListSuppliers] = useState([])
  const [workerId, setWorkerId] = useState(0)
  const [supplierId, setSupplierId] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  const navigateRegister = useNavigate()

  const dataOrder = {
    fecha : '',
    total : totalCost,
    estado : 'pendiente',
    trabajador : { trabajadorID : workerId},
    proveedor : { proveedorID : supplierId}
  }

  console.log("aquiiiiii")
  console.log(dataOrder)
  useEffect(() => {
    axios.get("http://localhost:8070/trabajador/adminsalmaceneros")
    .then(({ data }) => setListWorkers(data))
    .catch(({ error }) => console.log(error))
  },[])

  useEffect(() => {
    axios.get("http://localhost:8070/proveedor")
    .then(({ data }) => setListSuppliers(data))
    .catch(({ error }) => console.log(error))
  },[])

  const fecha = new Date()
  let hoy = fecha.toLocaleDateString()
  dataOrder.fecha = hoy

  function getIdWorker(inputWords){
    setWorkerId(parseInt(inputWords.substr(-1)))
    dataOrder.trabajador.trabajadorID = workerId
    console.log(dataOrder)
  }

  function getIdSupplier(inputWords){
    setSupplierId(parseInt(inputWords.substr(-1)))
    dataOrder.proveedor.proveedorID = supplierId
    console.log(dataOrder)
  }

  //data(dataForm)
  console.log(dataOrder)
  useEffect(() => {
    let total = 0
    list.map(dataProduct => {return total += dataProduct.subtotal})
    setTotalCost(total)
  }, [list])

  function addProduct(p){
    console.log("AQIOOOOO111")
    console.log(p)
    setList([...list, p])
    console.log(list)
    console.log("AQIOOOOO222222")
  }


  function removeProduct(id){
    setList(list.filter(product => product.productoid !== id))
  }


  console.log(list)
  console.log(dataOrder)

  function handleClick(){
    axios.post("http://localhost:8070/orden", {...dataOrder})
    .then(({ data }) => {
      console.log(data)
      console.log("-> " + data.orden_compraID)
      console.log(data.orden_compraID)
    
      const product = {
        precio: 0,
        cantidad: 0,
        subtotal: 0,
        producto: {
          productoid: 0
        },
        orden_compra: {
          orden_compraID: data.orden_compraID
        },
        detalleOrdenID : {
          orden_compra: {
            orden_compraID: data.orden_compraID
          },
          producto: {
            productoid: 0
          }
        }
      }
  
      list.map(productOrder => {
        product.precio = productOrder.preciocompra
        product.cantidad = productOrder.cantidad
        product.subtotal = productOrder.subtotal
        product.producto.productoid = productOrder.productoid
        product.detalleOrdenID.producto.productoid = productOrder.productoid
  
        console.log(product)
  
        axios.post("http://localhost:8070/detalleorden", {...product})
        .then(({ data }) => console.log(data))
        .catch(({ error }) => console.log(error))
  
        console.log(product)
      })
    })
    .catch(({ error }) => console.log(error))
    navigateRegister(-1)
  }

  return (
    <div>
      <h1>Registrar Lista de Orden de Compra</h1>
      <div className='row'>
        <div className="col-md-8">
          <form className='row g-3'>
            <h3>{hoy}</h3>
            <div className='col-md-4'>
              <label className='form-label'>Trabajador a Cargo:</label><br />
              <input list="workers" className='form-control' placeholder="Elija un trabajador" onInput={(e) => {getIdWorker(e.target.value)}} required/>
        
              <datalist id="workers">
                {listWorkers.map(worker => <option key={worker.trabajadorID} value={`${worker.nombre} ${worker.apellidos} - ${worker.trabajadorID}`} />)}
              </datalist>
            </div>
        
            <div className='col-md-4'>
              <label className='form-label'>Proveedor a Cargo:</label><br />
              <input list="suppliers" className='form-control' placeholder="Elija un proveedor" onChange={(e) => {getIdSupplier(e.target.value)}} required/>
        
              <datalist id="suppliers">
                {listSuppliers.map(supplier => <option key={supplier.proveedorID} value={`${supplier.nombre} - ${supplier.proveedorID}`} />)}
              </datalist>
            </div>
          </form>
        </div>
        
        <div className="col-md-4 d-grid gap-2">
          <button className="btn btn-primary btn-lg" onClick={handleClick}>
            Registrar
          </button>
        </div>
      </div>
      {/* <OrderDataForm data = {getData}/> */}
      <div className='flexcontainer' style={{marginTop : '50px'}}>
        <OrderTableList lista2={list} removeProduct = {removeProduct}/>
        <SearchProduct productSelected1={addProduct} />
      </div>
    </div>
  )
}
