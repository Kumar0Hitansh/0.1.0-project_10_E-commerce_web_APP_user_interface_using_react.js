
import React from 'react';

import './Page.css';

import Navbar from '../Components/Navbar';

import Slider from '../Components/slider'

import Card from '../Components/Card'



import Footer from '../Components/Footer';




let Home=()=> {









    // ======================================================Product card detail

let product_card=[
    
    {   id:0,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F58%2F18%2F58189f3e9619b9688f1215517cad4596f2bbd846.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"shirt",
        productdescription:"Description Description Description",
        productprice:1999

    },
        {   id:1,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F36%2Fc2%2F36c2ee1c5dfb63c7563fe288dfea9f33a19d43a2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"shirt",
        productdescription:"Description Description Description",
        productprice:799

    },
    {   id:2,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9f%2F39%2F9f39e52054b9cf4dee804a075e76a1d79c6fa75b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"shirt",
        productdescription:"Description Description Description",
        productprice:1599

    },
    {   id:3,

        productimg:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F34%2Ff0%2F34f037fe25cdbed7bcff75c6df0a929efdba802b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_shortsleeved%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", 
        productname:"shirt",
        productdescription:"Description Description Description",
        productprice:999

    },
    {   id:4,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fab%2F13%2Fab1312839a55403a36aff1b36bec75186ab5a6cd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:1899

    },
    {   id:5,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5b%2Fe0%2F5be03d1b7633ff1e67c3c49c1d235cb227fbe3d4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:1799

    },
    {   id:6,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F59%2F7e%2F597e4088890cfefd29c542e347351876bd02b95f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:1999

    },
    {   id:7,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2f%2F3f%2F2f3f0f16d54b56099c729137c884170ac79caff1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"bottom",
        productdescription:"Description Description Description",
        productprice:2799

    },
    {   id:8,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fcf%2F84%2Fcf84671e2f3abe9ba8eba67eefc4c8b754cd577d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_loafers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:3999

    },
    {   id:9,

        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F32%2Faa%2F32aa7943fe51fded78b1cf0bc2158fcdc9118afb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_boots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:4999

    },
    {   id:10,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F90%2F36%2F90360a3f706ae58acf2e246f66cbe8627099e5d9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:2599

    },
    {   id:11,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd7%2F9b%2Fd79b97e25c27bc23905921ceecc785028786bfad.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shoes_sneakers%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"shoe",
        productdescription:"Description Description Description",
        productprice:2199

    },
    {   id:12,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F30%2F01%2F300114ed2bd001d282c8d24d69dcb94a8f4ba92c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"sunglass",
        productdescription:"Description Description Description",
        productprice:1599

    },
    {   id:13,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F84%2F80%2F8480bdb04e0593583616bb585ad634501bcc9171.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_sunglasses%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"sunglass",
        productdescription:"Description Description Description",
        productprice:599

    },
    {   id:14,
        productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd6%2F99%2Fd699a906104b14414c3dad010e4d05496f3652ea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        productname:"sunglass",
        productdescription:"Description Description Description",
        productprice:1199

    },
    {   id:15,
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
    <h1>home page</h1>

    <Slider/>

 


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
   <Card 
   img={product_card[8].productimg}
   name={product_card[8].productname}
   description={product_card[8].productdescription}
   price={product_card[8].productprice}
   />
   <Card 
   img={product_card[9].productimg}
   name={product_card[9].productname}
   description={product_card[9].productdescription}
   price={product_card[9].productprice}
   />
   <Card 
   img={product_card[10].productimg}
   name={product_card[10].productname}
   description={product_card[10].productdescription}
   price={product_card[10].productprice}
   />
   <Card 
   img={product_card[11].productimg}
   name={product_card[11].productname}
   description={product_card[11].productdescription}
   price={product_card[11].productprice}
   />
   <Card 
   img={product_card[12].productimg}
   name={product_card[12].productname}
   description={product_card[12].productdescription}
   price={product_card[12].productprice}
   />
   <Card 
   img={product_card[13].productimg}
   name={product_card[13].productname}
   description={product_card[13].productdescription}
   price={product_card[13].productprice}
   />
   <Card 
   img={product_card[14].productimg}
   name={product_card[14].productname}
   description={product_card[14].productdescription}
   price={product_card[14].productprice}
   />
   <Card 
   img={product_card[15].productimg}
   name={product_card[15].productname}
   description={product_card[15].productdescription}
   price={product_card[15].productprice}
   /></div>
   
    <Footer/>
    </>
  );
}

export default Home;