import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UsersRegister() {
  const [formData, setFormData] = useState({
    nickname: "",
    clave: "",
    estado: "ACTIVO",
    tipoAcceso: { tipoAccesoID: "" },
    cliente: null,
    trabajador: null,
  });

  console.log(formData);

  const [tiposAcceso, setTiposAcceso] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [trabajador, setTrabajador] = useState([]);

  function saveData() {
    axios
      .post("http://localhost:8070/usuarios", {
        ...formData,
      })
      .then(({ data }) => console.log(data))
      .catch(({ error }) => console.log(error));

    handleClick();
  }

  const GetTipoAccesoData = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/tipoAcceso")
        .then(({ data }) => setTiposAcceso(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };
  GetTipoAccesoData();

  const GetClienteData = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/cliente")
        .then(({ data }) => setClientes(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };
  GetClienteData();

  const GetTrabajadorData = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/trabajador")
        .then(({ data }) => setTrabajador(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };
  GetTrabajadorData();

  function formatValue(name, value) {
    if (name === "cliente") {
      return { clienteID: value };
    } else if (name === "trabajador") {
      return { trabajadorID: value };
    } else if (name === "tipoAcceso") {
      return { tipoAccesoID: value };
    } else {
      return value;
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    let newValue = formatValue(name, value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: newValue,
      };
    });
  }
  const navigateTable = useNavigate();

  function handleClick() {
    navigateTable("/usuarios");
  }

  return (
    <div className="form">
      <h1 className="title">Registrar Usuario</h1>

      <div className="button-container">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-dark new"
        >
          Volver al listado
        </button>
      </div>

      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nickname"
            onChange={handleChange}
            name="nickname"
            value={formData.nickname}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Clave"
            onChange={handleChange}
            name="clave"
            value={formData.clave}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={formData.tipoAcceso}
            onChange={handleChange}
            name="tipoAcceso"
          >
            <option value="">Tipo de acceso</option>
            {tiposAcceso.map((tipoAcceso) => {
              return (
                tipoAcceso.estado === "ACTIVO" && (
                  <option
                    key={tipoAcceso.tipoAccesoID}
                    value={tipoAcceso.tipoAccesoID}
                  >
                    {tipoAcceso.nombre}
                  </option>
                )
              );
            })}
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={formData.cliente}
            onChange={handleChange}
            name="cliente"
          >
            <option value="">Clientes</option>
            {clientes.map((cliente) => {
              return (
                <option key={cliente.clienteID} value={cliente.clienteID}>
                  {cliente.nombre} {cliente.apellidos}
                </option>
              );
            })}
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={formData.trabajador}
            onChange={handleChange}
            name="trabajador"
          >
            <option value="">Trabajador</option>
            {trabajador.map((trabajador) => {
              return (
                <option
                  key={trabajador.trabajadorID}
                  value={trabajador.trabajadorID}
                >
                  {trabajador.nombre} {trabajador.apellidos}
                </option>
              );
            })}
          </select>
        </div>

        <div className="button-container">
          <button className="btn btn-success new" onClick={saveData}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
