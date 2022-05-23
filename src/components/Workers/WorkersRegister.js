import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function WorkersRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    dni: "",
    telefono: "",
    direccion: "",
    cargo: "",
  });

  function saveData() {
    axios
      .post("http://localhost:8070/trabajador", {
        ...formData,
      })
      .then(({ data }) => console.log(data))
      .catch(({ error }) => console.log(error));

    handleClick();
  }

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const navigateTable = useNavigate();

  function handleClick() {
    navigateTable("/trabajadores");
  }

  return (
    <div className="form">
      <h1 className="title">Registrar trabajador</h1>

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
            placeholder="Nombres"
            onChange={handleChange}
            name="nombre"
            value={formData.nombre}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apellidos"
            onChange={handleChange}
            name="apellidos"
            value={formData.apellidos}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="DNI"
            onChange={handleChange}
            name="dni"
            value={formData.dni}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="Teléfono"
            onChange={handleChange}
            name="telefono"
            value={formData.telefono}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            type="text"
            placeholder="Dirección"
            onChange={handleChange}
            name="direccion"
            value={formData.direccion}
          ></textarea>
        </div>

        <select
          className="form-select"
          aria-label="Default select example"
          value={formData.cargo}
          onChange={handleChange}
          name="cargo"
        >
          <option value="" disabled>Seleccionar cargo</option>
          <option value="Administrador">Administrador</option>
          <option value="Cajero">Cajero</option>
          <option value="Almacenero">Almacenero</option>
        </select>

        <div className="button-container">
          <button className="btn btn-success new" onClick={saveData}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
