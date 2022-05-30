import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navbar/Sidebar";
import '../styles/Pages.css'

export default function AppLayout(props) {

  const isValid = () =>{
    
  }

  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
