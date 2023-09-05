
import React from 'react';

import './Page.css';

import Navbar from '../Components/Navbar';

// import Card from '../Components/Card'

import Productshowcomp from '../Components/Productshowcomp';


import Footer from '../Components/Footer';

let Productshow=()=> {

return (
    <>
    <Navbar/>
    <h1>Product display page</h1>
    
{/* ======================================================================== */}



<Productshowcomp></Productshowcomp>





{/* ======================================================================== */}

    <Footer/>
    </>
  );
}

export default Productshow;