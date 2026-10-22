import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, images }) {
    return (
        <div className="product-list">

            {products.map((product) => (
                <ProductCard key={product.id} product={product} images={images} />
            ))}
        </div>
    );
}

export default ProductList;