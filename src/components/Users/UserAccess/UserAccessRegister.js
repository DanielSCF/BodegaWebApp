import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserAccessRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    estado: "ACTIVO",
  });

  const RegistrarData = () => {
    axios
      .post("http://localhost:8070/tipoAcceso", {
        ...formData,
      })
      .then(({ data }) => console.log(data))
      .catch(({ error }) => console.log(error));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
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

        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            placeholder="Descripcion"
            onChange={handleChange}
            name="descripcion"
            value={formData.descripcion}
          />
        </div>

        <div className="button-container">
          <button className="btn btn-success new" onClick={RegistrarData}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
