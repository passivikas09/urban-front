import { Coins, CurrencyInr } from "phosphor-react"
import Apiservices from "./api/Apiservices"
import { toast } from "react-toastify"

export default function Product(props){
    const addtocart=(id)=>{
        console.log(id)
        let data={
            userId:sessionStorage.getItem('Id'),
            productId:id,
            userDemand:1
        }
        Apiservices.Addtocart(data).then((res)=>{
            if(res.data.success==true){
                toast.success(res.data.message) 
            }else{
                toast.error(res.data.message)
            }
        }).catch((err)=>{
            toast.error("error"+err)
        })
       }
  const wishlistfunc=(id)=>{
    console.log(id)
    let data={
      userId:sessionStorage.getItem("Id"),
      productId:id
    }
    Apiservices.addtowishlist(data).then((res)=>{
      if(res.data.success==true){
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message)
      }
    }).catch((err)=>{
      toast.error("error"+err)
    })
  }    
    return(
        <>
        <div className="tab-content">
        <div id="all" data-tab-content className="active">
          <div className="row d-flex flex-wrap">
            {props?.product.map((item,index)=>{
              return(
              <div key={index} className="product-item col-lg-4 col-md-6 col-sm-6">
              <div className="image-holder">
                <img src={"https://sangria-centipede-ring.cyclic.app"+item.image} alt="Books" className="product-image"/>
              </div>
              <div className="cart-concern">
                <div className="cart-button d-flex justify-content-between align-items-center">
                <button onClick={()=>{addtocart(item._id)}} type="button" className="btn-wrap cart-link d-flex align-items-center">add to cart <i className="icon icon-arrow-io"></i>
                  </button>
                  <button type="button" className="view-btn tooltip
                      d-flex">
                    <i className="icon icon-screen-full"></i>
                    <span className="tooltip-text">Quick view</span>
                  </button>
                   <button onClick={()=>{wishlistfunc(item._id)}} type="button" className="wishlist-btn">
                    <i className="icon icon-heart"></i>
                  </button>
                  
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
        </>
    )
}