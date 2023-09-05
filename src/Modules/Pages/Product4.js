
import React from 'react';

import './Page.css';

import Navbar from '../Components/Navbar';

import Card from '../Components/Card'

import Footer from '../Components/Footer';

let Product4=()=> {


   
  // ======================================================Product card detail

let product_card=[
  
    {   id:0,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3d%2F48%2F3d482f661c4852f2d74b03b8ec42a57cc165bfc1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_swimweear%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"title",
        productdescription:"Description Description Description",
        productprice:599

    },
        {   id:1,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F52%2F5d%2F525d9e2cf82680fec89eb688c1631847c32615b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_underwear_trunks%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"title",
        productdescription:"Description Description Description",
        productprice:1299

    },
    {   id:2,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fed%2Fe3%2Fede3823d70998d16a9c305f507f44c3267d4cb07.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_swimweear%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"title",
        productdescription:"Description Description Description",
        productprice:1899

    },
    {   id:3,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F39%2Ff1%2F39f1bb23d1ef10ff6ffd89e6885d0bfa65c070ab.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_swimweear%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"title",
        productdescription:"Description Description Description",
        productprice:1799

    }
 

];
// ======================================================

return (
    <>
    <Navbar/>
    <h1>Product4</h1>
   <div className="card1"> 
   <Card 
   img={product_card[0].productimg}
   name={product_card[0].productname}
   description={product_card[0].productdescription}
   price={product_card[0].productprice}
   />
   <Card
   img={product_card[1].productimg}
   name={product_card[1].productname}
   description={product_card[1].productdescription}
   price={product_card[1].productprice}
   />
   <Card 
   img={product_card[2].productimg}
   name={product_card[2].productname}
   description={product_card[2].productdescription}
   price={product_card[2].productprice}
   />
   <Card 
   img={product_card[3].productimg}
   name={product_card[3].productname}
   description={product_card[3].productdescription}
   price={product_card[3].productprice}
   />
     
   </div>
   
    <Footer/>
    </>



);
}




export default Product4;