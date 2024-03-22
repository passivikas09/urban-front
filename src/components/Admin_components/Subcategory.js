import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RingLoader } from "react-spinners"
import Apiservices from "../api/Apiservices"
import { toast } from "react-toastify"
export default function Subcategory() {
  const [load, setload] = useState(false)
  const [category,setcategory]=useState([])
  const [name ,setname]=useState("")
  const [imgname ,setimgname]=useState("")
  const [img ,setimg]=useState({})
  const [categorValue,setcategoryValue]=useState("")
  const customStyle = {
    position: "Absolute",
    left: "45%",
    top: "50%",
    zIndex: 1
  }
  
  useEffect(()=>{
    Apiservices.allcategory().then((res)=>{
      console.log(res.data.data)
      setcategory(res.data.data)
    }).catch((err)=>{
        console.log(err)
    })
  },[load])
  
  const show =(e)=>{
    console.log(e.target.value)
    setcategoryValue(e.target.value)
  }
  
  const changeimg=(e)=>{
      setimgname(e.target.value)
      setimg(e.target.files[0])
  }
  const addSubcat = (e) => {
    e.preventDefault()
    setload(true)
    let data=new FormData()
    data.append("name",name)
    data.append("image",img)
    data.append("categoryId",categorValue)
    Apiservices.subcategoryUpload(data).then((res)=>{
          if(res.data.success===false){
            setload(false)
            toast.error(res.data.message)
          }else{
              setTimeout(()=>{
                toast.success(res.data.message)
                  setload(false)
              },3000)
          }
    }).catch((err)=>{
        console.log(err)
    })
  }
  return (
    <>
      <RingLoader size={100} color="grey" loading={load} cssOverride={customStyle} />
      <div className={load === true ? "disable-screen" : ""}>
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
          <div className="row mt-5">
            <div className="offset-2 col-md-1">
              <p className="fs-3">Name</p>
            </div>
            <div className="col-md-6">
              <input  value={name} onChange={(e)=>{setname(e.target.value)}} className="mt-2 form-control" />
            </div>
          </div>
          <div className="row">
            <div className="offset-2 col-md-1">
              <p className="fs-3">Image</p>
            </div>
            <div className="col-md-6">
              <input type="file" value={imgname} onChange={changeimg} className="mt-2 form-control" />
            </div>
          </div>
          <div className="row">
            <div className="offset-1 col-md-2">
              <p className="fs-3 px-5">Category</p>
            </div>
            <div className="col-md-6">
              <select    onChange={show}  className="form-control">
                <option>Choose One</option>
                {category.map((item ,index)=>{
                    return(
                        <option key={index} value={item._id} >{item.name}</option>
                    )
                })}
              </select>
              
            </div>
            
          </div>
          {categorValue}
          <button onClick={addSubcat} className="d-block mx-auto w-25 btn btn-primary">Add SubCategory</button>
        </div>
      </div>
    </>
  )
}
