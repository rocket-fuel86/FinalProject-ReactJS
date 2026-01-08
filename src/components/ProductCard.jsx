import { useContext } from "react"
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { dispatch } = useContext(CartContext);

    return (
        <div className="col-md-4">
            <div className="card">
                <a href="#"><img src={product.image} className="card-img-top" alt=""/></a>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-text m-0">${product.price}</h5>
                        <button onClick={() => dispatch({type: "ADD", payload: product})} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}