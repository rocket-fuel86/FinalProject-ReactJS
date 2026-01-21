import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Order } from "../models/Order"

function CartPage() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [fullname, setFullname] = useState("")
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false)

  const { cart, dispatch } = useContext(CartContext)

  async function handleOrder(e) {
    e.preventDefault()

    const order = new Order({
      fullname,
      email,
      phone,
      address,
      cart
    })

    try {
      setLoading(true)

      const res = await fetch("http://rocketfuel.mywebcommunity.org/php/add_order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order.toJSON())
      })

      res.json()

      if (!res.ok) throw new Error("Order failed")
      
      dispatch({ type: "CLEAR" })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }


  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Cart</h2>

        {cart.items.length === 0 ? (
          <p className="text-muted">Cart is empty</p>
        ) : (
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <ul className="list-group mb-4">
                {cart.items.map(item => (
                  <li
                    key={item.product.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <h6 className="mb-1">{item.product.title}</h6>
                      <small className="text-muted">
                        {item.count} × ${item.product.price}
                      </small>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <strong>${item.product.price * item.count}</strong>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item.product.id })
                        }
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0">Total:</h5>
                <h5 className="m-0">${cart.getTotal()}</h5>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear cart
              </button>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card p-4">
                <h5 className="mb-3">Checkout</h5>
                  <form onSubmit={handleOrder}>
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="tel"
                      className="form-control mb-3"
                      placeholder="Phone"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Full name"
                      value={fullname}
                      onChange={e => setFullname(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Address"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      required
                    />

                    <button className="btn btn-primary w-100" disabled={loading}>
                      {loading ? "Sending..." : "Place order"}
                    </button>
                  </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CartPage;
