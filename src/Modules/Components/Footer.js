
import React from 'react';

import { Link } from 'react-router-dom'; 

import "./Component.css";




let Footer=()=>{
    return (   
  // <!-- footer -->
  
  // <!-- Site footer -->
  <footer className="site-footer" id="footer111">
   <div className="container">
     <div className="row">
       <div className="col-sm-12 col-md-6">
         <h6>About</h6>
         <p className="text-justify">Menscart.com Welcome to our men's ecommerce website, where you can find high-quality clothing, shoes, and accessories to suit any taste and budget. We curate our collections to bring you the latest trends and styles, and our user-friendly website makes shopping easy and hassle-free. With fast shipping and excellent customer service, we're committed to helping you look and feel your best.</p>
         <i>
          {/* <a href="">Blog</a> */}
          <Link to ="" >Blog </Link>,
         {/* <a href="">Vlog</a> */}
         <Link to ="" >Vlog </Link>,
         {/* <a href="">Article</a> */}
         <Link to ="" >Article </Link>,
         {/* <a href="">News</a> */}
         <Link to ="" >News </Link>
         </i> 
       </div>
  
       <div className="col-xs-6 col-md-3">
         <h6>Products</h6>
         <ul className="footer-links">
           <li><a href="product1.html">Top Wear</a></li>
           <li><a href="product2.html">Bottom Wear</a></li>
           <li><a href="product3.html">Foot Wear</a></li>
           <li><a href="product4.html">Inner Wear</a></li>
           <li><a href="product5.html">Accessories</a></li>
           <li><a href="product6.html">Winter Collection</a></li>
         </ul>
       </div>
  
  
       <div className="col-xs-6 col-md-3">
         <h6>Quick Links</h6>
         <ul className="footer-links">
           <li>
            {/* <a href="">About Us</a> */}
            <Link to ="" >About Us </Link>
           </li>
           <li>
            {/* <a href="">Contact Us</a> */}
            <Link to ="" >Contact Us Us </Link>
           <ul>
             <li><a href="tel:+919079746497">phone</a></li>
             <li><a href="mailto:hitansh1611189@gmail.com">mail</a></li>
           </ul>
           </li>
           {/* <li><a href="">Contribute</a></li>
           <li><a href="">Privacy Policy</a></li>
           <li><a href="">Sitemap</a></li> */}
         </ul>
       </div>
  
       <div className="col-xs-6 col-md-3">
         <h6>Address</h6>
         <ul className="footer-links">
           <li>
            {/* <a href="https://www.google.com/maps/place/Vigyan+Nagar,+Kota,+Rajasthan/@25.1523515,75.8591195,15z/data=!3m1!1e3!4m6!3m5!1s0x396f85261c8aa57b:0x6006f97b8a404543!8m2!3d25.1544478!4d75.8603602!16s%2Fg%2F1tdckcfh" target="_blank"><address>B-123 , Vigyan Nagar , Kota , Raj. , India</address></a> */}

           <Link to ="https://www.google.com/maps/place/Vigyan+Nagar,+Kota,+Rajasthan/@25.1523515,75.8591195,15z/data=!3m1!1e3!4m6!3m5!1s0x396f85261c8aa57b:0x6006f97b8a404543!8m2!3d25.1544478!4d75.8603602!16s%2Fg%2F1tdckcfh" target="_blank"> <address>B-123 , Vigyan Nagar , Kota , Raj. , India</address></Link>
           </li>
         </ul>
         </div>
  
         <div className="col-xs-6 col-md-3">
           {/* <h6></h6> */}
           <ul className="footer-links">
             <li className="rounded">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14446.028231025575!2d75.84881980594228!3d25.152351193834566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85261c8aa57b%3A0x6006f97b8a404543!2sVigyan%20Nagar%2C%20Kota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1683539612223!5m2!1sen!2sin" width="100%" height="50" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </li>
           </ul>
           </div>
    
  
       
  
  
     </div>
     <hr/>
   </div>
   <div className="container">
     <div className="row">
       <div className="col-md-8 col-sm-6 col-xs-12">
         <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
      {/* <a href="#">Men's cart</a>. */}
         </p>
       </div>
  
       <div className="col-md-4 col-sm-6 col-xs-12">
         <ul className="social-icons">
           <li><a className="facebook " href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
             <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
           </svg></a></li>
           <li><a className="twitter  " href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
             <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
           </svg></a></li>
           <li><a className="dribbble " href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
             <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
           </svg></a></li>
           <li><a className="linkedin " href="https://www.linkedin.com/feed/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
             <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
           </svg></a></li>   
         </ul>
       </div>
     </div>
   </div>
  </footer>
  
  // {/* <!-- footer over --> */}
  
    );
  }
  
export default Footer;
