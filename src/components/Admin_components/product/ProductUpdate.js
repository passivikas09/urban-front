import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Apiservices from "../../api/Apiservices"
import { toast } from "react-toastify"
import { PacmanLoader } from "react-spinners"
export default function ProductUpdate(){
const[load,setload]=useState(false)    
const[name,setname]=useState("")    
const[price,setprice]=useState("")   
const[quantity,setquantity]=useState("")
const param=useParams()
const id=param.id
console.log(id)
useEffect(()=>{
    let data={
        _id:id
    }
    Apiservices.ProductSingle(data).then((res)=>{
        setname(res.data.data.name)
        setprice(res.data.data.price)
        setquantity(res.data.data.quantity)
        console.log(res)
    }).catch((err)=>{
        toast.error("Error"+err)
    })
},[load])

const proupdate=(e)=>{
    e.preventDefault()
    setload(true)
    let data={
        _id:id,
        name:name,
        price:price,
        quantity:quantity
    }
    Apiservices.ProductUpdate(data).then((res)=>{
        if(res.data.success==true){
            setTimeout(() => {
                setload(false)
                toast.success(res.data.message)
            }, 3000)
        }else{
            setTimeout(() => {
                setload(false)
                toast.error(res.data.message)
            }, 3000)
        }
    }).catch((err)=>{
        toast.error("error"+err)
    })
}
const customStyle={
    position:"Absolute",
    left:"48%",
    top:"50%",
    zIndex:1
}
return(
        <>
        <PacmanLoader size={80} color="aqua" loading={load} cssOverride={customStyle}/>
            <div className={load===true?"disable-screen":""}>
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
                <p className="display-1 text-center ">Update Product</p>
            <div className="container ">
                <div className="row mt-4">
                    <div className="offset-md-3 col-lg-6">
                    </div>
                    
                </div>
                <div className="row mt-4">
                    <div className="offset-md-2 col-md-1 ">
                        <p className="fs-3">Name</p></div>
                    <div className="col-lg-6">
                        <input value={name} onChange={(e) => { setname(e.target.value) }} className="form-control pt-3" />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-2 col-md-1">
                        <p className="fs-3">Image</p>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-select bg-secondary" type="file"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="offset-md-2 col-md-1 ">
                        <p className="fs-3">price</p></div>
                    <div className="col-lg-6">
                        <input value={price} onChange={(e) => { setprice(e.target.value) }} className="form-control pt-3" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="offset-md-2 col-md-1 ">
                        <p className="fs-3">quantity</p></div>
                    <div className="col-lg-6">
                        <input value={quantity} onChange={(e) => { setquantity(e.target.value) }} className="form-control pt-3" />
                    </div>
                </div>
                <button onClick={proupdate} className="btn mt-4 btn-primary d-block mx-auto w-25">Submit</button>
            </div>
        </div>        
        </>
    )
}