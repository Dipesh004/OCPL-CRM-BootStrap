import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { Context } from "../../App";

function SideBar({ sideBarStatus }) {
  return (
    <Context.Consumer>
      {({ LightModeOn }) => {
        return (
          <div
            className={`sidebar pe-4 pb-3  ${LightModeOn ? "light" : ""} ${
              sideBarStatus ? "" : "open"
            }`}
          >
            <nav className="navbar  navbar-dark">
              <NavLink to="/" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary">
                  <i className="fa fa-user-edit me-2"></i>OCPL Finance
                </h3>
              </NavLink>
              <div className="d-flex align-items-center ms-4 mb-4">
                <div className="position-relative">
                  <img
                    className="rounded-circle"
                    src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div className={`${LightModeOn ? "text-dark" : ""} ms-3`}>
                  <h6 className="mb-0">Manish Soni</h6>
                  <span>Admin</span>
                </div>
              </div>
              <div className="navbar-nav w-100">
                <NavLink to="/" className="nav-item nav-link">
                  <i className="fa fa-tachometer-alt me-2"></i>
                  <span>Dashboard</span>
                </NavLink>
                <NavLink to="/clients" className="nav-item nav-link">
                  <i className="fa fa-th me-2"></i>Clients
                </NavLink>
                <NavLink to="./transaction" className="nav-item nav-link">
                  <i className="fa fa-keyboard me-2"></i>Transaction
                </NavLink>

                {/* <div className="nav-item dropdown">
            <NavLink
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fa fa-laptop me-2"></i>Elements
            </NavLink>
            <div className="dropdown-menu bg-transparent border-0">
              <NavLink to="button.html" className="dropdown-item">
                Buttons
              </NavLink>
              <NavLink to="typography.html" className="dropdown-item">
                Typography
              </NavLink>
              <NavLink to="element.html" className="dropdown-item">
                Other Elements
              </NavLink>
            </div>
          </div> */}
              </div>
            </nav>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default SideBar;
