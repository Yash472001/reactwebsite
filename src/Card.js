import React from "react";
import {NavLink} from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div class="card">
          <img src={props.imgsrc} width="390px" height="260px" class="card-img-top" alt="image" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text" style={{ color:"black"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/" class="btn btn-primary">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
