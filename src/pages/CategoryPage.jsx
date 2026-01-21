import { useContext } from "react"
import { useParams } from "react-router"
import { ProductsContext } from "../context/ProductsContext"
import ProductsList from "../components/ProductsList"

function CategoryPage() {
  const { categoryId } = useParams()
  const { products, loading, error } = useContext(ProductsContext)

  if (loading) return <p className="text-center py-5 fs-4 fw-semibold">Loading...</p>
  if (error) return <p className="text-center py-5 fs-4 fw-semibold">Error: {error}</p>

  const filteredProducts = products.filter(
    (product) => product.categoryId === Number(categoryId)
  )

  if (filteredProducts.length === 0)
    return <p className="text-center py-5 fs-4 fw-semibold">No products in this category</p>

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">
          Category {categoryId}
        </h2>

        <ProductsList productsArray={filteredProducts} />
      </div>
    </section>
  )
}

export default CategoryPage