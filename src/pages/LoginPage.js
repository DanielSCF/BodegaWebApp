import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import { auto } from "@popperjs/core";

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

  const captcha = useRef(null);
  const [captchaValido, cambiarCaptchaValido] = useState(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("El usuario no es un robot");
      cambiarCaptchaValido(true);
    }
  };

  const ValidarUsuario = () => {
    axios
      .post("http://localhost:8070/usuarios/login", {
        ...loginForm,
      })
      .then((response) => SetValid(response.data))
      .catch(({ error }) => console.log(error));

    if (valid.data === "Bienvenido") {
      if (captcha.current.getValue()) {
        console.log("El usuario no es un robot");
        cambiarCaptchaValido(true);
        handleClick();
      } else {
        console.log("Por favor acepta el captcha");
        captcha.reset();
        cambiarCaptchaValido(false);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    SetLoginForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

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
          <p style={{ display: "flex", justifyContent: "center" }}>
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LchID4gAAAAAG6xrMe7an_Z5FixM1GvwdVeJ5vG"
              onChange={onChange}
            />
          </p>

          {valid.data === "Login Fallido" && (
            <p id="login-error" className="error-message">
              Usuario o contraseña no válidos
            </p>
          )}

          {captchaValido === false && (
            <div className="error-message">Por favor acepta el captcha</div>
          )}

          <p>
            <input type="button" value="Log in" onClick={ValidarUsuario} />
          </p>
        </form>
      </div>
    </div>
  );
}
