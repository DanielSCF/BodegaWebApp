import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./styles/styles.css";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProductsTable from './components/Products/ProductsTable';
import BatchesTable from './components/Products/Batches/BatchesTable';
import BrandsTable from './components/Products/Brands/BrandsTable';
import CategoriesTable from './components/Products/Categories/CategoriesTable';

import UsersTable from './components/Users/UsersTable';
import UserAccessTable from './components/Users/UserAccess/UserAccessTable';

import SuppliersTable from "./components/Suppliers/SuppliersTable";
import SuppliersRegister from "./components/Suppliers/SuppliersRegister";
import SuppliersEdit from "./components/Suppliers/SuppliersEdit";

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

          <Route path="/productos">
            <Route index element={<ProductsTable />}/>

            <Route path="categorias" element={<CategoriesTable />} />
            <Route path="lotes" element={<BatchesTable />} />
            <Route path="marcas" element={<BrandsTable />} />
          </Route>

          <Route path="/proveedores">
            <Route index element={<SuppliersTable />} />
            <Route path="nuevo" element={<SuppliersRegister />} />
            <Route path="editar/:id" element={<SuppliersEdit />} />
          </Route>

          <Route path="/usuarios">
            <Route index element={<UsersTable/>} />

            <Route path="tipoacceso" element={<UserAccessTable />} />
          </Route>

          <Route path="/clientes">
            <Route index element={<ClientsTable />} />
            <Route path="nuevo" element={<ClientsRegister />} />
            <Route path="editar/:id" element={<ClientsEdit />} />
          </Route>

          <Route path="/trabajadores">
            <Route index element={<WorkersTable />} />
            <Route path="nuevo" element={<WorkersRegister />} />
            <Route path="editar/:id" element={<WorkersEdit />} />
          </Route>

          <Route path="/pedidos" />
          <Route path="/ordenes" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
