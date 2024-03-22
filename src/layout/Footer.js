import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <>
            
    <footer id="footer">
      <div className="container">
        <div className="footer-menu-list">
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Urban</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <Link to="/about" >About us</Link>
                  </li>
                  <li className="menu-item">
                    <a href="#">Conditions </a>
                  </li>
                  
                </ul>
              </div>
              <div className="social-links">
                  <ul className="d-flex list-unstyled">
                    <li>
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-youtube-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Customer Service</h5>
                <ul  className=" menu-list list-unstyled">
                  <li className="menu-item">
                    <a  href="faqs.html">FAQ</a>
                  </li>
                  <li  className="menu-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="menu-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Returns & Refunds</a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Contact Us</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                <Link  style={{textDecoration:"none"}} to="/contact" >contact</Link>
                </li>
                </ul>
                <p>Do you need assistance? Give us a call. <br/>
                  <strong>+84 273 24 707 </strong>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Forever 2023</h5>
                <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{height:"200" , width:'200'}}></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </footer>

    <div id="footer-bottom">
      <div className="container">
        <div className="d-flex align-items-center flex-wrap justify-content-between">
          <div className="copyright">
              <p>All Rights Reserved &copy; 2023</p>
          </div>
          <div className="payment-method">
            <p>Payment options :</p>
            <div className="card-wrap">
              <img src="/images/visa-icon.jpg" alt="visa"/>
              <img src="/images/mastercard.png" alt="mastercard"/>
              <img src="/images/american-express.jpg" alt="american-express"/>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}