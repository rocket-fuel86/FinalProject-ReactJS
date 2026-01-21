import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, dispatch } = useContext(CartContext);

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

                <form>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                  />
                  <input
                    type="tel"
                    className="form-control mb-3"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Full name"
                  />

                  <button className="btn btn-primary w-100">
                    Place order
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartPage;
