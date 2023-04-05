import React from "react";
import transactionData from "./data/data";
import "./index.scss";
import { Context } from "../../App";

const Transaction = () => {
  return (
    <Context.Consumer>
      {({ openSideBar, LightModeOn }) => {
        return (
          <div
            className={`content ${LightModeOn ? "light" : ""} ${
              openSideBar ? "" : "open"
            }`}
          >
            <div className="container-fluid pt-4 px-4">
              <div className={`${
                          LightModeOn ? "bg-white" : "bg-secondary"} text-center rounded p-4`}>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Recent Transaction</h6>
                </div>
                {transactionData.map((curElem, index) => {
                  return (
                    <div className={`card mb-4 ${
                          LightModeOn ? "bg-darkgrey" : "bg-dark"}`}>
                      <div className="card-body ">
                        <div className="row" key={index}>
                          <div className="col text-start ">
                            <p className={`d-block fs-6 ${
                          LightModeOn ? "text-black" : "text-white"}`}>
                              Name:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp;{curElem.name}
                              </span>
                            </p>
                            <p className={`d-block fs-6 ${
                          LightModeOn ? "text-black" : "text-white"}`}>
                              Address:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.address}
                              </span>
                            </p>
                            <p className={`d-block fs-6 ${
                          LightModeOn ? "text-black" : "text-white"}`}>
                              Email:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.email}
                              </span>
                            </p>
                            <p className={`d-block fs-6 ${
                          LightModeOn ? "text-black" : "text-white"}`}>
                              Transaction Number:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp;{curElem.transaction}
                              </span>
                            </p>
                          </div>
                          <div className="col text-start">
                            <p className={`d-block fs-6 ${
                          LightModeOn ? "text-black" : "text-white"}`}>
                              Phone:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.phone}
                              </span>
                            </p>
                            <p className={`d-block fs-6 ${
                          LightModeOn ? "text-black" : "text-white"}`}>
                              Amount:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.amount}
                              </span>
                            </p>
                            <p className={`d-block fs-6 ${
                          LightModeOn ? "text-black" : "text-white"}`}>
                              Date:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.date}
                              </span>
                            </p>
                            <p className={`d-block fs-6 ${
                          LightModeOn ? "text-black" : "text-white"}`}>
                              Time:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.time}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Transaction;
