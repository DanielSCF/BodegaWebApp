import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./styles.css";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

import ClientsTable from "./components/Clients/ClientsTable";
import ClientsRegister from "./components/Clients/ClientsRegister";
import ClientsEdit from "./components/Clients/ClientsEdit";

import WorkersTable from "./components/Workers/WorkersTable";
import WorkersRegister from "./components/Workers/WorkersRegister";
import WorkersEdit from "./components/Workers/WorkersEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<AppLayout />}>
          <Route path="/home" element={<HomePage />} />

          <Route path="/productos" />
          <Route path="/categorias" />
          <Route path="/lotes" />
          <Route path="/marcas" />
          
          <Route path="/proveedores" />
          
          <Route path="/usuarios" />
          <Route path="/tipoacceso" />
          
          <Route path="/clientes">
            <Route index element={<ClientsTable/>}/>
            <Route path="nuevo" element={<ClientsRegister/>}/>
            <Route path="editar/:id" element={<ClientsEdit />}/>
          </Route>
          
          <Route path="/trabajadores" >
            <Route index element={<WorkersTable />}/>
            <Route path="nuevo" element={<WorkersRegister />}/>
            <Route path="editar/:id" element={<WorkersEdit />}/>
          </Route>

          <Route path="/pedidos" />
          <Route path="/ordenes" />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
