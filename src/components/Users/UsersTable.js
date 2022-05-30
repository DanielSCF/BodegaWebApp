import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UsersTable() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/usuarios")
      .then(({ data }) => setUsuarios(data))
      .catch(({ error }) => console.log(error));
  }, []);

  const navigateRegister = useNavigate();

  function handleClick(route) {
    navigateRegister(`/usuarios/${route}`);
  }

  return (
    <>
      <h1 className="title">Usuarios</h1>

      <div className="button-container">
        <button
          onClick={() => handleClick("nuevo")}
          type="button"
          className="btn btn-dark new"
        >
          Registrar usuario
        </button>

        <button
          onClick={() => handleClick("tipoacceso")}
          type="button"
          className="btn btn-info"
        >
          Tipo de acceso
        </button>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nickname</th>
            <th>Clave</th>
            <th>Estado</th>
            <th>Tipo de acceso</th>
            <th>Cliente</th>
            <th>Trabajador</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            return (
              <tr key={usuario.usuarioID}>
                <td>{usuario.usuarioID}</td>
                <td>{usuario.nickname}</td>
                <td>{usuario.clave}</td>
                <td>{usuario.estado}</td>
                <td>{usuario.tipoAcceso.nombre}</td>
                <td>{usuario.cliente.nombre === null ? "---": `${usuario.cliente.nombre} ${usuario.cliente.apellidos}`}</td>
                <td>{usuario.trabajador === null ? "---": `${usuario.trabajador.nombre} ${usuario.trabajador.apellidos}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
