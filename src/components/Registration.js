import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import Apiservices from "./api/Apiservices";
import { ToastContainer, toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";

export default function Registration() {
    const [fullname, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [pass, setpass] = useState("")
    const [mobile, setmobile] = useState("")
    const nav = useNavigate()
    const [load, setload] = useState(false)
    const obj = {
        position: "absolute",
        top: "40%",
        left: "45%",
        zIndex: 1
    }

    const submit = (e) => {
        e.preventDefault()
        setload(true)
        let data = {
            email: email,
            name: fullname,
            password: pass,
            address: address,
            mobile: mobile
        }
        Apiservices.reg(data).then(
            (res) => {
                if(res.data.success==true && res.data.data.userType==2){
                    setTimeout(
                        () => {
                            toast.success(res.data.message)
                            toast.success("Successfully Registered")
                            setload(false)
                            nav("/login")
                        }, 3000
                    )
                }
                else(
                    setTimeout(
                        () => {
                            setload(false)
                            toast.error(res.data.message)
                        }, 3000
                    )
                )
            }
        ).catch(
            (err) => {
                toast.error("err" + err)
            }
        )
    }


    return (
        <>
            <form onSubmit={submit}>
                <PacmanLoader color="aqua" loading={load} size={50} cssOverride={obj} />
                <div className={load == true ? "disable-screen" : ""}>
                    <div className="container-fluid">
                        <div className="row" >
                            <div className="col-lg-7 my-2">
                                <img className="img-fluid pt-1" alt="banner" src="/images/banner2.jpg" />
                            </div>
                            <div className="col-lg-5">
                                <div className="row">
                                    <div className="col-lg-4"><p className="fs-3 fw-bold"> Sign Up </p></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">Full Name</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12"><input value={fullname} onChange={(e) => { setfullname(e.target.value) }} className="form-control" type="text" placeholder="Name" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">Email</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12"><input value={email} onChange={(e) => { setemail(e.target.value) }} className="form-control" type="text" placeholder="Email address" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">Address</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12"><input value={address} onChange={(e) => { setaddress(e.target.value) }} className="form-control" type="text" placeholder="Address" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">Password</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12"><input value={pass} onChange={(e) => { setpass(e.target.value) }} className="form-control" type="password" placeholder="***********" /></div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">Mobile</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12"><input value={mobile} onChange={(e) => { setmobile(e.target.value) }} className="form-control" type="password" placeholder="+91 1234567890" /></div>
                                </div>
                                <div className="input-group pt-2">
                                    <input type="checkbox" className="form-check" />
                                    <div className="col-lg-6 ps-2">
                                        I Agree to Terms of User</div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-lg-6 px-2 mt-1"><button onClick={submit} className="z  btn-primary">Sign up</button></div>
                                    <div className="col-lg-6 px-2 mt-1 "> <Link to="/login"><button className="z  btn-outline-success">Sign in</button></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </>
    )
} 