import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BrandsEdit(props) {
  const [formData, setFormData] = useState({
    marcaID: "",
    nombre: "",
    estado: "",
    error: "",
    tipo: "",
  });

  const [formType, setFormType] = useState({
    tipo: props.tipo,
  });

  function saveData() {
    axios
      .put("http://localhost:8070/marca", {
        ...formData,
      })
      .then(({ data }) => console.log(data))
      .catch(({ error }) => console.log(error));
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
      <h1 className="small-title">Editar marca</h1>

      <h3 className="id-form">{props.categoriaid}</h3>

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

        <select
          className="form-select"
          aria-label="Default select example"
          value={formData.estado}
          onChange={handleChange}
          name="estado"
        >
          <option value="" disabled>
            Seleccionar estado
          </option>
          <option value="ACTIVO">Activo</option>
          <option value="INACTIVO">Inactivo</option>
        </select>

        <div className="button-container">
          <button
            className="btn btn-success new"
            onClick={() => {
              saveData();
              setFormType({tipo:"REGISTRAR"});
              handleClick();
            }}
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
