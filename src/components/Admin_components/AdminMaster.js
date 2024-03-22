import { Navigate, Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function AdminMaster(){
    const token=sessionStorage.getItem("token")
    if(!token){
        toast.error("Please Login")
        return <Navigate to={"/login"}/>
    }
    return(
        <>
           <AdminHeader/>
           <div style={{minHeight:"100vh"}}>
           <Outlet/> 
           </div>
           {/* <Adminfooter/> */}
           <ToastContainer/>
        </>
    )
}