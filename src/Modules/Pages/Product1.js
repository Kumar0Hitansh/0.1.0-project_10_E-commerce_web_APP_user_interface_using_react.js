
import React from 'react';

import './Page.css';

import Navbar from '../Components/Navbar';

import Card from '../Components/Card'

import Footer from '../Components/Footer';

let Product1=()=> {


   
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
  
          productimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F34%2F4d%2F344df3cd93f483099201242949f28f3952cd59fd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",        productname:"shirt",
          productdescription:"Description Description Description",
          productprice:1299
  
      },
      {   id:5,
  
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/9d/92/9d920dc62de74aed6320d28d1d904b5861f29930.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",        
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:1699
  
      },
      {   id:6,
  
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/32/51/32516b7aca5e7da0ec9460d55acc86f8cdd734d6.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",        productname:"shirt",
          productdescription:"Description Description Description",
          productprice:1999
  
      },
      {   id:7,
  
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/98/07/980771baeb2dfb68e1f48cfd1c040ddbc3f52e36.jpg],origin[dam],category[men_shirts_shortsleeved],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",        productname:"shirt",
          productdescription:"Description Description Description",
          productprice:2799
  
      },
      {   id:8,
  
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/71/94/71946fca533d85a078e29c55de64623b7b068a8f.jpg],origin[dam],category[men_shirts_casual],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",        productname:"shirt",
          productdescription:"Description Description Description",
          productprice:3999
  
      },
      {   id:9,
  
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/5f/e3/5fe318b2da229203b86ad93bafe5c769051ab347.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",       
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:4999
  
      },
      {   id:10,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/50/43/50431ec8a6f80cbc2e1de11058642f50caa23224.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:2599
  
      },
      {   id:11,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/e7/68/e768f73993b2fff232dfd6f5549d6ae00e4a9e5f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:2199
  
      },
      {   id:12,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/01/1a/011a625335e2be045af3adabac066ded8d143274.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:1599
  
      },
      {   id:13,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/1f/65/1f659dadf7b98d397205b83ccb2b11d1c504846d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:599
  
      },
      {   id:14,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/62/fb/62fb75b4e471ecabb1facf562344532a409ba89f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:1199
  
      },
      {   id:15,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/4c/c4/4cc410d1783950ce7c3e01446dbdb6ab076cb0c0.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:799
  
      },
      {   id:16,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/39/d0/39d0c5f3f0d750d908a53389110cbcd1fefa8169.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:1599
  
      },
      {   id:17,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/17/5c/175cf649bf15a973c856db54ac80d7c40a02571a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:599
  
      },
      {   id:18,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/57/76/5776ab54e7f49c747b6fa79a038101abaa226add.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:1199
  
      },
      {   id:19,
          productimg:"https://lp2.hm.com/hmgoepprod?set=source[/8f/5d/8f5d7a9f992818f7d52932477863ca8e6bd44887.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
          productname:"shirt",
          productdescription:"Description Description Description",
          productprice:799
  
      }
  ];
  // ======================================================
  
  return (
      <>
      <Navbar/>
      <h1>Product1</h1>
     <div className="card1"> 
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
     />
     <Card 
     img={product_card[16].productimg}
     name={product_card[16].productname}
     description={product_card[16].productdescription}
     price={product_card[16].productprice}
     />
     <Card 
     img={product_card[17].productimg}
     name={product_card[17].productname}
     description={product_card[17].productdescription}
     price={product_card[17].productprice}
     />
     <Card 
     img={product_card[18].productimg}
     name={product_card[18].productname}
     description={product_card[18].productdescription}
     price={product_card[18].productprice}
     />
     <Card 
     img={product_card[19].productimg}
     name={product_card[19].productname}
     description={product_card[19].productdescription}
     price={product_card[19].productprice}
     />
     
     
     
     
     
     
     
     </div>
     
      <Footer/>
      </>



  );
}

export default Product1;