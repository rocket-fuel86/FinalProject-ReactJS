import ProductCard from "./ProductCard"

function ProductsList({productsArray}) {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row g-5">
                    {productsArray.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsList