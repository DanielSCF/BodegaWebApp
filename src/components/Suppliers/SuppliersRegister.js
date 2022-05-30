import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SuppliersRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    razon_social: "",
    correo: "",
    telefono: "",
    nombre_contacto: "",
    departamento: "",
    distrito: "",
    direccion: "",
  });

  function saveData() {
    axios
      .post("http://localhost:8070/proveedor", {
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
    navigateTable("/proveedores");
  }

  return (
    <div className="form">
      <h1 className="title">Registrar proveedor</h1>

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
            placeholder="Razón social"
            onChange={handleChange}
            name="razon_social"
            value={formData.razon_social}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Correo"
            onChange={handleChange}
            name="correo"
            value={formData.correo}
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
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del contacto"
            onChange={handleChange}
            name="nombre_contacto"
            value={formData.nombre_contacto}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Departamento"
            onChange={handleChange}
            name="departamento"
            value={formData.departamento}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Distrito"
            onChange={handleChange}
            name="distrito"
            value={formData.distrito}
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
          />
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
