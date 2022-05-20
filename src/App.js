import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import ClientsPage from "./pages/ClientsPage";
import WorkersPage from "./pages/WorkersPage";
import UsersAccessPage from "./pages/UsersAccessPage";
import ClientOrdersPage from "./pages/ClientOrdersPage";
import CompanyOrdersPage from "./pages/CompanyOrdersPage";
import AppLayout from "./pages/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<AppLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/categorias" element={<CategoriesPage />} />
          <Route path="/lotes" element={<BatchesPage />} />
          <Route path="/marcas" element={<BrandsPage />} />
          <Route path="/proveedores" element={<SuppliersPage />} />
          <Route path="/usuarios" element={<UsersPage />} />
          <Route path="/clientes" element={<ClientsPage />} />
          <Route path="/trabajadores" element={<WorkersPage />} />
          <Route path="/tipoacceso" element={<UsersAccessPage />} />
          <Route path="/pedidos" element={<ClientOrdersPage />} />
          <Route path="/ordenes" element={<CompanyOrdersPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
