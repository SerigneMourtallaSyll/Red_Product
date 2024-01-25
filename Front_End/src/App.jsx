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
  const [inputSearchShow, setInputSearchShow] = useState(false);
  const toggleInputSearch = () => {
    setInputSearchShow(!inputSearchShow);
  };

  return (
    <div>
      <Toaster />
      <Template
        sidebar={<SidebarComp toggleInputSearch={toggleInputSearch} />}
        navbar={<NavBar show={inputSearchShow}  />}
      >
        <Outlet />
      </Template>
    </div>
  );
}

export default App
