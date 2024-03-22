import { UserCircle } from "phosphor-react"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import Apiservice from "./api/Apiservices"
import { PacmanLoader } from "react-spinners"



export default function Login(){
    const obj={
        position:"absolute",
        top:"45%",
        left:"45%",
        zIndex:1
        
    }
    const[load ,setload]=useState(false)
    const[username,setusername]=useState("") 
    const[userpassword,setpassword]=useState("") 
    const nav= useNavigate()
    const show=(e)=>{
        e.preventDefault()
        setload(true)
        let data={
            email :username,
            password:userpassword
        }
        console.log(data.email,data.password)
       Apiservice.login(data).then(
        (res)=>{ 
            if(res.data.success && res.data.data.userType===1){
               console.log(res.data.data)
                sessionStorage.setItem('token',res.data.token)
                sessionStorage.setItem("Id",res.data.data._id)
                setTimeout(
                    ()=>{
                        toast.success("welcome admin")
                        setload(false)
                        nav("/admin")
                    },3000
                 )
             }else if(res.data.success && res.data.data.userType===2){  
                sessionStorage.setItem('token',res.data.token )
                sessionStorage.setItem("Id",res.data.data._id)
                sessionStorage.setItem("userdata",JSON.stringify(res.data.data))
                setTimeout(() => {
                    setload(false)
                    toast.success(res.data.message)
                    nav("/")   
                }, 3000)    
             }else{
                setTimeout(() => {
                    setload(false)
                    toast.error(res.data.message)
                }, 3000)
             }   
        }
       ).catch(
        (err)=>{
            setTimeout((err) => {
                setload(false)
                toast.error("Error"+err)
            }, 3000)
            }
       )
     }
    return(
        <>
        <PacmanLoader  size={50} loading={load} color="aqua" cssOverride={obj} />
        <div className={load===true?"disable-screen":""}>
        <form onSubmit={show}>
           <div className="container" >
                <div className="row">
                    <div className="col-lg-5">
                        <img className="img-fluid" alt="cover" src="/images/single-image1.jpg" />
                    </div>
                    <div className="col-lg-7">
                        <div className="row"></div><br/><br/>
                        <div className="row my-5">
                            <div className="offset-4 col-lg-1 pt-1 px-5"><UserCircle size={48}/></div>
                            <div className="col-lg-2"><p className="fs-2">Login</p></div>
                            <div className="col-lg-5"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"><p className="fs-4 ">Email</p></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12"><input onChange={(e)=>setusername(e.target.value)} value={username} placeholder="passi@gmail.com" className="form-control"/></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"><p className="fs-4">Password</p></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12"><input onChange={(e)=>{setpassword(e.target.value)}} value={userpassword} type="password" placeholder="Enter your Password" className="form-control"/></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-end"><p className="fw">forgot password?</p></div>
                        </div><br/>
                        <div className="row">
                            <div className="col-lg-12">
                                <button  className="btn d-block w-25 mx-auto btn-success">Login</button>    
                            </div>    
                        </div>   
                    </div>
                </div>
           </div><br/>
           </form>
        </div>   
           <ToastContainer/>
        </>
    )
}