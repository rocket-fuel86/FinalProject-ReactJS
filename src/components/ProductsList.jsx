import ProductCard from "./ProductCard"
import React from "react"

export default function ProductsList({productsArray}) {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center text-center mb-4 mb-md-5">
                    <div className="col-xl-9 col-xxl-8">
                        <h2 className="display-5 fw-bold">Our products</h2>
                    </div>
                </div>
                <div className="row g-5">
                    {productsArray.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}