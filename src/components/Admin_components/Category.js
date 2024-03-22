import { useState } from "react"
import { Link } from "react-router-dom"
import Apiservices from "../api/Apiservices"
import { toast} from "react-toastify"
import { PacmanLoader } from "react-spinners"
export default function Category(){
  const [name,setname]=useState("")
  const[img,setimg]=useState({})
  const[imgname,setimgname]=useState("") 
  const[load ,setload]=useState(false)
  const obj={
    position:"absolute",
    top:"50%",
    left:"45%"
   }   
 const changeimg=(e)=>{
      // console.log(e.target.files[0])
        setimg(e.target.files[0])
        setimgname(e.target.value)
  }

 const show=(e)=>{
    e.preventDefault()
    setload(true)
    let data= new FormData()
    data.append("name",name)
    data.append("image",img)
        Apiservices.categoryUpload(data).then(
      (res)=>{
          if(res.data.success==false){
            toast.error(res.data.message)
            setTimeout(() => {
                setload(false)
            }, 3000);
          }else{
          setTimeout(
            ()=>{
              toast.success("successfully added")
              setload(false)
            },3000
          )
        }
      }
    ).catch(
      ()=>{
        setTimeout(() => {
          toast.error("somethimg went Wrong")
          setload(false)
        },3000)
      }
    )
 }
 
  return(
        <>
        <PacmanLoader  loading={load} size={50} color="grey" cssOverride={obj}/>  
        <div className={load==true?"disable-screen":""}>
        <form onSubmit={show} > 
        {/* add this code to all component for banner */}
       <section className="site-banner jarallax" style={{
            background: "pink",  backgroundRepeat:"no-repeat",
            minHeight:"250px"
           }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title mt-5">Category</h1>
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
    
    <p className="display-1 text-center ">Add Category</p>
        <div className="container ">
            <div className="row mt-4">
                <div className="offset-md-2 col-md-1 ">
                  <p className="fs-3">Name</p></div>
                <div className="col-lg-6">
                    <input value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control pt-3"/>
                </div>
            </div>
            <div className="row">
                <div className="offset-md-2 col-md-1">
                  <p className="fs-3">Image</p>
                  </div>
                <div className="col-lg-6">
                    <input className="form-control"  type="file" onChange={changeimg} value={imgname} />
                </div>
            </div>
            <button  className="btn mt-4 btn-primary d-block mx-auto w-25">Submit</button>
        </div>
        </form>
      </div>
        </>
    )
}