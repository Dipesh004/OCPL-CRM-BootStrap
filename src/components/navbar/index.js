import React, {  useState } from 'react'
import './index.scss'
import SideBar from '../sidebar';
import { Context } from '../../App';

function NavBar() {
  return (
      <Context.Consumer>
        {
          ({openSideBar, handleSideBar}) => { return (
            <div>
              <SideBar sideBarStatus={openSideBar} />
              <div className={`content ${openSideBar ? "" : "open"}`}>
                <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                  <a
                    href="index.html"
                    className="navbar-brand d-flex d-lg-none me-4"
                  >
                    <h2 className="text-primary mb-0">
                      <i className="fa fa-user-edit"></i>
                    </h2>
                  </a>
                  <button
                    className="sidebar-toggler-btn flex-shrink-0"
                    onClick={handleSideBar}
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                  <form className="d-none d-md-flex ms-4">
                    <input
                      className="form-control bg-dark border-0"
                      type="search"
                      placeholder="Search"
                    />
                  </form>
                  <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <i className="fa fa-envelope me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">Message</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">
                          <div className="d-flex align-items-center">
                            <div className="ms-2">
                              <h6 className="fw-normal mb-0">
                                Jhon send you a message
                              </h6>
                              <small>15 minutes ago</small>
                            </div>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                          <div className="d-flex align-items-center">
                            <div className="ms-2">
                              <h6 className="fw-normal mb-0">
                                Jhon send you a message
                              </h6>
                              <small>15 minutes ago</small>
                            </div>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                          <div className="d-flex align-items-center">
                            <div className="ms-2">
                              <h6 className="fw-normal mb-0">
                                Jhon send you a message
                              </h6>
                              <small>15 minutes ago</small>
                            </div>
                          </div>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item text-center">
                          See all message
                        </a>
                      </div>
                    </div>
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <i className="fa fa-bell me-lg-2"></i>
                        <span className="d-none d-lg-inline-flex">Notificatin</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">
                          <h6 className="fw-normal mb-0">Profile updated</h6>
                          <small>15 minutes ago</small>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                          <h6 className="fw-normal mb-0">New user added</h6>
                          <small>15 minutes ago</small>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                          <h6 className="fw-normal mb-0">Password changed</h6>
                          <small>15 minutes ago</small>
                        </a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item text-center">
                          See all notifications
                        </a>
                      </div>
                    </div>
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <img
                          className="rounded-circle me-lg-2"
                          src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
                          alt=""
                          style={{ width: "40px", height: "40px" }}
                        />
                        <span className="d-none d-lg-inline-flex">John Doe</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                        <a href="#" className="dropdown-item">
                          My Profile
                        </a>
                        {/* <a href="#" className="dropdown-item">Settings</a> */}
                        <a href="#" className="dropdown-item">
                          Log Out
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          );
        }}
      </Context.Consumer>
  );
}

export default NavBar