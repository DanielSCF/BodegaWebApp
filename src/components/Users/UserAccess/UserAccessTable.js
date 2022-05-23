import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserAccess() {
  const [tiposacceso, setTipoAcceso] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/tipoAcceso")
      .then(({ data }) => setTipoAcceso(data))
      .catch(({ error }) => console.log(error));
  }, []);

  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/usuarios");
  }

  return (
    <>
      <h1 className="title">Tipo de acceso de usuario</h1>

      <div className="button-container">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-dark new"
        >
          Volver a página de usuarios
        </button>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tiposacceso.map((tipoacceso) => {
            return (
              <tr key={tipoacceso.tipoAccesoID}>
                <td>{tipoacceso.tipoAccesoID}</td>
                <td>{tipoacceso.nombre}</td>
                <td>{tipoacceso.descripcion}</td>
                <td>{tipoacceso.estado}</td>
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
