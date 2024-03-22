import { Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Master(){
    return(
        <>
           <Header/>
           <Outlet/>
           <Footer/>
           <ToastContainer/>
        </>
    )
}