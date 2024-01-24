import React, { useState } from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Template from "./Layout/Template";
import SidebarComp from "./components/Sidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <div>
      <Toaster />
      <Template
        sidebar={<SidebarComp />}
        navbar={<NavBar />}
      >
        <Outlet />
      </Template>
    </div>
  );
}

export default App
