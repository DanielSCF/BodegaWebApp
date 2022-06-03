import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductsRegister() {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    preciocompra: "",
    precioventa: "",
    stock: "",
    imagen: "",
    estado: "ACTIVO",
    categoria: { categoriaID: "" },
    marca: { marcaID: "" },
    lote: { loteID: "" },
  });

  const [marcas, setMarcas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [lotes, setLotes] = useState([]);

  console.log(formData);
  console.log(marcas);

  function saveData() {
    axios
      .post("http://localhost:8070/productos", {
        ...formData,
      })
      .then(({ data }) => console.log(data))
      .catch(({ error }) => console.log(error));

    handleClick();
  }

  const GetBrandsData = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/marca")
        .then(({ data }) => setMarcas(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };
  GetBrandsData();

  const GetCategoriesData = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/categoria")
        .then(({ data }) => setCategorias(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };
  GetCategoriesData();

  const GetBatchesData = () => {
    useEffect(() => {
      axios
        .get("http://localhost:8070/lote")
        .then(({ data }) => setLotes(data))
        .catch(({ error }) => console.log(error));
    }, []);
  };
  GetBatchesData();

  function formatValue(name, value) {
    if (name === "categoria") {
      return { categoriaID: value };
    } else if (name === "lote") {
      return { loteID: value };
    } //else if (name === "marca") {
      //return { marcaID: value }} 
      else {
      return value;
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    let newValue = formatValue(name, value);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: newValue,
      };
    });
  }

  const navigateTable = useNavigate();

  function handleClick() {
    navigateTable("/productos");
  }

  return (
    <div className="form">
      <h1 className="title">Registrar producto</h1>

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
            placeholder="Nombre"
            onChange={handleChange}
            name="nombre"
            value={formData.nombre}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Descripción"
            onChange={handleChange}
            name="descripcion"
            value={formData.descripcion}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            step="any"
            placeholder="Precio de compra"
            onChange={handleChange}
            name="preciocompra"
            value={formData.preciocompra}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            step="any"
            placeholder="Precio de venta"
            onChange={handleChange}
            name="precioventa"
            value={formData.precioventa}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="Stock"
            onChange={handleChange}
            name="stock"
            value={formData.stock}
          />
        </div>

        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            placeholder="Imagen"
            onChange={handleChange}
            name="imagen"
            value={formData.imagen}
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={formData.marca}
            onChange={handleChange}
            name="marca"
          >
            <option value="" >Marcas</option>
            {marcas.map((marca) => {
              return (
                marca.estado === "ACTIVO" && (
                  <option key={marca.marcaID} value={JSON.stringify(marca)}>
                    {marca.nombre}
                  </option>
                )
              );
            })}
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={formData.categoria}
            onChange={handleChange}
            name="categoria"
          >
            <option value="" >Categorías</option>
            {categorias.map((categoria) => {
              return (
                categoria.estado === "ACTIVO" && (
                  <option
                    key={categoria.categoriaID}
                    value={categoria.categoriaID}
                  >
                    {categoria.nombre}
                  </option>
                )
              );
            })}
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            value={formData.lote}
            onChange={handleChange}
            name="lote"
          >
            <option value="">Lote - Fecha de ingreso y vencimiento</option>
            {lotes.map((lote) => {
              return (
                <option key={lote.loteID} value={lote.loteID}>
                  {lote.fingreso} - {lote.fvencimiento}
                </option>
              );
            })}
          </select>
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
