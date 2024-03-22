import { Link } from "react-router-dom"
import { PacmanLoader } from "react-spinners"
import { useEffect, useState } from "react"
import Apiservices from "../../api/Apiservices"
import { toast } from "react-toastify"
export default function SubcategoryAll(){
const[SubCategory,setSubcategory]=useState([])
const [load ,setload]=useState(false)
    useEffect(()=>{
    Apiservices.subcategoryAll().then((res)=>{
        setSubcategory(res.data.data)
    }).catch(()=>{

    })
},[load])

const customStyle={
  position:"Absolute",
  left:"48%",
  top:"45%",
  zIndex:1
} 

const subdelete=(id)=>{
    setload(true)
    let data={
      _id:id
    }
    Apiservices.subcategoryDelete(data).then((res)=>{
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
                <h1 className="page-title mt-5">SubCategory</h1>
                <div className="breadcrumbs">
                  <span className="item">
                    <Link to="/admin">Home /</Link>
                  </span>
                  <span className="item">SubCategory</span>
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
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {SubCategory.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <th>{item.name}</th>
                                        <td><img src={""+item.image}/></td>
                                        <td>{item.isdeleted.toString()}</td>
                                        <td><button onClick={()=>{subdelete(item._id)}} className="btn d-block mx-auto w-50 btn-danger">Delete</button></td>
                                        <td><Link to={"/admin/subcategory/update/"+item?._id} ><button  className="btn d-block mx-auto w-50  btn-primary">Edit</button></Link></td>
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