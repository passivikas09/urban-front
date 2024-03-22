import { Link } from "react-router-dom"
import Apiservices from "../api/Apiservices"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { PacmanLoader } from "react-spinners"

export default function Product() {
    const [load, setload] = useState(false)
    const [imagename, setimagename] = useState("")
    const [images, setimages] = useState('')
    const [catValue,setCatValue]=useState('')
    const [subValue,setsubValue]=useState("")
    const [category, setcategory] = useState([])
    const [subcategory, setSubcategory] = useState([])
    const [name, setname] = useState("")
    const [tag, settag] = useState("")
    const [quantity, setquantity] = useState("")
    const [price, setprice] = useState(0)

    useEffect(() => {
        Apiservices.allcategory().then((item) => {
            // console.log(item.data.data)
            setcategory(item.data.data)
        }).catch((err) => {
            toast.success("Error" + err)
        })
    }, [load])

    useEffect(() => {
        Apiservices.subcategoryAll().then((res) => {
            // console.log(res.data.data)
            setSubcategory(res.data.data)
        }).catch((err) => {
            toast.error("Error" + err)
        })
    }, [load])

    const changeImg = (e) => {
        setimagename(e.target.value)
        setimages(e.target.files[0])
    }
    const changeSubCategory=(e)=>{
        setsubValue(e.target.value)
    }
    const changeCategory=(e)=>{
        setCatValue(e.target.value)
    } 
    const handleForm = () => {
        setload(true)
        let data = new FormData
        data.append('categoryId',catValue)
        data.append('subcategoryId',subValue)
        data.append("image",images)
        data.append("name", name)
        data.append("tag", tag)
        data.append("price", price)
        data.append("quantity",quantity)
        Apiservices.ProductAdd(data).then((res)=>{
            if(res.data.success===false){
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
        }).catch((err)=>{
            toast.error("Error"+err)
        })
    }
    const customStyle = {
        position: "Absolute",
        left: "45%",
        top: "50%",
        zIndex: 1
    }

    return (
        <><PacmanLoader size={80} color="grey" loading={load} cssOverride={customStyle} />
            <div className={load === true ? "disable-screen" : ""}>
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
                <div className="container">
                    <div className="row mt-5">
                        <div className="offset-md-2 col-md-2 ">
                            <p className="fs-3">Category</p></div>
                        <div className="col-lg-6">
                            <select  className="form-select" onChange={changeCategory}>
                                <option selected >Choose One Category</option>
                                {category.map((item) => {
                                    return (
                                        <option value={item._id}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-2 col-md-2">
                            <p className="fs-3">Subcategory</p>
                        </div>
                        <div className="col-lg-6">
                            <select  onChange={changeSubCategory} className="form-select">
                                <option selected>Choose One Subcategory</option>
                                {subcategory.map((item, index) => {
                                    return (
                                        <option key={index} value={item._id} >{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        {/* {subValue} */}
                    </div>
                    <div className="row ">
                        <div className="offset-md-2 col-md-2">
                            <p className="fs-3">Name</p></div>
                        <div className="col-lg-6">
                            <input value={name} onChange={(e) => { setname(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="offset-md-2 col-md-2"><p className="fs-3">Price</p></div>
                        <div className="col-lg-6">
                            <input value={price} onChange={(e) => { setprice(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-2 col-md-2">
                            <p className="fs-3">Image</p></div>
                        <div className="col-lg-6">
                            <input type="file" onChange={changeImg} value={imagename} className="form-control mb-4" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="offset-md-2 col-md-2">
                            <p className="fs-3">Tag</p></div>
                        <div className="col-lg-6">
                            <input value={tag} onChange={(e) => { settag(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="offset-md-2 col-md-2">
                            <p className="fs-3">quantity</p></div>
                        <div className="col-lg-6">
                            <input value={quantity} onChange={(e) => { setquantity(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="">
                            <button onClick={handleForm} className="btn btn-primary   my-5    d-block mx-auto w-25">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
