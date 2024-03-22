import { CurrencyInr } from "phosphor-react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export default function Header() {
  const nav = useNavigate()
  const data = sessionStorage.getItem("token")
  const logout = (e) => {
    e.preventDefault()
    if(window.confirm("do you really want to logout?")){
  
      toast.error("Logout")
      sessionStorage.clear()
      nav("/login")

  }
  }

  return (
    <>
      <header id="header">
        <div id="header-wrap">
          <nav className="secondary-nav border-bottom p-2">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-4 header-contact">
                  <p>Let's talk! <strong>+91 8427324707 </strong>
                  </p>
                </div>
                <div className="col-md-4 shipping-purchase text-center">
                  <p>Free shipping on a purchase value of <CurrencyInr /> 500</p>
                </div>
                <div className="col-md-4 col-sm-12 user-items">
                  <ul className="d-flex justify-content-end list-unstyled">
                    {!!data ? <><li>
                      <Link to="/profile">
                        <i className="icon icon-user"></i>
                      </Link>
                    </li>
                      <li>
                        <Link to="/cart">
                          <i className="icon icon-shopping-cart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist">
                          <i className="icon icon-heart"></i>
                        </Link>
                      </li></> : ""}

                    <li className="user-items search-item pe-3">
                      <Link to="/shop" className="search-button">
                        <i className="icon icon-search"></i>
                      </Link>
                    </li>
                    {!!data ? <Link to="/login"><button onClick={logout} className="btn btn-success">Logout</button></Link> :
                      <Link to="/login"><button className="btn rounded-pill btn-success">Login</button></Link>}
                    {!data ? <Link to="/register"><button className="btn rounded-pill btn-secondary mx-1">Register</button></Link> : ""}

                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <nav className="primary-nav padding-small">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-2 col-md-2">
                  <div className="main-logo">
                    <a href="index.html">
                      <img src="/images/main-logo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10">
                  <div className="navbar">
                    <div id="main-nav" className="stellarnav d-flex justify-content-end right">
                      <ul className="menu-list">
                        <li className="menu-item has-sub">
                          <Link to="/" className="item-anchor active d-flex align-item-center" data-effect="Home">Home</Link>
                        </li>
                        <li><Link to="/about" className="item-anchor" data-effect="About">About</Link></li>
                        <li className="menu-item has-sub">
                          <Link to="/shop" className="item-anchor d-flex align-item-center" data-effect="Shop">Shop</Link>
                        </li>
                        <li><Link to="/contact" className="item-anchor" data-effect="Contact">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}