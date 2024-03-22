
import { UserCircle } from "phosphor-react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

export default function AdminHeader() {
  const nav = useNavigate()
  const goto = () => {
    toast.error('logout Successfully')
    sessionStorage.clear()
    nav("/")
  }
  return (
    <>
      <header>
        <div class="px-3 py-2 text-bg-dark border-bottom">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link to="/admin" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <UserCircle size={50} color="grey"/><p className="fs-2 fw-bold my-2">Admin</p>
              </Link>

              <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link to="/admin" class="nav-link text-white">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                    <strong> Dashboard</strong>
                  </Link>
                </li>
                <li>
                  <Link to="/admin/order" class="nav-link text-white">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                    <strong>Orders</strong>
                  </Link>
                </li>
                
                <li>
                  <div className="dropdown mt-3 mx-2">
                    <button className=" btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Category
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/admin/category">Add</Link></li>
                      <li><Link className="dropdown-item" to="/admin/category/all">All</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown mt-3 mx-2">
                    <button className=" btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      SubCategory
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/admin/subcategory">Add</Link></li>
                      <li><Link className="dropdown-item" to="/admin/subcategory/all">All</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown mt-3 mx-2">
                    <button className=" btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Product
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/admin/product">Add</Link></li>
                      <li><Link className="dropdown-item" to="/admin/product/all">All</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown mt-3 mx-2">
                    <button className=" btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Customers
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/admin/user">ALL</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                <li>
                  <Link to="/admin/admincontact" class="nav-link text-white">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                    <strong>Contact</strong>
                  </Link>
                </li>
                </li>
                <li>
                  <button onClick={goto} className="btn btn-danger mt-4 rounded-pill d-block mx-1">Logout</button>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer/>
    </>
  )
}