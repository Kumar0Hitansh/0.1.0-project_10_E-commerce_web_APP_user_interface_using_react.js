import React from "react";

import { Link } from "react-router-dom";

import "./Component.css";

let Productshowcomp = (props) => {
  return (


    <>
    <div className="productcomp">
    <div class="productshowcomp  ">
        
               <img src={props.img}
            //    'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F58%2F18%2F58189f3e9619b9688f1215517cad4596f2bbd846.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'
        
                class="card-img-top" alt="..." />

         <div class="card-body text-center">
                <h5 class="card-title text-center">{props.name}</h5>
                <p class="card-text text-center">{props.description} </p>
                <h4><b>{props.price}₹</b></h4>
                {/* <a href="#" class="btn btn-primary  btn-secondary">  Buy  </a> */}
                <Link className="btn btn-primary  btn-secondary" to="/Productshow">Buy</Link>
         </div>

         
    </div>




<div class=" productshowcomp2">
{/* <img
  src={props.img}
  class="card-img-top"
  alt="..."
/> */}
<div class="card-body text-center">
  {/* <h5 class="card-title text-center">{props.name}</h5> */}
  <p class="card-text text-center">{props.description}</p>
  <h4>
    {/* <b>{props.price}₹</b> */}
  </h4>
  {/* <a href="#" class="btn btn-primary  btn-secondary">  Buy  </a> */}
    {/* <Link className="btn btn-primary  btn-secondary"to="/Productshow">  Buy</Link> */}
  

</div>
</div>
</div>

</>
  );
};

export default Productshowcomp;
