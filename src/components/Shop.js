import { CurrencyInr } from "phosphor-react";
import { useEffect, useState } from "react";
import Apiservices from "./api/Apiservices";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";
import Product from "./Product";

export default function Shop(){
 const [load,setload]=useState(false) 
 const nav=useNavigate()
const[product,setproduct]=useState([]) 
const [category,setcategory]=useState([])
const[findproduct,setfindproduct]=useState('')
const[tag,settag]=useState([])


  useEffect(()=>{
    Apiservices.allcategory().then((res)=>{
        setcategory(res.data.data)
    }).catch((err)=>{
      toast.error('Error'+err)
    })
 },[load]) 

 useEffect(()=>{
  Apiservices.allproduct().then((res)=>{
    console.log(res.data.data)
    setproduct(res.data.data)
    settag(res.data.data)
  }).catch((err)=>{
    toast.error("Error"+err)
  })
 },[load])

 const all=()=>{
  setload(true)
  Apiservices.ProductAll().then((res)=>{
    setTimeout(() => {
      setload(false)
      setproduct(res.data.data)
    }, 2000)
  }).catch((err)=>{
  setTimeout(()=>{
    setload(false)
    toast.error("error"+err)
  })
  })
 }


 const categoryChoose=(id)=>{
  let data={
    categoryId:id
  }
    Apiservices.CategorywiseProduct(data).then((res)=>{
      setproduct(res.data.data)
    }).catch((err)=>{
      toast.error("error"+err)
    })
 }

 const maxandmin=(x,y)=>{
    let data={
      min:x,
      max:y
    }
    Apiservices.maxandmin(data).then((res)=>{
      setproduct(res.data.data)
    }).catch((err)=>{
      toast.error("error"+err)
    })
 }
 const show=(e)=>{
  e.preventDefault()
  console.log(findproduct)
  let data={
    name:findproduct
  }
  Apiservices.productSearch(data).then((res)=>{
    console.log(res)
    if(res.data.success==true){
      setproduct(res.data.data)
    }else{
      toast.error(res.data.message)
    }
  }).catch((err)=>{
    toast.error('Error'+err)
  })
 }


 const customStyle={
  position:"Absolute",
  left:"40%",
  top:"150%",
  zIndex:1
 }

  return(
        <>
          <section className="site-banner jarallax min-height300 padding-large" style={{background:"url(/images/hero-image.jpg)", backgroundRepeat:" no-repeat", backgroundPosition:"top"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-title">Shop page</h1>
            <div className="breadcrumbs">
              <span className="item">
                <Link to="/">Home /</Link>
              </span>
              <span className="item">Shop</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="shopify-grid padding-large">
      <RingLoader color="lime" size={100} loading={load} cssOverride={customStyle}/>
      <div className={load==true?"disable-screen":""}>
      <div className="container">
        <div className="row">
          <section id="selling-products" className="col-md-9 product-store">
            <div className="container">
              <ul className="tabs list-unstyled">
                <li onClick={()=>{all()}}   className="active tab">All</li>
                {category.map((item,index)=>{
                  return(
                    <li key={index} onClick={()=>{categoryChoose(item._id)}}  className="tab">{item.name}</li>
                  )
                })}
              </ul>
          <Product product={product}/>  
           </div>       
          </section>

          <aside className="col-md-3">
            <div className="sidebar">
              <div className="widgets widget-menu">
                <div className="widget-search-bar">
                  <form role="search" method="get" className="d-flex">
                    <input value={findproduct}  onChange={(e)=>{setfindproduct(e.target.value)}} className="search-field" placeholder="Search" type="text"/>
                    <button onClick={show} className="btn btn-dark"><i className="icon icon-search"></i></button>
                  </form>
                </div> 
              </div>
              <div className="widgets widget-product-tags">
                <h5 className="widget-title">Tags</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  {tag.map((item,index)=>{
                    return( 
                      <li className="tags-item">
                      <Link to="">{item.tags}</Link>
                    </li>
                    )
                  })}
                  <li className="tags-item">
                    <a href="">White</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Cheap</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Branded</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Modern</a>
                  </li>
                  <li className="tags-item">
                    <a href="">Simple</a>
                  </li>
                </ul>
              </div>
              <div className="widgets widget-product-brands">
                <h5 className="widget-title">Brands</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  {category.map((item,index)=>{
                    return(
                      <li key={index} className="tags-item">
                        <Link onClick={()=>{categoryChoose(item._id)}} to="">{item.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="widgets widget-price-filter">
                <h5 className="widget-title">Filter By Price</h5>
                <ul className="product-tags sidebar-list list-unstyled">
                  <li className="tags-item">
                    <Link to=""onClick={()=>{maxandmin(0,100)}} >Less than <CurrencyInr/>100</Link>
                  </li>
                  <li className="tags-item">
                    <Link onClick={()=>{maxandmin(100,200)}} to=""><CurrencyInr/>100- <CurrencyInr/>200</Link>
                  </li>
                  <li className="tags-item"> 
                    <Link to="" onClick={()=>{maxandmin(200,300)}} ><CurrencyInr/>200- <CurrencyInr/>300</Link>
                  </li>
                  <li className="tags-item">
                    <Link to="" onClick={()=>{maxandmin(300,400)}} ><CurrencyInr/>300- <CurrencyInr/>400</Link>
                  </li>
                  <li className="tags-item">
                    <Link onClick={()=>{maxandmin(400,500)}} to=""><CurrencyInr/>400- <CurrencyInr/>500</Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          
        </div>        
      </div>
      </div>      
    </div>

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

    <section id="shipping-information">
      <hr/>
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-between">
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-truck"></i>
              <h4 className="block-title">
                <strong>Free shipping</strong> Over <CurrencyInr/>200
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
  
        </>
    )
}