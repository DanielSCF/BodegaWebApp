import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BrandsRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    estado: "ACTIVO"
  });

  function saveData() {
    axios
      .post("http://localhost:8070/marca", {
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

  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/productos/marcas");
  }

  return (
    <div className="form small-form">
      <h1 className="small-title">Registrar marca</h1>

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
          <button className="btn btn-success new" onClick={saveData}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
