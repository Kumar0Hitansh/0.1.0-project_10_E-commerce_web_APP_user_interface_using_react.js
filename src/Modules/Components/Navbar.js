import React from 'react';

import { Link } from 'react-router-dom';

import "./Component.css";

import logo from '../img/logo.png'

let Navbar=()=>{
  return (
    // <!-- nav bar -->
    <nav className=" navbar bg-dark text-dark navbar navbar-expand-lg bg-body-tertiary" style={{"background":"black" , "coloe":"black"}}>
      <div id="navdiv1" className="container-fluid" >
        

        <Link to="/" style={{"textDecoration": "none" ,"fontSize":25+"px" , "fontWeight":"bold" , "color":"black",}} > Men's
          <img src={logo} className="nav_logo" width={50+"px"} alt="logo" />
          Cart</Link>

        <button
          className="navbar-toggler btn-secondary "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" navbar-toggler-icon  text-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </span>
        </button>

        <div className="collapse navbar-collapse ms-5 ps-5 " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              {/* <a
                className="nav-link active text-light "
                aria-current="page"
                href="index.html"
              >
                Home
              </a> */}

              <Link to ="/" className="nav-link active text-light "
                aria-current="page" > Home</Link>
            </li>
            <li className="nav-item">
              {/* <a
                className="nav-link active text-light "
                aria-current="page"
                href="#footer111"
              >
                Contact
              </a> */}
              <Link to ="/Contact" className="nav-link active text-light "
                aria-current="page"> Contact</Link>
            </li>
            <li className="nav-item">
              {/* <a
                className="nav-link active text-light "
                aria-current="page"
                href="#footer111"
              >
                About
              </a> */}
              <Link to ="/About" className="nav-link active text-light "
                aria-current="page"> About</Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light  "
                href="#products"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul className="dropdown-menu">
                <li>
                 
                  {/* <a className="dropdown-item" href="product1.html">
                    Top Wear
                  // </a> */}

<Link className="dropdown-item" to ="/Product1"> Top Wear</Link>

                </li>
                <li>
                  {/* <a className="dropdown-item" href="product2.html">
                    Bottom Wear
                  </a> */}
<Link className="dropdown-item" to ="/Product2">  Bottom Wear</Link>
                </li>
                <li>
                  {/* <a className="dropdown-item" href="product3.html">
                    Foot Wear
                  </a> */}
<Link className="dropdown-item" to ="/Product3">Foot Wear</Link>
                </li>
                <li>
                  {/* <a className="dropdown-item" href="product4.html">
                    Inner Wear
                  </a> */}
<Link className="dropdown-item" to ="/Product4"> Inner Wear</Link>
                </li>
                <li>
                  {/* <a className="dropdown-item" href="product5.html">
                    Accessories
                  </a> */}
<Link className="dropdown-item" to ="/Product5">  Accessories</Link>
                </li>
               
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  {/* <a className="dropdown-item" href="#">
                    Product More
                  </a> */}
<Link className="dropdown-item" to ="/">  Product More</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              {/* <a
                className="nav-link dropdown-toggle text-light "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sign-up/in
              </a> */}
<Link className="nav-link dropdown-toggle text-light " to ="#"  role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"> Sign-up/in</Link>             
              <ul className="dropdown-menu">
                <li>
                  {/* <a
                    className="dropdown-item"
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Sign-in
                  </a> */}
<Link className="nav-link  text-light " to ="/Sign-in" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"> Sign-in</Link>  
                </li>
                <li>
                  {/* <a
                    className="dropdown-item"
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Sign-up
                  </a> */}
<Link className="nav-link  text-light "  to ="/Sign-Up" data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"> Sign-up</Link>  
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 bg-secondary shadow-none border-secondary"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-secondary shadow-none"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* <!-- navover --> */}

      {/* <!-- signup modal --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                Sign in
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* <!-- -- --> */}
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    User Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>

            {/* <!-- -- --> */}
          </div>
        </div>
      </div>

      {/* <!-- signup modal over --> */}

      {/* <!-- sign in modal --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sign up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <!-- -- --> */}
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-4">
                  <label for="validationServer01" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control is-valid"
                    id="validationServer01"
                    value="hitansh"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label for="validationServer02" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control is-valid"
                    id="validationServer02"
                    value="kumar"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label for="validationServerUsername" className="form-label">
                    hitansh1611189
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend3">
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      id="validationServerUsername"
                      aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                      required
                    />
                    <div
                      id="validationServerUsernameFeedback"
                      className="invalid-feedback"
                    >
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label for="validationServer03" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    required
                  />
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3">
                  <label for="validationServer04" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select is-invalid"
                    id="validationServer04"
                    aria-describedby="validationServer04Feedback"
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>...</option>
                  </select>
                  <div
                    id="validationServer04Feedback"
                    className="invalid-feedback"
                  >
                    Please select a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    required
                  />
                  <div
                    id="validationServer05Feedback"
                    className="invalid-feedback"
                  >
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input is-invalid"
                      type="checkbox"
                      value=""
                      id="invalidCheck3"
                      aria-describedby="invalidCheck3Feedback"
                      required
                    />
                    <label className="form-check-label" for="invalidCheck3">
                      Agree to terms and conditions
                    </label>
                    <div
                      id="invalidCheck3Feedback"
                      className="invalid-feedback"
                    >
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Sign up
                  </button>
                </div>
              </form>
            </div>

            {/* <!-- -- --> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

// ====================================================================================================

export default Navbar;
