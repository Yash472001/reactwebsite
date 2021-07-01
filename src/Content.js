import React from "react";
import { NavLink } from "react-router-dom";

function Content(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.fline}
                    <strong className="brand-name">{props.sline} </strong>
                  </h1>
                  <h2 className="my-3">{props.tline}</h2>
                  <div className="mt-3">
                    <NavLink to={"/" + props.link} className="btn-get-started">
                      {props.b_content}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.image}
                    className="img-fluid animated"
                    alt="blockchain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
