
import React from 'react';

import './Page.css';

import Navbar from '../Components/Navbar';

import Card from '../Components/Card'

import Footer from '../Components/Footer';


let Product5=()=> {


   
  // ======================================================Product card detail

let product_card=[
  
    {   id:0,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F30%2F01%2F300114ed2bd001d282c8d24d69dcb94a8f4ba92c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"sunglass",
        productdescription:"Description Description Description",
        productprice:1599

    },
        {   id:1,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F84%2F80%2F8480bdb04e0593583616bb585ad634501bcc9171.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_sunglasses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"sunglass",
        productdescription:"Description Description Description",
        productprice:599

    },
    {   id:2,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd6%2F99%2Fd699a906104b14414c3dad010e4d05496f3652ea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"sunglass",
        productdescription:"Description Description Description",
        productprice:1199

    },
    {   id:3,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F61%2F71%2F617167faa16a21086e1518c1a44565be969f3bb3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_sunglasses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"sunglass",
        productdescription:"Description Description Description",
        productprice:799

    }
 

];
// ======================================================

return (
    <>
    <Navbar/>
    <h1>Product5</h1>
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




export default Product5;