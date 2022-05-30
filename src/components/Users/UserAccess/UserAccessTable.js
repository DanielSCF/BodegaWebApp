import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserAccess() {
  const [tiposaccesos, setTipoAcceso] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    estado: "ACTIVO",
  });
  const [action, SetAction] = useState({
    accion: "REGISTRAR"
  })

  const TipoAccesoData = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/tipoAcceso")
        .then(({ data }) => setTipoAcceso(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };

  TipoAccesoData();

  const RegistrarData = () => {
    axios
      .post("http://localhost:8070/tipoAcceso", {
        ...formData,
      })
      .then(({ data }) => console.log(data))
      .catch(({ error }) => console.log(error));
    TipoAccesoData()
  };

  function handleChange(event) {
    const {name, value} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }


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

      <div className="form small-form">
        <h1 className="small-title">Registrar</h1>

        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              onChange={handleChange}
              name="nombre"
              value={formData.nombre}
            />
          </div>

          <div className="button-container">
            <button className="btn btn-success new" onClick={RegistrarData}>
              Registrar
            </button>
          </div>
        </form>
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
          {tiposaccesos.map((tipoacceso) => {
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
  );
}
