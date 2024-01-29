import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MobileSearch from "./MobileSearch";

function NavUser(props) {
  const [notificationCount, setNotificationCount] = useState(3);

  const location = useLocation();
  const getRouteText = () => {
    const routeTexts = {
      "/admin/dashboard": "Dashboard",
      "/admin/hotels": "Liste des hotels",
    };
    return routeTexts[location.pathname] || "";
  };

  const deconnexion = () => {
    localStorage.removeItem("userName");
    window.location.replace("/connexion");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light border-bottom py-1">
      <div className="container-fluid content">
        <div className="navbar-brand">
          <span className="brand-name mx-2 text-dark fw-bold">
            {getRouteText()}
          </span>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <form className="d-flex">
            <div className="input-group border rounded-pill">
              <button className="btn" type="submit">
                <i className="bi bi-search"></i>
              </button>
              <input
                className="form-control border-0 bg-transparent"
                type="search"
                placeholder="Recherche"
                aria-label="Search"
              />
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center position-relative px-3 notif">
              <span className="notification-badge">{notificationCount}</span>
              <NotificationsNoneIcon />
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle d-flex justify-content-center"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <AccountCircleIcon className="fs-1" />
              </a>
            </li>
            <li className="nav-item d-flex align-items-center disconnect">
              <LogoutIcon onClick={deconnexion} />
            </li>
          </ul>
        </div>
      </div>
      {props.show && <MobileSearch />}
    </nav>
  );
}

export default NavUser;
