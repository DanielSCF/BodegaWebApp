import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BatchesRegister() {
  const [formData, setFormData] = useState({
    fingreso: "",
    fvencimiento: "",
  });

  console.log(formData);

  function saveData() {
    axios
      .post("http://localhost:8070/lote", {
        ...formData,
      })
      .then(({ data }) => console.log(data))
      .catch(({ error }) => console.log(error));
    handleClick();
  }

  function handleChange(event) {
    const [name, value] = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/productos/lotes");
  }

  return (
    <div className="form small-form">
      <h1 className="small-title">Registrar lote</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="fingreso">Fecha de ingreso: </label>
          <input
            id="fingreso"
            type="date"
            className="form-control"
            onChange={handleChange}
            name="fingreso"
            value={formData.fingreso}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fvencimiento">Fecha de vencimiento</label>
          <input
            id="fvencimiento"
            type="date"
            className="form-control"
            onChange={handleChange}
            name="fvencimiento"
            value={formData.fvencimiento}
          />
        </div>

        <div class="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={formData.fvencimiento}
            id="flexCheckChecked"
          />
          <label className="form-check-label" for="flexCheckChecked">
            ¿Tiene fecha de vencimiento?
          </label>
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
