import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductsTable() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8070/productos")
      .then(({ data }) => setProductos(data))
      .catch(({ error }) => console.log(error));
  }, []);

  const navigateRegister = useNavigate();

  function handleClick(route) {
    navigateRegister(`/productos/${route}`);
  }

  return (
    <>
      <h1 className="title">Productos</h1>

      <div className="button-container">
        <button
          onClick={() => handleClick("nuevo")}
          type="button"
          className="btn btn-dark new"
        >
          Registrar proveedor
        </button>

        <button
          onClick={() => handleClick("categorias")}
          type="button"
          className="btn btn-primary"
        >
          Categorías
        </button>

        <button
          onClick={() => handleClick("marcas")}
          type="button"
          className="btn btn-danger"
        >
          Marcas
        </button>

        <button
          onClick={() => handleClick("lotes")}
          type="button"
          className="btn btn-info"
        >
          Lotes
        </button>
      </div>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio de compra</th>
            <th>Precio de venta</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Lote - Fecha de ingreso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            return (
              <tr key={producto.productoid}>
                <td>{producto.productoid}</td>
                <td><img className="product-image" alt="Producto" src={producto.imagen}/></td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.preciocompra}</td>
                <td>{producto.precioventa}</td>
                <td>{producto.stock}</td>
                <td>{producto.estado}</td>
                <td>{producto.marca.nombre}</td>
                <td>{producto.categoria.nombre}</td>
                <td>{producto.lote.fingreso}</td>
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
