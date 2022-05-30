import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SuppliersTable() {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/proveedor")
      .then(({ data }) => setProveedores(data))
      .catch(({ error }) => console.log(error));
  }, []);

  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/proveedores/nuevo");
  }

  function deleteData() {
    axios
      .delete("http://localhost:8070/proveedor")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <h1 className="title">Proveedores</h1>

      <div className="button-container">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-dark new"
        >
          Registrar proveedor
        </button>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Razón social</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Nombre contacto</th>
            <th>Departamento</th>
            <th>Distrito</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => {
            return (
              <tr key={proveedor.proveedorID}>
                <td>{proveedor.proveedorID}</td>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.razon_social}</td>
                <td>{proveedor.correo}</td>
                <td>{proveedor.telefono}</td>
                <td>{proveedor.nombre_contacto}</td>
                <td>{proveedor.departamento}</td>
                <td>{proveedor.distrito}</td>
                <td>{proveedor.direccion}</td>
                <td>
                  <button className="btn btn-warning">Editar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}
