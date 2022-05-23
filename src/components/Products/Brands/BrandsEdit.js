import React from "react";

export default function BrandsEdit(props) {
  const [formData, setFormData] = useState({
    marcaID: "",
    nombre: "",
    estado: ""
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

        {/* 
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
            */}

        <div className="button-container">
          <button className="btn btn-success new" onClick={saveData}>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}
