import React, { useState } from "react";
import "./index.scss";
import SideBar from "../sidebar";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";

function NavBar() {
  return (
    <Context.Consumer>
      {({ openSideBar, handleSideBar, LightModeOn, handleLightMode }) => {
        return (
          <div>
            <SideBar sideBarStatus={openSideBar} />
            <div
              className={`content ${LightModeOn ? "light" : ""} ${
                openSideBar ? "" : "open"
              }`}
            >
              <div className={`navbar-content ${LightModeOn ? "light" : ""}`}>
                <nav
                  className={`navbar navbar-expand  navbar-dark sticky-top px-4 py-0`}
                >
                  <Link to="/" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0">
                      <i className="fa fa-user-edit"></i>
                    </h2>
                  </Link>
                  <button
                    className="sidebar-toggler-btn flex-shrink-0"
                    onClick={handleSideBar}
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                  <form className="d-none d-md-flex ms-4">
                    <input
                      className={`form-control ${
                        LightModeOn ? "" : "bg-dark"
                      } border-0"
                        type="search`}
                      placeholder="Search"
                    />
                  </form>
                  <div className="navbar-nav align-items-center ms-auto">
                    <div className="toggle-btn">
                      {LightModeOn ? (
                        <CgDarkMode color="dark-grey" size={20} />
                      ) : (
                        <BsFillBrightnessLowFill color="dark-grey" size={25} />
                      )}

                      <input
                        type="checkbox"
                        checked={!LightModeOn}
                        onChange={handleLightMode}
                        id="ToggleDarkMode"
                      />
                      <label htmlFor="ToggleDarkMode"></label>
                      {/* <p className={`${LightModeOn ? "" : "text-grey"}`}>Theme</p> */}
                    </div>
                    <div className="nav-item dropdown">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <i className="fa fa-envelope me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">Message</span>
                      </Link>
                      <div
                        className={`dropdown-menu dropdown-menu-end ${
                          LightModeOn ? "bg-white" : "bg-secondary"
                        } border-0 rounded-0 rounded-bottom m-0`}
                      >
                        <Link
                          to=""
                          className={`dropdown-item ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          <div className="d-flex align-items-center">
                            <div className="ms-2">
                              <h6 className="fw-normal mb-0">
                                Jhon send you a message
                              </h6>
                              <small>15 minutes ago</small>
                            </div>
                          </div>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link
                          to=""
                          className={`dropdown-item ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          <div className="d-flex align-items-center">
                            <div className="ms-2">
                              <h6 className="fw-normal mb-0">
                                Jhon send you a message
                              </h6>
                              <small>15 minutes ago</small>
                            </div>
                          </div>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link
                          to=""
                          className={`dropdown-item ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          <div className="d-flex align-items-center">
                            <div className="ms-2">
                              <h6 className="fw-normal mb-0">
                                Jhon send you a message
                              </h6>
                              <small>15 minutes ago</small>
                            </div>
                          </div>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link
                          to=""
                          className={`dropdown-item text-center ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          See all message
                        </Link>
                      </div>
                    </div>
                    <div className="nav-item dropdown">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <i className="fa fa-bell me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">
                          Notification
                        </span>
                      </Link>
                      <div
                        className={`dropdown-menu dropdown-menu-end ${
                          LightModeOn ? "bg-white" : "bg-secondary"
                        } border-0 rounded-0 rounded-bottom m-0`}
                      >
                        <Link
                          to=""
                          className={`dropdown-item ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          <h6 className="fw-normal mb-0">Profile updated</h6>
                          <small>15 minutes ago</small>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link
                          to=""
                          className={`dropdown-item ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          <h6 className="fw-normal mb-0">New user added</h6>
                          <small>15 minutes ago</small>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link
                          to=""
                          className={`dropdown-item ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          <h6 className="fw-normal mb-0">Password changed</h6>
                          <small>15 minutes ago</small>
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link
                          to=""
                          className={`dropdown-item text-center ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          See all notifications
                        </Link>
                      </div>
                    </div>
                    <div className="nav-item dropdown">
                      <Link
                        to=""
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <img
                          className="rounded-circle me-lg-2"
                          src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
                          alt=""
                          style={{ width: "40px", height: "40px" }}
                        />
                        <span className="d-none d-lg-inline-flex">
                          Manish Soni
                        </span>
                      </Link>
                      <div
                        className={`dropdown-menu dropdown-menu-end ${
                          LightModeOn ? "bg-white" : "bg-secondary"
                        } border-0 rounded-0 rounded-bottom m-0`}
                      >
                        <Link
                          to=""
                          className={`dropdown-item ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          My Profile
                        </Link>
                        {/* <Link to='' className={`dropdown-item ${LightModeOn ? "text-dark" : ""}`}>Settings</Link> */}
                        <Link
                          to=""
                          className={`dropdown-item ${
                            LightModeOn ? "text-dark" : ""
                          }`}
                        >
                          Log Out
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default NavBar;
