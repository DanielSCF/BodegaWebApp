import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

export default function LoginPage() {
  const [loginForm, SetLoginForm] = useState({
    nickname: "",
    clave: "",
  });
  const [valid, SetValid] = useState({
    data: "",
    error: "",
    status: "",
    usuario: "",
  });

  const ValidarUsuario = () => {
    axios
      .post("http://localhost:8070/usuarios/login", {
        ...loginForm,
      })
      .then((response) => SetValid(response.data))
      .catch(({ error }) => console.log(error));

    if(valid.data === "Bienvenido"){
      handleClick()
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;
    SetLoginForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const navigateTo = useNavigate();

  function handleClick() {
    navigateTo("/home");
  }

  return (
    <div className="login-body">
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Log in</h2>

        <form className="login-container">
          <p>
            <input
              type="text"
              placeholder="Usuario"
              name="nickname"
              value={loginForm.nickname}
              onChange={handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="Clave"
              name="clave"
              value={loginForm.clave}
              onChange={handleChange}
            />
          </p>

          {valid.data === "Login Fallido" && (
            <p id="login-error" className="error-message">
              {" "}
              El usuario o contraseña con incorrectos
            </p>
          )}
          <p>
            <input type="button" value="Log in" onClick={ValidarUsuario} />
          </p>
        </form>
      </div>
    </div>
  );
}
