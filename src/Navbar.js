import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/logo.jpg";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="container_heading">
            <NavLink className="navbar-brand heading mt-auto" to="/">
              <img
                src={logo}
                alt="img"
                width="35"
                height="35"
                class="d-inline-block align-text-top"
              />
              <span className="headinginside">BlockEase</span>
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="d-flex " id="navbarNav">
            <div className="navlinks">
              <ul className="navbar-nav mr-auto mb-2 m-lg-0">
                <Navcomp name="Home" link="home" />
                <Navcomp name="Service" link="service" />
                <Navcomp name="About" link="about" />
                <Navcomp name="Contactus" link="contactus" />
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

const Navcomp = (props) => {
  return (
    <>
      <li className="nav-item items">
        <NavLink
          activeClassName="menu_active"
          className="nav-link"
          to={"/" + props.link}
        >
          {props.name}
        </NavLink>
      </li>
    </>
  );
};

export default Navbar;
