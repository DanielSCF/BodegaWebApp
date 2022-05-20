import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navbar/Sidebar";

export default function AppLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
