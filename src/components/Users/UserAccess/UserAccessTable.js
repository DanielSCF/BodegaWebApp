import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserAccessRegister from "./UserAccessRegister";

export default function UserAccess() {
  const [tiposaccesos, setTipoAcceso] = useState([]);

  const TipoAccesoData = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/tipoAcceso")
        .then(({ data }) => setTipoAcceso(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };

  TipoAccesoData();

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

      <div className="form-table">
        <UserAccessRegister />

        <div className="small-table">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {tiposaccesos.map((tipoacceso) => {
                return (
                  <tr key={tipoacceso.tipoAccesoID}>
                    <td>{tipoacceso.tipoAccesoID}</td>
                    <td>{tipoacceso.nombre}</td>
                    <td>{tipoacceso.descripcion}</td>
                    <td>{tipoacceso.estado}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
