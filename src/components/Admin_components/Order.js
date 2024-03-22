import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Apiservices from "../api/Apiservices"
export default function Order(){
const [order,setorder]=useState([])  
  useEffect(()=>{
    Apiservices.orderAll().then((res)=>{
      console.log(res.data.data)
      setorder(res.data.data)
    }).catch(()=>{

    })
  },[])
  return(
        <>
        <section className="site-banner jarallax" style={{
            background: "pink",  backgroundRepeat:"no-repeat",
            minHeight:"250px"
           }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title mt-5">Order</h1>
            <div className="breadcrumbs">
              <span className="item">
                <Link to="/admin">Home /</Link>
              </span>
              <span className="item">Order</span>
            </div>
          </div>
        </div>
      </div>
    </section>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 table-responsive">
                        <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>User Detail</th>
                                <th>Product</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                              {order.map((item,index)=>{
                                  return(
                                    <tr>
                                      <td>{index+1}</td>
                                      <td>{item.userId.name},
                                       {item.userId.address},
                                       {item.userId.mobile}</td>
                                      <td>{item.products.map((res)=>{
                                          return(
                                            <>
                                            <table className="table table-bordered">
                                              <tbody>
                                              <th>
                                                <td><p>{res.productId.name}</p></td>
                                                <td><img src={"http://localhost:5000/"+res.productId.image} height={100} width={100}/></td>
                                                <td><p>GrandTotal:<b>{item.GrandTotal}</b></p></td>
                                              </th>
                                              </tbody>
                                            </table>
                                            </>
                                          )
                                      })}</td>
                                      <td>{item.orderStatus===1?<p className="badge text-bg-warning mt-5">pending</p>:item.orderStatus===2?<p className="badge text-bg-primary">Shipped</p>:<p className="badge text-bg-success">success</p>}</td>
                                      <td><button className="btn btn-primary d-block mx-auto mt-5">Update</button></td>
                                    </tr>
                                  )
                              })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}