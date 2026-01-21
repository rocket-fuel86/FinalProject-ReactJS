import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductsList from "../components/ProductsList";

function Home() {
  const { products, loading, error } = useContext(ProductsContext)

  if (loading) return <p className="text-center fs-4 py-5 fw-semibold">Loading...</p>
  if (error) return <p className="text-center fs-4 py-5 text-danger fw-semibold">Error: {error}</p>

  return <ProductsList productsArray={products} />
}

export default Home