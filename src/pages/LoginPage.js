import React from 'react'
import "../styles/Login.css";

export default function LoginPage() {
  return (
    <div className="login-body">
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Log in</h2>

        <form className="login-container">
          <p>
            <input type="text" placeholder="Usuario" />
          </p>
          <p>
            <input type="password" placeholder="Clave" />
          </p>
          <p>
            <input type="button" value="Log in" />
          </p>
        </form>
      </div>
    </div>
  );
}
