import React from 'react';

// import { Link } from 'react-router-dom';

import "./Component.css";

let Slider = (props) => {
 


    
    //=======================================================slider image
 let slider_img=[
    {
        id:0,
        sliderimg:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbd%2F78%2Fbd7880020296c76d8ac1532e0ca11b358f6f97aa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    },
    {
        id:1,
        sliderimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F20%2Fe6%2F20e6c61e07331984ba533c159067422d1b18b62e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    },
    {
        id:2,
        sliderimg:"https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc3%2Fdd%2Fc3dd9b48eb3e26db7bebee5ca81d342d335d5028.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    },
    {
        id:3,
        sliderimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5a%2Fe7%2F5ae7e657644ac45f6df3772e0d68f9cf771f9b44.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    },
    {
        id:4,
        sliderimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa5%2F1b%2Fa51b7b9565aa2dfe88f7272223096f7d955cbca1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    },
    {
        id:5,
        sliderimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd4%2Fba%2Fd4ba96506d92196d503cd38babb7e05bb078e16c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    },
    {
        id:6,
        sliderimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F90%2Fcf%2F90cfe9be20253571c7e04dcf2cf8dbcdb3cc06fb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    },
    {
        id:7,
        sliderimg:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb8%2F19%2Fb819faedb167bdcc8034d884268661615e5722d0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    }
];



return (


// height ={height:400px , width};
  
// <!-- slider -->
<>




 <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" style={{height:650+"px" , "objectFit":"cover"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" style={{height:650+"px" , "objectFit":"cover"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1523380838171-950f245362e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" style={{height:650+"px" , "objectFit":"cover"}} alt="..."/>
    </div>
  </div>
</div>
 </>


  );
};

export default Slider;
