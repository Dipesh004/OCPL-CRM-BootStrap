import React from "react";
import transactionData from "./data/data";
import "./index.scss";
import { Context } from "../../App";

const Transaction = () => {
  return (
    <Context.Consumer>
      {({ openSideBar }) => {
        return (
          <div className={`content ${openSideBar ? "" : "open"}`}>
            <div className="container-fluid pt-4 px-4">
              <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Recent Transaction</h6>
                </div>
                {transactionData.map((curElem, index) => {
                  return (
                    <div className="card mb-4 bg-dark">
                      <div className="card-body ">
                        <div className="row" key={index}>
                          <div className="col text-start ">
                            <p className="d-block fs-6 text-white">
                              Name:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp;{curElem.name}
                              </span>
                            </p>
                            <p className="d-block fs-6 text-white">
                              Address:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.address}
                              </span>
                            </p>
                            <p className="d-block fs-6 text-white">
                              Email:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.email}
                              </span>
                            </p>
                            <p className="d-block fs-6 text-white">
                              Transaction Number:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp;{curElem.transaction}
                              </span>
                            </p>
                          </div>
                          <div className="col text-start">
                            <p className="d-block fs-6 text-white">
                              Phone:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.phone}
                              </span>
                            </p>
                            <p className="d-block fs-6 text-white">
                              Amount:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.amount}
                              </span>
                            </p>
                            <p className="d-block fs-6 text-white">
                              Date:
                              <span className="fs-6 fw-bold">
                                {" "}
                                &nbsp; &nbsp; {curElem.date}
                              </span>
                            </p>
                            <p className="d-block fs-6 text-white">
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
