import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientsRegister() {
  const [formData, setFormData] = useState({
    clienteid: "",
    dni: "",
    nombre: "",
    apellidos: "",
    direccion: "",
    telefono: "",
  });

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
    navigateTable("/clientes");
  }

  return (
    <div className="form">
      <h1 className="title">Registrar cliente</h1>

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
        <div class="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombres"
            onChange={handleChange}
            name="nombre"
            value={formData.nombre}
          />
        </div>

        <div class="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apellidos"
            onChange={handleChange}
            name="apellidos"
            value={formData.apellidos}
          />
        </div>

        <div class="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="DNI"
            onChange={handleChange}
            name="dni"
            value={formData.dni}
          />
        </div>

        <div class="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="Teléfono"
            onChange={handleChange}
            name="telefono"
            value={formData.telefono}
          />
        </div>

        <div class="mb-3">
          <textarea
            className="form-control"
            type="text"
            placeholder="Dirección"
            onChange={handleChange}
            name="direccion"
            value={formData.direccion}
          ></textarea>
        </div>

        <div className="button-container">
          <button className="btn btn-success new">Registrar</button>
        </div>
      </form>
    </div>
  );
}
