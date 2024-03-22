import { useEffect, useState } from "react"
import { json, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Apiservices from "./api/Apiservices"
import { PacmanLoader } from "react-spinners"

export default function Profile() {
    const nav = useNavigate()
    const [load ,setload]=useState(false)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [mobile, setmobile] = useState(0)
    
    useEffect(()=>{
    let data= JSON.parse(sessionStorage.getItem('userdata'))
    setname(data.name)
    setemail(data.email)
    setaddress(data.address)
    setmobile(data.mobile)
    },[load])

    const logout = (e) => {
        setload(true)
        e.preventDefault()
        sessionStorage.clear()
        setTimeout(() => {
            setload(false)
            toast.error("logged out")
            nav("/login")
        }, 3000)
    }
const customStyle={
    position:"Absolute",
    left:"48%",
    top:"45%"
}

    return (
        <>
            <PacmanLoader size={80} color="aqua" loading={load} cssOverride={customStyle}/>
            <div className={load===true?"disable-screen":""}>
            <section style={{ backgroundcolor: "#eee" }}>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="/img/user.jpeg" alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                    <h5 className="my-3">{name}</h5>
                                    <p className="text-muted mb-1">Customer</p>
                                    <p className="text-muted mb-4">{address}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button onClick={()=>{alert("bhai update kya??")}} type="button" className="btn btn-success d-block w-25">Edit</button>
                                        <button onClick={logout} type="button" className="btn btn-outline-danger ms-1">Sign Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 ">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{mobile}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}