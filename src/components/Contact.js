import { CurrencyInr } from "phosphor-react";
import { useState } from "react";
import Apiservices from "./api/Apiservices";
import { ToastContainer, toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function Contact(){
  const [load,setload]=useState(false)
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [message,setmessage]=useState('')
  const sendFunc=(e)=>{
     e.preventDefault();
      setload(true)
     let data={
      name:username,
      email:email,
      message:message
     }   
    Apiservices.enquiryAdd(data).then((item)=>{
        console.log(item.data.success)
        if(item.data.success===true){
           setTimeout(()=>{
            toast.success(item.data.message)
            setload(false)
           },3000)  
        }else{
          setTimeout(()=>{
           toast.error(item.data.message)
           setload(false)
          },3000)  
       }
      }).catch((err)=>{
              toast.error('errror'+err)
      })
  }
  const customStyle={
    position:"Absolute",
    left:"45%",
    top:"120%",
    zIndex:1
  }
  return(
        <>
        <PacmanLoader size={80} color="grey" loading={load} cssOverride={customStyle} />
          <div className={load==true?"disable-screen":""}> 
           <section className="site-banner jarallax padding-large" style={{
            background: "url(/images/hero-image.jpg)",backgroundRepeat: "no-repeat", backgroundPosition: "top"
           }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Contact us</h1>
            <div className="breadcrumbs">
              <span className="item">
                <Link to="/">Home /</Link>
              </span>
              <span className="item">Contact us</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-information padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header">
              <h2 className="section-title">Get in touch</h2>
            </div>
            <div className="contact-detail">
              <div className="detail-list">
                <p>
               You can 24x7 Customer Care support. Any query or issue that you may possibly have while shopping on <b>Urbanclothing</b> is taken care here. This page is easy to navigate, and you can get support almost immediately. you can raise your query. Similarly, there are other options on this page that are created to assist you and to make your shopping experience hassle-free. You can get support any time and get a satisfactory solution to your queries and issues within minutes. </p>
                <ul className="list-unstyled list-icon">
                  <li>
                    <a href="#"><i className="icon icon-phone"></i>+91 8427324707</a>
                  </li>
                  <li>
                    <a href="mailto:info@yourcompany.com"><i className="icon icon-mail"></i>info@Urbanclothing.com</a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-map-pin"></i>Tand urmar ,Punjab, India</a>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <h3>Social Links</h3>
                <ul className="d-flex list-unstyled">
                  <li><a href="#" className="icon icon-facebook"></a></li>
                  <li><a href="#" className="icon icon-twitter"></a></li>
                  <li><a href="#" className="icon icon-instagram"></a></li>
                  <li><a href="#" className="icon icon-youtube-play"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-information">
              <div className="section-header">
                <h2 className="section-title">Send us a message</h2>
              </div>
              <form name="contactform" action="contact.php" method="post" className="contact-form">
                <div className="form-item">
                  <input value={username} onChange={(e)=>{setusername(e.target.value)}} type="text" style={{minlength:"2"}}  name="name" placeholder="Name" className="u-full-width bg-light" required/>
                  <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email"  name="email" placeholder="E-mail" className="u-full-width bg-light mt-2" required/>
                  <textarea value={message} onChange={(e)=>{setmessage(e.target.value)}} className="u-full-width bg-light mt-2" name="message" placeholder="Message" style={{height: '180px'}} required></textarea>
                </div>
                <label>
                  <input type="checkbox" required/>
                  <span className="label-body">I agree all the <a href="#">terms and conditions</a>
                  </span>
                </label>
                <button onClick={sendFunc}   className="btn btn-dark btn-full btn-medium">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="google-map">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"  style={{frameborder:"0", scrolling:"no",marginWidth:"0",marginHeight:"0"}} ></iframe>
          <a href="https://getasearch.com/fmovies"></a>
          <br/>
          
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          s+
        </div>
      </div>
    </section>

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
        <p>Our official Instagram account <a href="#">@urban</a> or <a href="#">#urban_clothing</a>
        </p>
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image1.jpg" alt="instagram" className="insta-image"/>
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

    <section id="shipping-information">
      <hr/>
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-between">
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-truck"></i>
              <h4 className="block-title">
                <strong>Free shipping</strong> Over <br/> <CurrencyInr/> 200
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
      <hr/>
    </section>
    </div>
    <ToastContainer/>       
        </>
    )
}