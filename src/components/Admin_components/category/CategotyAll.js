import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Apiservices from "../../api/Apiservices"
import { PacmanLoader } from "react-spinners"
import { toast } from "react-toastify"
export default function CategoryAll() {
const [category,setcategory]=useState([])
const [load ,setload]=useState(false)
useEffect(()=>{
    Apiservices.allcategory().then((res)=>{
        console.log(res)
        setcategory(res.data.data)
    }).catch(()=>{

    })
},[load])

const customStyle={
    position:"Absolute",
    left:"48%",
    top:"50%"
}
const categorydelete=(id)=>{
    setload(true)
    let data={
        _id:id
    }
    Apiservices.deletecategory(data).then((res)=>{
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
        toast.error("Error"+err)
    })
}
 return (
        <><PacmanLoader size={80} color="aqua" loading={load} cssOverride={customStyle}/>
            <div className={load===true?"disable-screen":""}>
            <section  className="site-banner jarallax " style={{
                background: "pink", backgroundRepeat: "no-repeat",
                minHeight: "250px"
            }}>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-12">
                            <h1 className="page-title my-4">Category</h1>
                            <div className="breadcrumbs">
                                <span className="item">
                                    <Link to="/admin">Home /</Link>
                                </span>
                                <span className="item">Category</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>sno.</th>
                                <th>Name</th>
                                <th>Image</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {category.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <th>{item.name}</th>
                                        <td><button onClick={()=>{categorydelete(item._id)}} className="btn btn-danger d-block w-25 mx-auto">Delete</button>
                                        <Link className="btn btn-success" to={"/admin/category/update/"+item?._id}>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>        
        </>
    )
}