import React from "react";

export default function DeteleModal(props) { 
  return (
    <div className="modal-container">
      <h2 className="modal-title">
        ¿Está seguro de que desea eliminar este elemento?
      </h2>
      <p className="modal-element-name">{props.name}</p>
      <button className="modal-confirm">Eliminar</button>
      <button className="modal-cancel">Cancelar</button>
    </div>
  );
}
