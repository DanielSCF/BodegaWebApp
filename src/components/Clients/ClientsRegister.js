import React from 'react'

export default function ClientsRegister() {
  return (
    <>
      <form>
        <input type="text" placeholder="Nombres"/>
        <input type="text" placeholder="Apellidos"/>
        <input type="number" placeholder="DNI"/>
        <input type="number" placeholder="Teléfono"/>
        <input type="text" placeholder="Dirección"/>

        <button>Registrar</button>

      </form>
    </>
  )
}
