import { useEffect, useState } from "react"
import Apiservices from "./api/Apiservices"
import { toast } from "react-toastify"

export default function Wishlist() {
    const [product, setproduct] = useState([])
    useEffect(() => {
        let data = {
            userId: sessionStorage.getItem("Id")
        }
        Apiservices.Allwish(data).then((res) => {
            console.log(res.data.data[0].products)
            setproduct(res.data.data[0].products)
        }).catch((err) => {
            toast.error("error" + err)
        })
    }, [])

    const deletewish=(id)=>{
        console.log(id)
        let data={
            _id:id,
            userId:sessionStorage.getItem("Id")
        }
        Apiservices.deletewish(data).then((res)=>{
            if(res.data.success===true){
                toast.success(res.data.message)
            }else{
                toast.error(res.data.message)
            }
        }).catch((err)=>{
            toast.error("Error"+err)
        })
    }
const addtocart=(id)=>{
    let data={
        _id:id
    } 
    Apiservices.Addtocart(data).then(()=>{

    }).catch(()=>{

    })
}
    return (
        <>
            <div className="container ">
                <div className="row">
                    <p className="display-3 text-center ">Wishlist</p>
                </div>
                <div className="row">
                    {product.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-4">
                                <div className="card mx-4 mb-3" style={{ maxWidth: " 400px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={"https://urban.carportasd.com/" + item.productId.image} className="object-fit-cover  rounded-start" alt="products" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.productId.name}
                                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{deletewish(item.productId)}} className="mx-4" width="32" height="32" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                    </svg></h5>
                                                <p className="card-text">Price:{item.productId.price}</p>
                                                <p className="card-text"><small class="text-body-secondary"></small></p>
                                            </div>
                                            <button onClick={()=>{addtocart(item.productId)}} className="btn btn-primary d-block mx-auto mb-2">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
