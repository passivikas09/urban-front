import { useEffect, useState } from "react"
import Apiservices from "../api/Apiservices"
import { toast } from "react-toastify"
import { PacmanLoader } from "react-spinners"
import { Link } from "react-router-dom"

export default function Alluser() {
    const [user, setuser] = useState([])
    const [load, setload] = useState(false)
    const customStyle = {
        position: "absolute",
        top: "50%",
        left: "45%",
        zIndex: 1
    }
    useEffect(() => {
        Apiservices.alluser().then((res) => {
            console.log(res.data.data)
            setuser(res.data.data)
        }).catch((err) => {
            console.log("Error" + err)
        })
    }, [load])

    function deleteUser(id) {
        console.log(id)
        setload(true)
        let data = {
            _id: id
        }
        Apiservices.deleteuser(data).then((res) => {
            console.log(res)
            toast.success(res.data.message)
            setTimeout(() => {
                setload(false)
            }, 3000)
        }).catch((err) => {
            toast.error("Error" + err)
        })
    }
    return (
        <>
            <PacmanLoader size={80} color="grey" loading={load} cssOverride={customStyle} />
            <div className={load === true ? "disable-screen" : ""}>
            <section className="site-banner jarallax" style={{
                        background: "pink", backgroundRepeat: "no-repeat",
                        minHeight: "250px"
                    }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="page-title mt-5">All User</h1>
                                    <div className="breadcrumbs">
                                        <span className="item">
                                            <Link to="/admin">Home /</Link>
                                        </span>
                                        <span className="item">customer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-4 col-sm-10 table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Sno</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Address</th>

                                    </tr>
                                </thead>
                                {user.map((item, index) => {
                                    return (
                                        <tbody >
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item._id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.address}</td>
                                                <td> <button onClick={() => { deleteUser(item._id) }} className="btn btn-danger">Delete</button></td>
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