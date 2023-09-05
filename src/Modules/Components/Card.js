import React from 'react';

import { Link } from 'react-router-dom';

import "./Component.css";

let Card = (props) => {
  return (
    
    <div class="card">
      <img
        src={props.img}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body text-center">
        <h5 class="card-title text-center">{props.name}</h5>
        <p class="card-text text-center">{props.description}</p>
        <h4>
          <b>{props.price}₹</b>
        </h4>
        {/* <a href="#" class="btn btn-primary  btn-secondary">  Buy  </a> */}
          <Link className="btn btn-primary  btn-secondary"to="/Productshow">  Buy</Link>



{/* ================================================================================================================== */}

        
      
      </div>
    </div>

    
  );
};

export default Card;
