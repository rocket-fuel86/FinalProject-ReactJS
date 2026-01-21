import { useEffect, useReducer } from "react"
import { CartContext } from "./CartContext"
import { Cart } from "../models/Cart"

function loadCart() {
  const saved = localStorage.getItem("cart");
  if (!saved) return new Cart();

  try {
    const parsed = JSON.parse(saved);

    return new Cart(
      (parsed.items || []).map(item => ({
        product: item.product,
        count: item.count
      }))
    );
  } catch {
    return new Cart();
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { cart: state.cart.add(action.payload) };
    case "REMOVE":
      return {
        cart: new Cart(state.cart.items.filter(i => i.product.id !== action.payload))
      }
    case "CLEAR":
      return { cart: new Cart() }
    default:
      return state
  }
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cart: loadCart() })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}