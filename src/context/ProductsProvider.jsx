import { useQuery } from "@tanstack/react-query";
import { ProductsContext } from "./ProductsContext";
import Product from "../models/Product";

function ProductsProvider({children}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch('http://rocketfuel.mywebcommunity.org/php/get_products.php').then(r => r.json())
  })

  const products = data 
    ? data.map(item => 
      new Product({
        id: Number(item.id),
        title: item.title,
        price: item.price,
        description: item.description,
        categoryId: Number(item.categoryId),
        image: item.image
      })
    ) : []

  return (
    <ProductsContext.Provider value={{ products, loading: isLoading, error: error?.message }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider