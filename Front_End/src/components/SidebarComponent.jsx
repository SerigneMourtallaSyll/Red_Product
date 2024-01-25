import React from "react";
import {NavLink, Link } from "react-router-dom";

function SidebarComponent({ title, icon, path, id}) {
  return (
    <NavLink
      style={{ textDecoration: "none" }}
      className="py-2 ps-3 items d-flex align-items-center"
      to={path}
      id={id}
    >
      <span className="iconSidebar">{icon}</span>
      <span className="fs-5 mx-2 textSidebar">{title}</span>
    </NavLink>
  );
}

export default SidebarComponent;
