import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Apiservices from "../api/Apiservices"
import { toast } from "react-toastify"
import { PacmanLoader } from "react-spinners"
export default function Admincontact(){
  const[enquiry,setenquiry]=useState([])
  const [load ,setload]=useState(false)
  useEffect(()=>{
      Apiservices.enquiryAll().then((item)=>{
          console.log(item.data.data)        
          setenquiry(item.data.data)
      }).catch((err)=>{
            console.log("error"+err)
      })
  },[load])

  

  const delelteEnquiry=(id)=>{
    setload(true)
    let data={
      _id:id
    }
    Apiservices.enquiryDelete(data).then((item)=>{
          if(item.data.success===false){
            setTimeout(() => {
              toast.error(item.data.message)
              setload(false)
              }, 3000)
          }else{ 
            setTimeout(() => {
            toast.success(item.data.message)
            setload(false)
            }, 3000)}
    }).catch((err)=>{
      setTimeout(() => {
        toast.error("Error"+err)
        setload(false)
        }, 3000)
    })
  }
const customStyle={
  position:"Absolute",
  left:"46%",
  top:"50%",
  zIndex:1
}  
  return(
        <>
        <PacmanLoader size={80} color="grey" cssOverride={customStyle} loading={load}/>
        <div className={load===true?"disable-screen":""}>
        <section className="site-banner jarallax" style={{
            background: "pink",  backgroundRepeat:"no-repeat",
            minHeight:"250px"
           }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title mt-5">Enquiry</h1>
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
           <div className="container-fluid">  
                <div className="row">
                    <div className="offset-1 col-lg-10">
                        <table className="table table-bordered mt-4 ">
                             <thead>
                             <tr>
                                <td>Serial No.</td>
                                <td>Date</td>
                                <th>Name</th>   
                                <th>Contact</th>   
                                <th>Message</th>  
                                <th>Reply</th>  
                                <th></th>
                             </tr>
                             </thead> 
                             {enquiry.map((item,index)=>{
                                return(
                                  <tbody>
                                      <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.message}</td>
                                        <td> {item.reply===""?"pending":item.reply}</td>
                                        <td><button onClick={()=>{delelteEnquiry(item._id)}} className="btn btn-danger d-block mx-auto ">Delete</button></td>
                                         <td><Link to={`/admin/contact/reply/`+item._id}><button  className="d-block mx-auto btn btn-primary ">Reply</button></Link></td>
                                      </tr>
                                  </tbody>
                                )
                             })}
                        </table>
                    </div>
                </div>
            </div> 
          </div>
        </>
    )
}