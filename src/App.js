// import { useState } from 'react';
// import React , {useState}  from 'react'; 

import React from 'react';
import './App.css';

import Home from './Modules/Pages/Home';


import Product1 from './Modules/Pages/Product1';
import Product2 from './Modules/Pages/Product2';
import Product3 from './Modules/Pages/Product3';
import Product4 from './Modules/Pages/Product4';
import Product5 from './Modules/Pages/Product5';

import Productshow from './Modules/Pages/Productshow';

import Contact from './Modules/Pages/Contact';

import About from './Modules/Pages/About';



import {
  //BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';




const App=()=>{
  return (
    <div className="App">
      




<Routes>

  {/* home */}  <Route path="/" element={<Home/>}/>

  {/* Product1 */} <Route path="Product1" element={<Product1/>}/>

  {/* Product2 */} <Route path="Product2" element={<Product2/>}/>

  {/* Product3 */} <Route path="Product3" element={<Product3/>}/>

  {/* Product4 */} <Route path="Product4" element={<Product4/>}/>

  {/* Product5 */} <Route path="Product5" element={<Product5/>}/>


{/* {/* productDisplayPage  */} <Route path="Productshow" element={<Productshow/>} />



  {/* Contact */} <Route path="Contact" element={<Contact/>}/>

  {/* About */}<Route path="About" element={<About/>}/>

  </Routes>

      
      
    </div>
  );
}

export default App;
