import { CurrencyInr, ShoppingCart } from "phosphor-react";
import { useEffect, useId, useState } from "react";
import Apiservices from "./api/Apiservices";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";

export default function Cart() {
  const [load, setload] = useState(false)
  var [addx, setaddx] = useState(0)
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [mobile, setmobile] = useState(0)
  const [grandtotal, setgrandtotal] = useState(0)
  const [totalItems, settotalItems] = useState(0)
  const [products, setproducts] = useState([])


  useEffect(() => {
    let data = {
      _id: sessionStorage.getItem("Id")
    }
    Apiservices.singleuser(data).then((res) => {
      setname(res.data.data.name)
      setemail(res.data.data.email)
      setaddress(res.data.data.address)
      setmobile(res.data.data.mobile)
    })
  }, [load])
  useEffect(() => {
    let data = {
      _id: sessionStorage.getItem("Id")
    }
    Apiservices.cartAll(data).then((res) => {
      setproducts(res.data.data.products)
      setgrandtotal(res.data.data.GrandTotal)
      settotalItems(res.data.data.TotalProducts)
    }).catch(() => {

    })
  }, [load])


  const deletecart = (id) => {
    // alert(id)
    if (window.confirm("Do you want to delete product from cart?")) {
      setload(true)
      let data = {
        productId: id,
        userId: sessionStorage.getItem("Id")
      }
      Apiservices.removecart(data).then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message)
        } else {
          toast.error(res.data.message)
        }
        setload(false)

      }).catch((err) => {
        toast.error("error" + err)
        setload(false)

      })
    }
  }

  const placeorder = (e) => {
    e.preventDefault()
    setload(true)
    let data = {
      userId: sessionStorage.getItem("Id")
    }
    Apiservices.orderAdd(data).then((res) => {
      if (res.data.success === false) {
        setTimeout(() => {
          setload(false)
          toast.error(res.data.message)
        }, 3000)
      } else {
        setTimeout(() => {
          setload(false)
          toast.success(res.data.message)
        }, 3000)
      }
    }).catch((err) => {
      toast.error("Error:" + err)
    })
  }
  const incFunc = () => {
    console.log(setaddx(addx + 1))
  }
  const decfun = () => {
    console.log(setaddx(addx - 1))
  }

  const customStyle = {
    position: "Absolute",
    top: "50%",
    left: "48%",
    zIndex: 1
  }
  return (
    <>
      <PacmanLoader size={80} color="aqua" loading={load} cssOverride={customStyle} />
      <div className={load === true ? "disable-screen" : ""}>
        <div className="container">
          <main>
            <div className="py-5 text-center">
              <ShoppingCart size={50} />
              <h2>Checkout form</h2>
            </div>

            <div className="row g-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your cart</span>
                  <span className="badge bg-primary rounded-pill">{totalItems}</span>
                </h4>
                <ul className="list-group mb-3">
                  {products.map((item, index) => {
                    return (
                      <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                          <h6 className="my-0">{item.name}</h6>
                        </div>
                        <span className="text-body-secondary"><CurrencyInr />{item.price}</span>
                        <span>{item.quantity + addx}<svg onClick={incFunc} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square-fill mx-3" viewBox="0 0 16 16">
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                        </svg>
                          <svg onClick={decfun} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1" />
                          </svg>
                        </span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" onClick={() => { deletecart(item.productId) }} width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                        </span>
                      </li>
                    )
                  })}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong>{addx===1? grandtotal :grandtotal*addx}</strong>
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" novalidate="">
                  <div className="row g-3">
                    <div className="col-12">
                      <label for="username" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} className="form-control" placeholder="Username" required="" />
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="email" className="form-label">Email</label>
                      <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} className="form-control" id="email" placeholder="you@example.com" />
                    </div>
                    <div className="col-12">
                      <label for="address" className="form-label">Address</label>
                      <input value={address} onChange={(e) => { setaddress(e.target.value) }} type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="address2" className="form-label">Mobile </label>
                      <input value={mobile} onChange={(e) => { setmobile(e.target.value) }} type="text" className="form-control" id="address2" placeholder="+91 8427324707" />
                    </div>

                    <div className="col-md-4">
                      <label for="state" className="form-label">State</label>
                      <select className="form-select" id="state" required="">
                        <option selected >Choose State</option>
                        <option>Punjab</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label for="zip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="zip" placeholder="" required="" />
                      <div className="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="same-address" />
                    <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                  </div>

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info" />
                    <label className="form-check-label" for="save-info">Save this information for next time</label>
                  </div>

                  <hr className="my-4" />

                  <h4 className="mb-3">Payment</h4>
                  <div className="my-3">
                    <div className="form-check">
                      <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                      <label className="form-check-label" for="credit">Credit card</label>
                    </div>
                    <div className="form-check">
                      <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                      <label className="form-check-label" for="debit">Debit card</label>
                    </div>
                    <div className="form-check">
                      <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                      <label className="form-check-label" for="paypal">PayPal</label>
                    </div>
                  </div>

                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label for="cc-name" className="form-label">Name on card</label>
                      <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                      <small className="text-body-secondary">Full name as displayed on card</small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label for="cc-number" className="form-label">Credit card number</label>
                      <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label for="cc-expiration" className="form-label">Expiration</label>
                      <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label for="cc-cvv" className="form-label">CVV</label>
                      <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button onClick={placeorder} className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}