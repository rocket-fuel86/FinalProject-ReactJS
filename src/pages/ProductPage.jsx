import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { CartContext } from "../context/CartContext"
import { ProductsContext } from "../context/ProductsContext"

function ProductPage() {
    const { products } = useContext(ProductsContext)

    const { productId } = useParams()
    const { dispatch } = useContext(CartContext)

    const product = products.find(
        p => p.id === Number(productId)
    )

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [productId])

    if (!product) {
        return <h2 className="container py-5 text-center display-5 fw-bold">Product not found</h2>
    }

    return (
      <div className="container mt-5">
          <div className="row">
              <div className="col-md-6 mb-4">
                  <img src={product.image} className="img-fluid rounded mb-3 product-image" />
              </div>
              <div className="col-md-6">
                  <h2 className="mb-3">{product.title}</h2>
                  <p className="text-muted mb-4">ID: {product.id}</p>
                  <div className="mb-3">
                      <span className="h4 me-2">${product.price}</span>
                  </div>
                  <p className="mb-4">{product.description}</p>
                  <button onClick={() => dispatch({type: "ADD", payload: product})} className="btn btn-secondary btn-lg mb-3 me-2">Add to Cart</button>
              </div>
          </div>
      </div>
    )
}

export default ProductPage