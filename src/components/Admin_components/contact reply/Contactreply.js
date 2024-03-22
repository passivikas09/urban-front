import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Apiservices from "../../api/Apiservices"
import { toast } from "react-toastify"

export default function Contactreply() {
const [name,setname]=useState("")    
const [query,setquery]=useState("")    
const [email,setemail]=useState("")    
const [reply,setreply]=useState("")    
const param=useParams()
const id=param.id

useEffect(()=>{
    let data={
        _id:id
    }
    Apiservices.enquirySingle(data).then((res)=>{
        console.log(res)
        setname(res.data.data.name)
        setemail(res.data.data.email)
        setquery(res.data.data.message)
    }).catch(()=>{

    })
},[])

const replyquery=(e)=>{
    e.preventDefault()
    let data={
        _id:id,
        reply:reply
    }
    Apiservices.enquiryReply(data).then((res)=>{
       if(res.data.success===false){
        toast.error(res.data.message)
       }else{
        toast.success(res.data.message)
       } 
    }).catch((err)=>{
        toast.error("error:"+err)
    })
}
    return (
        <>
        <section className="site-banner jarallax" style={{
          background: "pink", backgroundRepeat: "no-repeat",
          minHeight: "250px"
        }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="page-title mt-5">Enquiry</h1>
                <div className="breadcrumbs">
                  <span className="item">
                    <Link to="/admin">Home /</Link>
                  </span>
                  <span className="item">Enquiry</span>
                </div>
              </div>
            </div>
          </div>
        </section>
            <div className="container ">
                <div className="row mt-4">
                    <div className="offset-md-3 col-lg-6">
                    </div>
                    
                </div>
                <div className="row ">
                    <div className="offset-md-2 col-md-1 ">
                        <p className="fs-3">Name</p></div>
                    <div className="col-lg-6">
                        <input value={name} onChange={(e) => { setname(e.target.value) }} className="form-control pt-3" />
                    </div>
                </div>
                <div className="row ">
                    <div className="offset-md-2 col-md-1 ">
                        <p className="fs-3">Email</p></div>
                    <div className="col-lg-6">
                        <input value={email} onChange={(e) => { setemail(e.target.value) }} className="form-control pt-3" />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-2 col-md-1 ">
                        <p className="fs-3">Query</p></div>
                    <div className=" col-lg-6">
                        <input value={query} onChange={(e) => { setquery(e.target.value) }} className="form-control pt-3" />
                    </div>
                </div>
                <div className="row ">
                    <div className="offset-md-2 col-md-1 ">
                        <p className="fs-3">Reply</p></div>
                    <div className="col-lg-6">
                        <input value={reply} onChange={(e) => { setreply(e.target.value) }} className="form-control pt-3" />
                    </div>
                </div>
                
                <button onClick={replyquery}   className="btn mt-4 btn-primary d-block mx-auto w-25">Submit</button>
            </div>    
        </>
    )
}