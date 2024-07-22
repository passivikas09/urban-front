import { useEffect, useState } from "react"
import { PacmanLoader } from "react-spinners"
import { Link } from "react-router-dom"
import Apiservices from "../../api/Apiservices"
import { toast } from "react-toastify"
export default function ProductAll(){
const [load,setload]=useState(false)    
const[product,setproduct]=useState([])
useEffect(()=>{
    Apiservices.ProductAll().then((res)=>{
        console.log(res.data.data.categoryId)
        setproduct(res.data.data)
    }).catch((err)=>{
        toast.error('error'+err)
    })
},[load])

const deleteProduct=(id)=>{
    setload(true)
    console.log(id)
    let data={
        _id:id
    }
    Apiservices.ProductDelete(data).then((res)=>{
        if(res.data.success===true){
            setTimeout(() => {
                setload(false)
                toast.success(res.data.message)
            }, 3000);
        }else{
            setTimeout(() => {
                setload(false)
                toast.error(res.data.message)
            }, 3000);
        }
    }).catch((err)=>{
         toast.error("error"+err)   
    })
}

const customStyle={
    position:"Absolute",
    left:"48%",
    top:"50%"
}
    return(
        <>
        <PacmanLoader size={80} color="aqua" loading={load} cssOverride={customStyle}/>
          <div className={load===true?'disable-screen':""}>
            <section className="site-banner jarallax" style={{
                    background: "pink", backgroundRepeat: "no-repeat",
                    minHeight: "250px"
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="page-title mt-5">Product</h1>
                                <div className="breadcrumbs">
                                    <span className="item">
                                        <Link to="/admin">Home/</Link>
                                    </span>
                                    <span className="item">Product</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="row">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                    {product.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{item?.name}</td>
                                               <td>{item.price}</td> 
                                               <td><img className="object-fit-cover border rounded" src={"https://urban.carportasd.com/"+item.image} height={"100"} width={"100"}/></td>
                                               <th>{item.quantity>0?item.quantity:"out of stock"}</th>
                                               <td><button onClick={()=>{deleteProduct(item._id)}} className="btn mx-auto d-block w-50 btn-danger">Delete</button></td> 
                                               <td><Link to={`/admin/product/update/${item._id}`}> <button className="btn mx-auto d-block w-50 btn-success">Edit</button></Link></td>
                                            </tr>
                                        )
                                    })}
                                    {/* {product.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                               <td>{index+1}</td> 
                                               <td>{item.name}</td>  
                                            </tr>
                                        )
                                    })} */}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
        </>
    )
}
