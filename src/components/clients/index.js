import React, { useState } from "react";
import "./index.scss";
import clientsdata from "./data/clientData";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import { BiEnvelope, BiPhone } from "react-icons/bi";
// import { Modal } from "bootstrap";
import Modal from "react-bootstrap/Modal";

const Clients = () => {
  const handlePayment = () => {};
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});

  const handleDownload = () => {};

  return (
    <Context.Consumer>
      {({ openSideBar, LightModeOn }) => {
        return (
          <div
            className={`content client ${LightModeOn ? "light" : ""} ${
              openSideBar ? "" : "open"
            }`}
          >
            <div className="col-12">
              <div className="container-fluid pt-4 px-4">
                <div
                  className={`${
                    LightModeOn ? "bg-white" : "bg-secondary"
                  } rounded h-100 p-4`}
                >
                  <h6 className="mb-4">Clients Table</h6>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr
                          className={`${
                            LightModeOn ? "text-dark" : "text-white"
                          } ms-3`}
                        >
                          <th scope="col">Name</th>
                          <th scope="col">Agent</th>
                          <th scope="col">Status</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Date</th>
                          <th scope="col" style={{ textAlign: "center" }}>
                            Action
                          </th>
                          <th scope="col" style={{ textAlign: "center" }}>
                            View Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {clientsdata.map((val, key) => {
                          return (
                            <tr
                              key={key}
                              className={`${LightModeOn ? "text-dark" : ""}`}
                            >
                              <td>{val.name}</td>
                              <td>{val.agent}</td>
                              <td>{val.status}</td>
                              <td>{val.amount}</td>
                              <td>{val.date}</td>
                              <td>
                                <button
                                  onClick={handlePayment}
                                  type="button"
                                  className="btn-pay"
                                >
                                  Pay
                                </button>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  className="btn-pay"
                                  onClick={() => {
                                    setCurrentUser(val);
                                  }}
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="container-fluid pt-4 px-4">
                <div
                  className={`${
                    LightModeOn ? "bg-white" : "bg-secondary"
                  } rounded h-100 p-4`}
                >
                  <h6 className="mb-4">Clients Table Less Than ₹20,000</h6>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr
                          className={`${
                            LightModeOn ? "text-dark" : "text-white"
                          } ms-3`}
                        >
                          <th scope="col">Name</th>
                          <th scope="col">Status</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Date</th>
                          <th scope="col" style={{ textAlign: "center" }}>
                            View Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {clientsdata.map((val, key) => {
                          return (
                            <tr
                              key={key}
                              className={`${LightModeOn ? "text-dark" : ""}`}
                            >
                              <td>{val.name}</td>
                              <td>{val.status}</td>
                              <td>{val.amount}</td>
                              <td>{val.date}</td>
                              <td>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  className="btn-pay"
                                  onClick={() => {
                                    setCurrentUser(val);
                                  }}
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Modal  */}
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div
                      class={`modal-header ${
                        LightModeOn ? "bg-darkgrey" : "bg-dark"
                      } rounded h-100 p-4 bg-gradient`}
                    >
                      <h5 class="modal-title" id="exampleModalLabel">
                        Welcome to Client Dashboard
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="container pt-4 px-4">
                        <div class="row rounded align-items-center justify-content-between mx-0 user-dashboard">
                          <div className="col-12 mb-3">
                            <div
                              class={`${
                                LightModeOn
                                  ? "bg-white text-dark"
                                  : "bg-secondary"
                              } rounded h-100 p-4`}
                            >
                              <h4 class="mb-4">Testimonial</h4>
                              <div class="owl-carousel testimonial-carousel">
                                <div class="testimonial-item text-center">
                                  <img
                                    class="img-fluid rounded-circle mx-auto mb-4"
                                    src="https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-600w-562077406.jpg"
                                    style={{ width: "100px", height: "100px" }}
                                  />
                                  <h5 class="mb-1">{currentUser.name}</h5>
                                  <p>{currentUser.profession}</p>
                                  <p class="mb-0">
                                    <div className="email-phoneNumber">
                                      <p>
                                        <BiEnvelope size={20} color="#7188BE" />{" "}
                                        {currentUser.email}
                                      </p>
                                      <p>
                                        <BiPhone size={20} color="#7188BE" />{" "}
                                        +91 {currentUser.phone}
                                      </p>
                                    </div>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-xl-6 mb-3">
                            <div
                              class={`${
                                LightModeOn
                                  ? "bg-white text-dark"
                                  : "bg-secondary"
                              } rounded h-100 p-4`}
                            >
                              <h5 class="mb-4">Personal Details</h5>
                              <hr />
                              <table class="table">
                                <tbody>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Account No</td>
                                    <td>{currentUser.account}</td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>IFSC Code</td>
                                    <td>{currentUser.ifsc}</td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Pan</td>
                                    <td>{currentUser.pan}</td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Aadhaar</td>
                                    <td>{currentUser.aadhaar}</td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>D.O.B</td>
                                    <td>{currentUser.dob}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="col-sm-12 col-xl-6 mb-3">
                            <div
                              class={`${
                                LightModeOn
                                  ? "bg-white text-dark"
                                  : "bg-secondary"
                              } rounded h-100 p-4`}
                            >
                              <h5 class="mb-4">Loan Details</h5>
                              <hr />
                              <table class="table">
                                <tbody>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Agent Name</td>
                                    <td>{currentUser.agent}</td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Purpose</td>
                                    <td>{currentUser.loanfor}</td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Status</td>
                                    <td>{currentUser.status}</td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Amount</td>
                                    <td>{currentUser.amount}</td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Applied On</td>
                                    <td>{currentUser.date}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-sm-12 col-xl-6 mb-3">
                            <div
                              class={`${
                                LightModeOn
                                  ? "bg-white text-dark"
                                  : "bg-secondary"
                              } rounded h-100 p-4`}
                            >
                              <h5 class="mb-4">Download Client's Documents</h5>
                              <hr />
                              <table class="table">
                                <tbody>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Address Proof:</td>
                                    <td className="">
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Pan Card:</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Aadhaar Card:</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Salary Slip:</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                  <tr
                                    className={`${
                                      LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Bank Statement:</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="col-sm-12 col-xl-6 mb-3"
                            style={{ height: "343px" }}
                          >
                            <div
                              class={`${
                                !LightModeOn
                                  ? "bg-white text-dark"
                                  : "bg-secondary"
                              } rounded h-100 p-4`}
                            >
                              <h5 class="mb-4">Download Client's Documents</h5>
                              <hr />
                              <table class="table">
                                <tbody>
                                  <tr
                                    className={`${
                                      !LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Residentail Proof 1:</td>
                                    <td className="">
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                  <tr
                                    className={`${
                                      !LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Residentail Proof 1:</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                  <tr
                                    className={`${
                                      !LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Working Proof 1:</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                  <tr
                                    className={`${
                                      !LightModeOn ? "text-dark" : ""
                                    }`}
                                  >
                                    <td>Working Proof 2:</td>
                                    <td>
                                      <button
                                        type="button"
                                        onClick={handleDownload}
                                        className="btn-pay"
                                      >
                                        Download
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Clients;
