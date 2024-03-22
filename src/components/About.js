import { CurrencyInr } from "phosphor-react";
import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
           <section className="site-banner jarallax min-height300 padding-large" style={{
            background: "url(images/hero-image.jpg)",  backgroundRepeat:"no-repeat"
           }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">About us</h1>
            <div className="breadcrumbs">
              <span className="item">
                <Link to="/">Home /</Link>
              </span>
              <span className="item">About</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="shipping-information" className="padding-large">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-between">
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-truck"></i>
              <h4 className="block-title">
                <strong>Free shipping</strong> Over <br/> <CurrencyInr/>200
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-return"></i>
              <h4 className="block-title">
                <strong>Money back</strong> Return within 7 days
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-tags1"></i>
              <h4 className="block-title">
                <strong>Buy 4 get 5th</strong> 50% off
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-help_outline"></i>
              <h4 className="block-title">
                <strong>Any questions?</strong> experts are ready
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-us">
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="image-holder">
              <img src="/images/single-image1.jpg" alt="single" className="about-image"/>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="detail">
              <div className="display-header">
                <h2 className="section-title">How was Ultras Store started?</h2>
                <p>.On 4 May 2023, it was reported that Walmart had won a bidding war with Amazon to acquire a majority stake in Urbanclothing for US$15 billion. On 9 May 2018, Walmart officially announced its intent to acquire a 77% controlling stake in Urbanclothing for US$16 billion.<br/>
                Following the purchase, Urbanclothing co-founder Vikas passi left the company. The remaining management team reported to Marc Lore, CEO of Walmart eCommerce US.Walmart president Doug McMillon cited plans to help Urbanclothing with its sourcing and supply chain while tapping on its expertise to expand Walmart globally. Indian traders protested against the deal, considering it a threat to domestic business.
                 </p>
                <div className="btn-wrap">
                  <Link to="/shop" className="btn btn-dark btn-medium d-flex align-items-center" tabindex="0">Shop our store<i className="icon icon-arrow-io"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" className="padding-large">
      <div className="container">
        <div className="reviews-content">
          <div className="row d-flex flex-wrap">
            <div className="col-md-2">
              <div className="review-icon">
                <i className="icon icon-right-quote"></i>
              </div>
            </div>
            <div className="col-md-8">
              <div className="swiper testimonial-swiper overflow-hidden">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-detail">
                      <p>“Whoever said money can’t buy happiness simply didn’t know where to go shopping.” </p>
                      <div className="author-detail">
                        <div className="name">By Maggie Rio</div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr/>
    
    <section id="brand-collection" className="padding-medium bg-light-grey">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <img src="/images/brand1.png" alt="phone" className="brand-image"/>
          <img src="/images/brand2.png" alt="phone" className="brand-image"/>
          <img src="/images/brand3.png" alt="phone" className="brand-image"/>
          <img src="/images/brand4.png" alt="phone" className="brand-image"/>
          <img src="/images/brand5.png" alt="phone" className="brand-image"/>
        </div>
      </div>
    </section>

    <section id="instagram" className="padding-large">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Follow our instagram</h2>
        </div>
        <p>Our official Instagram account <a href="#">@ultras</a> or <a href="#">#ultras_clothing</a>
        </p>
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="/images/insta-image1.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="/images/insta-image2.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="/images/insta-image3.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="/images/insta-image4.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="/images/insta-image5.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="/images/insta-image6.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
        </div>          
      </div>
    </section> 
        </>
    )
}