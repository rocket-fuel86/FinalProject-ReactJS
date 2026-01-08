import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartSection() {
    const { cart, dispatch } = useContext(CartContext);
    
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="display-5 fw-bold">Cart</h2>

                {cart.items.length === 0 ? (<p>Cart is empty</p>) : (
                    <>
                        {cart.items.map(item => (
                        <div key={item.product.id}>
                            <span>{item.product.title}</span>{" "}
                            <span>x {item.count}</span>{" "}
                            <span>${item.product.price * item.count}</span>{" "}

                            <button
                                className="btn btn-primary"
                                onClick={() =>
                                    dispatch({ type: "REMOVE", payload: item.product.id })
                                }
                            >
                            Delete
                            </button>
                        </div>
                        ))}

                        <p><strong>Total:</strong> {cart.getTotal()} $</p>

                        <button className="btn btn-primary" onClick={() => dispatch({ type: "CLEAR" })}>
                            Clear cart
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}
