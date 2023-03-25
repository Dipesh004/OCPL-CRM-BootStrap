import React from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Context.Consumer>
      {({ openSideBar }) => {
        return (
          <div className={`content ${openSideBar ? "" : "open"}`}>
            <div className="container-fluid pt-4 px-4">
              <div className="bg-secondary rounded-top p-4">
                <div className="row">
                  <div className="col-12 col-sm-6 text-center text-sm-start">
                    &copy;
                    <span className="text-footer">
                      <Link to="/">OPCL FINANCE</Link>
                    </span>
                    , All Right Reserved.
                  </div>
                  <div className="col-12 col-sm-6 text-center text-sm-end">
                    Made with ❤ By <a href="https://ocpl.tech/">OPCL</a>
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

export default Footer;
