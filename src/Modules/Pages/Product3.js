
import React from 'react';

import './Page.css';

import Navbar from '../Components/Navbar';

import Card from '../Components/Card'

import Footer from '../Components/Footer';

let Product3=()=> {


   
  // ======================================================Product card detail

let product_card=[
  
    {   id:0,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fcf%2F84%2Fcf84671e2f3abe9ba8eba67eefc4c8b754cd577d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_loafers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:4999

    },
        {   id:1,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F32%2Faa%2F32aa7943fe51fded78b1cf0bc2158fcdc9118afb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_boots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:3999

    },
    {   id:2,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F90%2F36%2F90360a3f706ae58acf2e246f66cbe8627099e5d9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:2599

    },
    {   id:3,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd7%2F9b%2Fd79b97e25c27bc23905921ceecc785028786bfad.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D", 
        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:2199

    },
    {   id:4,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9e%2Fe9%2F9ee95bba5a91ddeb65363e8f8e8e401d6e7c8f55.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:1299

    },
    {   id:5,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F38%2F43%2F3843b0cd0ed07e3c8d890946058254482cfe013d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        
        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:1699

    },
    {   id:6,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F50%2Fc7%2F50c7bf78701fc025ff5367c580e66fbb33ed9df5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"slipper",
        productdescription:"Description Description Description",
        productprice:999

    },
    {   id:7,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fec%2Fa6%2Feca6415b0dfe075423fda93075b750aee437774b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"slipper",
        productdescription:"Description Description Description",
        productprice:799

    }
];
// ======================================================

return (
    <>
    <Navbar/>
    <h1>Product3</h1>
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
   <Card 
   img={product_card[4].productimg}
   name={product_card[4].productname}
   description={product_card[4].productdescription}
   price={product_card[4].productprice}
   />
   <Card 
   img={product_card[5].productimg}
   name={product_card[5].productname}
   description={product_card[5].productdescription}
   price={product_card[5].productprice}
   />
   <Card 
   img={product_card[6].productimg}
   name={product_card[6].productname}
   description={product_card[6].productdescription}
   price={product_card[6].productprice}
   />
   <Card 
   img={product_card[7].productimg}
   name={product_card[7].productname}
   description={product_card[7].productdescription}
   price={product_card[7].productprice}
   />
  
   
   
   
   
   
   
   
   </div>
   
    <Footer/>
    </>



);
}



export default Product3;