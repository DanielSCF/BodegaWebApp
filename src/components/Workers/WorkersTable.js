import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function WorkersTable() {
  const [trabajadores, setTrabajador] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/trabajador")
      .then(({ data }) => setTrabajador(data))
      .catch(({ error }) => console.log(error));
  }, []);

  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/trabajadores/nuevo");
  }

  function deleteData() {
    axios
      .delete("http://localhost:8070/trabajador")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <h1 className="title">Trabajadores</h1>

      <div className="button-container">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-dark new"
        >
          Registrar trabajador
        </button>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>DNI</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {trabajadores.map((trabajador) => {
            return (
              <tr key={trabajador.trabajadorID}>
                <td>{trabajador.trabajadorID}</td>
                <td>{trabajador.nombre}</td>
                <td>{trabajador.apellidos}</td>
                <td>{trabajador.dni}</td>
                <td>{trabajador.telefono}</td>
                <td>{trabajador.direccion}</td>
                <td>{trabajador.cargo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}
