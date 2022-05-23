import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Batches() {
  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/lote")
      .then(({ data }) => setLotes(data))
      .catch(({ error }) => console.log(error));
  }, []);

  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/productos");
  }

  return (
    <>
      <h1 className="title">Lotes</h1>

      <div className="button-container">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-dark new"
        >
          Volver a página de productos
        </button>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Fecha de ingreso</th>
            <th>Fecha de vencimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lotes.map((lote) => {
            return (
              <tr key={lote.loteID}>
                <td>{lote.loteID}</td>
                <td>{lote.fingreso}</td>
                <td>{lote.fvencimiento}</td>
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
  )
}
