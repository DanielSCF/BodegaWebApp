import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./styles.css";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import BatchesPage from "./pages/BatchesPage";
import BrandsPage from "./pages/BrandsPage";
import SuppliersPage from "./pages/SuppliersPage";
import UsersPage from "./pages/UsersPage";
import UsersAccessPage from "./pages/UsersAccessPage";
import ClientOrdersPage from "./pages/ClientOrdersPage";
import CompanyOrdersPage from "./pages/CompanyOrdersPage";
import AppLayout from "./pages/AppLayout";

import ClientsTable from "./components/Clients/ClientsTable";
import ClientsRegister from "./components/Clients/ClientsRegister";
import ClientsEdit from "./components/Clients/ClientsEdit";

import WorkersPage from "./pages/WorkersPage";
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
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route path="/lotes" element={<BatchesPage />} />
          <Route path="/marcas" element={<BrandsPage />} />
          <Route path="/proveedores" element={<SuppliersPage />} />
          <Route path="/usuarios" element={<UsersPage />} />
          
          <Route path="/clientes">
            <Route index element={<ClientsTable/>}/>
            <Route path="nuevo" element={<ClientsRegister/>}/>
            <Route path="editar/:id" element={<ClientsEdit />}/>
          </Route>
          
          <Route path="/trabajadores" element={<WorkersPage />}>
            <Route index element={<WorkersTable />}/>
            <Route path="nuevo" element={<WorkersRegister />}/>
            <Route path="editar/:id" element={<WorkersEdit />}/>
          </Route>

          <Route path="/tipoacceso" element={<UsersAccessPage />} />
          <Route path="/pedidos" element={<ClientOrdersPage />} />
          <Route path="/ordenes" element={<CompanyOrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
