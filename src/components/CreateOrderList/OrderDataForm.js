import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function OrderDataForm({data}) {
  const [listWorkers, setListWorkers] = useState([])
  const [listSuppliers, setListSuppliers] = useState([])
  const [workerId, setWorkerId] = useState(0)
  const [supplierId, setSupplierId] = useState(0)

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

  const dataForm = {
    fecha: hoy,
    total : 0,
    estado : 'pendiente',
    proveedor : {
      proveedorID : supplierId
    },
    trabajador : {
      trabajadorID : workerId
    }
  }

  function getIdWorker(inputWords){
    setWorkerId(parseInt(inputWords.substr(-1)))
    console.log(dataForm.trabajador.trabajadorID)
    console.log(dataForm)
  }

  function getIdSupplier(inputWords){
    setSupplierId(parseInt(inputWords.substr(-1)))
    console.log(dataForm.proveedor.proveedorID)
    console.log(dataForm)
  }

  data(dataForm)
  console.log(dataForm)
  console.log(data)

  return (
    <div>
      <h1>Registrar Lista de Orden de Compra</h1>

      <form className='row g-3'>
        <h3>{hoy}</h3>
        <div className='col-md-4'>
          <label className='form-label'>Trabajador a Cargo:</label><br />
          <input list="workers" className='form-control' placeholder="Elija un trabajador" onChange={(e) => {getIdWorker(e.target.value)}}/>

          <datalist id="workers">
            {listWorkers.map(worker => <option value={`${worker.nombre} ${worker.apellidos} - ${worker.trabajadorID}`} />)}
          </datalist>
        </div>

        <div className='col-md-4'>
          <label className='form-label'>Proveedor a Cargo:</label><br />
          <input list="suppliers" className='form-control' placeholder="Elija un proveedor" onChange={(e) => {getIdSupplier(e.target.value)}}/>

          <datalist id="suppliers">
            {listSuppliers.map(supplier => <option value={`${supplier.nombre} - ${supplier.proveedorID}`} />)}
          </datalist>
        </div>
      </form>
    </div>
  )
}
