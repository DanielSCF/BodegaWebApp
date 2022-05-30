import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SaleTableList from './SaleTableList'
import SearchProduct from './SearchProduct'

export default function SaleRegisterList() {
  const [list, setList] = useState([])

  const [listWorkers, setListWorkers] = useState([])
  const [listClients, setListClients] = useState([])
  const [workerId, setWorkerId] = useState(0)
  const [clientId, setClientId] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  const navigateRegister = useNavigate()

  const dataSale = {
    fecha : '',
    total : totalCost,
    estado : 'despachado',
    modalidad : 'presencial',
    trabajador : { trabajadorID : workerId},
    cliente : { clienteID : clientId}
  }

  useEffect(() => {
    axios.get("http://localhost:8070/trabajador/adminsvendedores")
    .then(({ data }) => setListWorkers(data))
    .catch(({ error }) => console.log(error))
  },[])

  useEffect(() => {
    axios.get("http://localhost:8070/cliente")
    .then(({ data }) => setListClients(data))
    .catch(({ error }) => console.log(error))
  },[])

  const fecha = new Date()
  let hoy = fecha.toLocaleDateString()
  dataSale.fecha = hoy


  function getIdWorker(inputWords){
    setWorkerId(parseInt(inputWords.substr(-1)))
    dataSale.trabajador.trabajadorID = workerId
    console.log(dataSale)
  }

  function getIdClient(inputWords){
    setClientId(parseInt(inputWords.substr(-1)))
    dataSale.cliente.clienteID = clientId
    console.log(dataSale)
  }

  console.log(dataSale)

  useEffect(() => {
    let total = 0
    list.map(dataProduct => {return total += dataProduct.subtotal})
    setTotalCost(total)
  }, [list])

  function addProduct(p){

    console.log("AQIOOOOO111")

    console.log(p)

    //listProducts.push(p)
    setList([...list, p])

    //console.log(listProducts)

    console.log(list)

    console.log("AQIOOOOO222222")
  }


  function removeProduct(id){
    setList(list.filter(product => product.productoid !== id))
  }

  console.log(list)

  console.log(dataSale)

  function handleClick(){
    axios.post("http://localhost:8070/pedido", {...dataSale})
    .then(({ data }) => {
      console.log(data)
      console.log("-> " + data.pedidoID)
      //setOrderId(data.pedidoID)
      //console.log(orderId)
      console.log(data.pedidoID)
    
      const product = {
        precio_venta: 0,
        cantidad: 0,
        subtotal: 0,
        producto: {
          productoid: 0
        },
        pedido: {
          pedidoID: data.pedidoID
        },
        detallePedidoID : {
          pedido: {
            pedidoID: data.pedidoID
          },
          producto: {
            productoid: 0
          }
        }
      }
  
      list.map(productSale => {
        product.precio_venta = productSale.precioventa
        product.cantidad = productSale.cantidad
        product.subtotal = productSale.subtotal
        product.producto.productoid = productSale.productoid
        product.detallePedidoID.producto.productoid = productSale.productoid
  
        console.log(product)
  
        axios.post("http://localhost:8070/detallepedido", {...product})
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
      <h1>Registrar Pedido del Cliente</h1>
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
              <label className='form-label'>Cliente:</label><br />
              <input list="clients" className='form-control' placeholder="Elija un proveedor" onChange={(e) => {getIdClient(e.target.value)}} required/>
        
              <datalist id="clients">
                {listClients.map(client => <option key={client.clienteID} value={`${client.nombre} ${client.apellidos} - ${client.clienteID}`} />)}
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
        <SaleTableList lista2={list} removeProduct = {removeProduct}/>
        <SearchProduct productSelected1={addProduct} />
      </div>
    </div>
  )
}
