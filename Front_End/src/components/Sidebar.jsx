import React from "react";
import logo from "../assets/icons/logo.svg";
import SidebarComponent from "./SidebarComponent";
import { menu } from "./Utils";
import { AccountCircle } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

function SidebarComp(props) {
  const userName = localStorage.getItem("userName");
  return (
    <div className="vh-100 sidebar py-2">
      <div className="m-2 pb-1 ps-1" id="logo">
        <img src={logo} alt="icon" />
        <span className="brand-name fs-5 fw-bold mx-2">RED PRODUCT</span>
      </div>
      <h6 className="mx-3">Principal</h6>
      <div className="linkSidebar">
        {menu.map((elem, index) => (
          <SidebarComponent
            {...elem}
            key={index}
          />
        ))}
      </div>
      <button
        style={{ textDecoration: "none", backgroundColor: "transparent", color: "#fff" }}
        className="py-3 ps-3 my-2 items d-flex align-items-center gap-2 border-0"
        tabIndex="0"
        id="search-icon"
        onClick={props.toggleInputSearch}
      >
        <span className="iconSidebar" >
          <SearchIcon />
        </span>
      </button>
      <div
        style={{ height: "50%" }}
        className="d-flex justify-content-center containerOnline"
      >
        <div
          className="d-flex align-items-center contentOnline pt-5"
          style={{ width: "100%", height: "20%", marginTop: "90%" }}
        >
          <div className="ps-2 accountCircle">
            <AccountCircle style={{ fontSize: "3rem" }} />
          </div>

          <div className="mx-3 nameOnline">
            <p
              style={{ fontWeight: "800", fontSize: "11px" }}
              className="p-0 m-0"
            >
              {userName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComp;
