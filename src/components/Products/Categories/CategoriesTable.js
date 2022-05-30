import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CategoriesRegister from "./CategoriesRegister";

export default function Categories() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/categoria")
      .then(({ data }) => setCategorias(data))
      .catch(({ error }) => console.log(error));
  }, []);

  const navigateRegister = useNavigate();

  function handleClick() {
    navigateRegister("/productos");
  }

  return (
    <>
      <h1 className="title">Categorías</h1>

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

        <CategoriesRegister/>

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
              {categorias.map((categoria) => {
                return (
                  <tr key={categoria.categoriaID}>
                    <td>{categoria.categoriaID}</td>
                    <td>{categoria.nombre}</td>
                    <td>{categoria.estado}</td>
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
