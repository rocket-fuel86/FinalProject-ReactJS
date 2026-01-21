import { useContext } from "react"
import { CartContext } from "../context/CartContext";

import { Link } from "react-router";

function ProductCard({ product }) {
    const { dispatch } = useContext(CartContext);

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} className="card-img-top" />
                </Link>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-light">{product.title}</h5>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <h5 className="m-0 fw-bold">${product.price}</h5>
                        <button onClick={() => dispatch({type: "ADD", payload: product})} className="btn btn-secondary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard