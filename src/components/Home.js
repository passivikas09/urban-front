import  {CurrencyInr} from "phosphor-react"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import Apiservices from "./api/Apiservices"
import { toast } from "react-toastify"
export default function Home(){
const[category,setcategory]=useState([])
const[product,setproduct]=useState([])
useEffect(()=>{
  Apiservices.allcategory().then((res)=>{
      setcategory(res.data.data)
  }).catch((err)=>{
    toast.error("Error"+err)
  })
},[])

const all=()=>{
  Apiservices.ProductAll().then((res)=>{
    setproduct(res.data.data)
  }).catch((err)=>{
    toast.error("error"+err)
  })
}

useEffect(()=>{
  Apiservices.allproduct().then((res)=>{
    setproduct(res.data.data)
}).catch((err)=>{
    toast.error("error"+err)
})
},[])

function allproduct(){
  Apiservices.allproduct().then((res)=>{
    setproduct(res.data.data)
  })
}

const sendCategory=(id)=>{
let data={
  categoryId:id
}
Apiservices.CategorywiseProduct(data).then((res)=>{
  setproduct(res.data.data)
}).catch((err)=>{
  toast.error("Error"+err)
})
}




const customStyle={
  fontSize:"65px",
  color: "#191919"
}
  return(
        <><div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src="/images/banner1.jpg"/>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 style={customStyle}>Summer Collection.</h1>
                <p className="opacity-80">A summer to remember with dear loved ones.</p>
                <p><Link className="btn btn-lg btn-primary" to="/register">Sign up today</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img src="/images/main-banner.jpg"/>
            <div className="container">
              <div className="carousel-caption">
                <h1 style={customStyle} >Winter Collection</h1>
                <p>Fashion-forward for the frosty season</p>
                <p><Link className="btn btn-lg btn-primary" to="/shop">Learn more</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{height:"90vh",width:"100%"}} src="/images/model.jpg"/>
            <div className="container">
              <div className="carousel-caption  text-end">
                <h1  style={customStyle} >Casual Collection</h1>
                <p >Casual and carefree, that's just how we roll</p>
                <p><Link className="btn btn-lg btn-primary" to="/shop">Browse Products</Link></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


<section id="latest-collection ">
<div className="container my-5">
  <div className="product-collection row">
    <div className="col-lg-7 col-md-12 left-content">
      <div className="collection-item">
        <div className="products-thumb">
          <img src="/images/collection-item1.jpg" alt="collection item" className="large-image image-rounded"/>
        </div>
        <div className=" col-lg-6 col-md-6 col-sm-6 product-entry">
          <div className="categories">casual collection</div>
          <h3 className="item-title">street wear.</h3>
          <div className="btn-wrap">
            <Link to="/shop" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-5 col-md-12 right-content flex-wrap">
      <div className="collection-item top-item">
        <div className="products-thumb">
          <img src="/images/collection-item2.jpg" alt="collection item" className="small-image image-rounded"/>
        </div>
        <div className="col-md-6 product-entry">
          <div className="categories">Basic Collection</div>
          <h3 className="item-title">Basic shoes.</h3>
          <div className="btn-wrap">
            <Link to="/shop" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="collection-item bottom-item">
        <div className="products-thumb">
          <img src="/images/collection-item3.jpg" alt="collection item" className="small-image image-rounded"/>
        </div>
        <div className="col-md-6 product-entry">
          <div className="categories">Best Selling Product</div>
          <h3 className="item-title">woolen hat.</h3>
          <div className="btn-wrap">
            <Link to="/shop" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<section id="subscribe" className="padding-large">
<div className="container">
  <div className="row">
    <div className="block-text col-md-6">
      <div className="section-header">
        <h2 className="section-title">Get 25% off Discount Coupons</h2>
      </div>
      <p> Get the Most Out of Your Shopping with Discounts</p>
    </div>
    <div className="subscribe-content col-md-6">
      <form id="form" className="d-flex justify-content-between">
        <input type="text" name="email" placeholder="Enter your email addresss here"/>
        <button className="btn btn-dark">Subscribe Now</button>
      </form>
    </div>
  </div>
</div>
</section>

<section id="selling-products" className="product-store bg-light-grey padding-large">
<div className="container">
  <div className="section-header">
    <h2 className="section-title">Best selling products</h2>
  </div>
  <ul className="tabs list-unstyled">
  <li onClick={()=>{allproduct()}}  className="active tab">All</li>
    {category.map((item,index)=>{
      return(
          <li  onClick={()=>{sendCategory(item._id)}} key={index}  className="tab">{item.name}</li>    
      )
    })}
  </ul>
  <div className="tab-content">
    <div  onClick={all} data-tab-content className="active">
      <div className="row d-flex flex-wrap">
        {product.map((item,index)=>{
           return(
            <div key={index} className="product-item col-lg-3 col-md-6 col-sm-6">
            <div className="image-holder">
              <img src={"https://urban.carportasd.com/"+item.image} alt="Books" className="product-image"/>
            </div>
            <div className="cart-concern">
              <div className="cart-button d-flex justify-content-between align-items-center">
                <button type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                </button>
                <Link to="/wishlist" > <button type="button" className="wishlist-btn">
                  <i className="icon icon-heart"></i>
                </button></Link>
              </div>
            </div>
            <div className="product-detail">
              <h3 className="product-title">
                <a href="single-product.html">{item.name}</a>
              </h3>
              <div className="item-price text-primary"><CurrencyInr/>{item.price}</div>
            </div>
          </div>
           ) 
        })}
      </div>
    </div>
  </div>
</div>
</section>

<section id="testimonials" className="padding-large no-padding-bottom">
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
                  <div className="name">by Bo Derek</div>
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


<section className="shoppify-section-banner">
<div className="container">
  <div className="product-collection">
    <div className="left-content collection-item">
      <div className="products-thumb">
        <img src="/images/model.jpg" alt="collection item" className="large-image image-rounded"/>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
        <div className="categories">Denim collection</div>
        <h3 className="item-title">The casual selection.</h3>
        <p>"Get ready to conquer the world in your casual wear."</p>
        <div className="btn-wrap">
          <Link to="/shop" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>        
</div>
</section>

<section id="quotation" className="align-center padding-large">
<div className="inner-content">
  <h2 className="section-title divider">Quote of the day</h2>
  <blockquote>
    <q>It's true, I don't like the whole cutoff-shorts-and-T-shirt look, but I think you can look fantastic in casual clothes.</q>
    <div className="author-name">- Dr. Seuss</div>
  </blockquote>
</div>
</section>

<hr/>

        </>
    )
}
