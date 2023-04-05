import React, { useState } from "react";
import agentData from "./data/data";
import { Context } from "../../App";
import { Link } from "react-router-dom";

const Agent = () => {
  
  return (
    <Context.Consumer>
      {({ openSideBar, LightModeOn }) => {
        return (
          <div
            className={`content content ${LightModeOn ? "light" : ""} ${
              openSideBar ? "" : "open"
            }`}
          >
            <div className="container-fluid pt-4 px-4 min-vh-100">
              <div
                className={`${
                  LightModeOn ? "bg-white" : "bg-secondary"
                } rounded h-100 p-4`}
              >
                <h6 className="mb-4">New Loan Request</h6>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr
                        className={`${
                          LightModeOn ? "text-dark" : "text-white"
                        } ms-3`}
                      >
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Pan</th>
                        <th scope="col">Aadhaar</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agentData.map((val, key) => {
                        return (
                          <tr key={key} className={`${LightModeOn ? "text-dark" : ""}`}>
                            <td>{val.name}</td>
                            <td>{val.address}</td>
                            <td>{val.phone}</td>
                            <td>{val.pan}</td>
                            <td>{val.aadhaar}</td>
                            <td>
                              <Link
                                to={{
                                  pathname: `/agentForm/${val.name}`,
                                }}
                              >
                                <div className=''>View</div>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Agent;
