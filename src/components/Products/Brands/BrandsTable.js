import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BrandsRegister from "./BrandsRegister";
import BrandsEdit from "./BrandsEdit";

export default function Brands() {
  const [marcas, setMarcas] = useState([]);

  console.log(marcas);

  useEffect(() => {
    axios
      .get("http://localhost:8070/marca")
      .then(({ data }) => setMarcas(data))
      .catch(({ error }) => console.log(error));
  }, []);

  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/productos");
  }

  return (
    <>
      <h1 className="title">Marcas</h1>

      <div className="button-container">
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-dark new"
        >
          Volver a página de productos
        </button>
      </div>

      <div className="form-table">
        <BrandsRegister />

        <div className="small-table">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {marcas.map((marca) => {
                return (
                  <tr key={marca.marcaID}>
                    <td>{marca.marcaID}</td>
                    <td>{marca.nombre}</td>
                    <td>{marca.estado}</td>
                    <td>
                      <button className="btn btn-warning">Editar</button>
                      <button className="btn btn-danger">Eliminar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
