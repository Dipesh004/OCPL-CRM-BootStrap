import React from "react";
import agentData from "./data/data";
import { Context } from "../../App";

const Agent = () => {
  return (
    <Context.Consumer>
      {({ openSideBar }) => {
        return (
          <div className={`content ${openSideBar ? "" : "open"}`}>
            <div className="container-fluid pt-4 px-4">
              <div class="bg-secondary rounded h-100 p-4">
                <h6 class="mb-4">New Loan Request</h6>
                <div className="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
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
                          <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.address}</td>
                            <td>{val.phone}</td>
                            <td>{val.pan}</td>
                            <td>{val.aadhaar}</td>
                            <td>{val.action}</td>
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
