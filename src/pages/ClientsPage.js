import React from "react";
import { Outlet } from "react-router-dom";

export default function ClientsPage() {
  return (
    <>
      <h1>Clientes</h1>
      <Outlet />
    </>
  );
}
