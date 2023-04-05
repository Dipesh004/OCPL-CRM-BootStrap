import React from "react";
import data from "./data/data";
import newLoanRequest from "./data/dataTable";
import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { Context } from "../../App";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const chartRef = useRef(null);
  const salesRef = useRef(null);
  let myChart = null;
  let myChart2 = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (myChart !== null) {
      myChart.destroy();
    }
    if (myChart2 !== null) {
      myChart2.destroy();
    }

    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [
          {
            label: "Delhi",
            data: [15, 30, 55, 65, 60, 80, 95],
            backgroundColor: "rgba(13,110,253,.7)",
          },
          {
            label: "Mumbai",
            data: [8, 35, 40, 60, 70, 55, 75],
            backgroundColor: "rgba(13,110,253,.5)",
          },
          {
            label: "Banglore",
            data: [12, 25, 45, 55, 65, 70, 60],
            backgroundColor: "rgba(13,110,253,.3)",
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    const ctx2 = salesRef.current.getContext("2d");
    myChart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [
          {
            label: "Salse",
            data: [15, 30, 55, 45, 70, 65, 85],
            backgroundColor: "rgba(13,110,253,.7)",
            fill: true,
          },
          {
            label: "Revenue",
            data: [99, 135, 170, 130, 190, 180, 270],
            backgroundColor: "rgba(13,110,253,.5)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, []);

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
              <div className="row g-4">
                {data.map((curElem) => {
                  return (
                    <div className="col-sm-6 col-xl-3" key={curElem.id}>
                      <div
                        className={`${
                          LightModeOn ? "bg-white" : "bg-secondary"
                        } rounded d-flex align-items-center justify-content-between p-4`}
                      >
                        {curElem.icon}
                        <div
                          className={`${LightModeOn ? "text-dark" : " "} ms-3`}
                        >
                          <p className="mb-2">{curElem.title}</p>
                          <h6 className="mb-0">{curElem.amount}</h6>
                          {/* <p style={{ margin: "0", color: "#39FF14" }}>
                            {curElem.changes}
                          </p> */}
                          {curElem.changes}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                  <div className="col-sm-12 col-xl-6">
                    <div
                      className={`${
                        LightModeOn ? "bg-white" : "bg-secondary"
                      } text-center rounded p-4`}
                    >
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Sales</h6>
                        <Link to="">Show All</Link>
                      </div>
                      <canvas ref={chartRef} id="worldwide-sales"></canvas>
                    </div>
                  </div>
                  <div className="col-sm-12 col-xl-6">
                    <div
                      className={`${
                        LightModeOn ? "bg-white" : "bg-secondary"
                      } bg-secondary text-center rounded p-4`}
                    >
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Salse & Revenue</h6>
                        <Link to="">Show All</Link>
                      </div>
                      <canvas ref={salesRef} id="salse-revenue"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid pt-4 px-4">
                <div
                  className={`${
                    LightModeOn ? "bg-white" : "bg-secondary"
                  } bg-secondary text-center rounded p-4`}
                >
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">New Loan Request</h6>
                    <Link to="">Show All</Link>
                  </div>
                  <div className="table-responsive">
                    <table className="table text-start align-middle table-bordered table-hover mb-0">
                      <thead>
                        <tr
                          className={`${LightModeOn ? "text-dark" : "text-white"} ms-3`}
                        >
                          <th scope="col">Name</th>
                          <th scope="col">Gender</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Assigned</th>
                          <th scope="col">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newLoanRequest.map((val, key) => {
                          return (
                            <tr key={key} className={`${LightModeOn ? "text-dark" : ""}`}>
                              <td>{val.name}</td>
                              <td>{val.gender}</td>
                              <td>{val.amount}</td>
                              <td>{val.assigned}</td>
                              <td>{val.date}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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

export default DashBoard;
