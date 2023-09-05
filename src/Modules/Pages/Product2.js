
import React from 'react';

import './Page.css';

import Navbar from '../Components/Navbar';

import Card from '../Components/Card'

import Footer from '../Components/Footer';


let Product2=()=> {


   
  // ======================================================Product card detail

let product_card=[
  
    {   id:0,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fab%2F13%2Fab1312839a55403a36aff1b36bec75186ab5a6cd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:1999

    },
        {   id:1,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5b%2Fe0%2F5be03d1b7633ff1e67c3c49c1d235cb227fbe3d4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:799

    },
    {   id:2,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F59%2F7e%2F597e4088890cfefd29c542e347351876bd02b95f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:1599

    },
    {   id:3,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2f%2F3f%2F2f3f0f16d54b56099c729137c884170ac79caff1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D", 
        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:999

    },
    {   id:4,

        productimg:"https://lp2.hm.com/hmgoepprod?set=source[/7f/b7/7fb72c24ae931a7f5b0f69798967c1ce2beab370.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:1299

    },
    {   id:5,

        productimg:"https://lp2.hm.com/hmgoepprod?set=source[/c0/7a/c07af7b3c56366e5c8fe3c6fb30784005e999bab.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",        
        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:1699

    },
    {   id:6,

        productimg:"https://lp2.hm.com/hmgoepprod?set=source[/9a/b9/9ab95c35f262a9f5aee8d4fc9b09c4f3671a27a8.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:1999

    },
    {   id:7,

        productimg:"https://lp2.hm.com/hmgoepprod?set=source[/ee/01/ee01e00a48bcea428635898829c3c5e0dfe1cd37.jpg],origin[dam],category[men_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:2799

    }
];
// ======================================================

return (
    <>
    <Navbar/>
    <h1>Product2</h1>
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



export default Product2;