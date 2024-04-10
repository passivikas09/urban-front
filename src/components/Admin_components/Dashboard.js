import { CurrencyDollar, ShoppingCart, ShoppingBagOpen } from "phosphor-react"
import { useEffect, useState } from "react"
import Apiservices from "../api/Apiservices"
import { ToastContainer, toast } from "react-toastify"
import { RingLoader } from "react-spinners"
export default function Dashboard() {
  const [load,setload]=useState(false)
  const [user, setuser] = useState("")
  const [RecentOrders,setRecentOrders]=useState([])
  const [category, setcategory] = useState("")
  const [Enquiry, setEnquiry] = useState("")
  const [Product, setProduct] = useState("")
  const [order, setorder] = useState("")
  useEffect(() => {
    Apiservices.dashboard().then((item) => {
      console.log(item.data.data)
      setuser(item.data.data.TotalUser)
      setRecentOrders(item.data.data.RecentOrders)
      setcategory(item.data.data.TotalCategory)
      setProduct(item.data.data.TotalProduct)
      setEnquiry(item.data.data.TotalEnquiry)
      setorder(item.data.data.TotalOrder)
    }).catch((err) => {
        toast.error("error"+err)
    })
  }, [load])

 

  return (
    <>
    <div className="container">
      <div className="row">
      <div className="card p-2 mt-2 mx-3  " style={{width: "220px"}}>
        <img src="/img/user.jpeg"   className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title text-center">User</h4>
            <p className="fs-1 text-center">{user}</p>
          </div>
      </div>
      <div className="card p-2 mt-2 mx-3 " style={{width: "220px"}}>
        <img src="/img/user.jpeg"   className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title text-center">Category</h4>
            <p className="fs-1 text-center">{category}</p>
          </div>
      </div>
      <div className="card p-2 mt-2 mx-3 " style={{width: "220px"}}>
        <img src="/img/product.jpeg"   className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title text-center">Product</h4>
            <p className="fs-1 text-center">{Product}</p>
          </div>
      </div>
      <div className="card p-2 mt-2 mx-3 " style={{width: "220px"}}>
        <img src="/img/enquiry.jpeg"   className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title text-center">Enquiry</h4>
            <p className="fs-1 text-center">{Enquiry}</p>
          </div>
      </div>
      <div className="card p-2 mt-2 mx-3 " style={{width: "220px"}}>
        <img src="/img/order.webp"   className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title text-center">Order</h4>
            <p className="fs-1 text-center">{order}</p>
          </div>
      </div>
      </div>
      <div className="row">
          <div className="col-lg col-md-6 mt-5 table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                          <th>Sno.</th>
                          <th>User Detail</th>
                          <th>Product Detail</th>
                          <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {RecentOrders.map((item,index)=>{
                        return(
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{item.userId.name},{item.userId.address},{item.userId.mobile}</td>
                              <td>{item.products.map((result,index)=>{
                                return(
                                    <table className="table table-bordered">
                                      <tbody>
                                      <tr key={index}>
                                        <td>{result.productId.name}</td>
                                        <td><img src={"https://sangria-centipede-ring.cyclic.app/"+result.productId.image}  height={100}/></td>
                                        <td>{item.GrandTotal}</td>
                                      </tr>
                                      </tbody>
                                    </table>
                                      
                                )
                              })}</td>
                              <td>{item.orderStatus===1?"pending":""}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
          </div>
      </div>
      </div>
      <ToastContainer/>
    </>
  )
}