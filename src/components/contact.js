import React from 'react'
import Footer from './footer';

const Contact = () => {
  return (
    <div>
        
    <section class="site-hero overlay">
      <div class="container">
        <div class="row align-items-center justify-content-center site-hero-inner">
          <div class="col-md-8 text-center">
            <div class="">
              <div class="block-17">
                <h1 class="heading mb-4">Contact Us</h1>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
    

    <section class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-8 pr-md-5">
          </div>
          <div class="col-md-4">
            
            <div class="block-23">
              <h3 class="heading mb-5">Contact Information</h3>
              <ul>
                <li><span class="icon ion-android-pin"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span class="icon ion-ios-telephone"></span><span class="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span class="icon ion-android-mail"></span><span class="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
          
        </div>

      </div>
    </section>
    <div id="map"></div>
    <Footer/>
    </div>
  )
}

export default Contact;