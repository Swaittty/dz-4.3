import React from "react";

function ProductCard({ product, images }) {

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const handleBuy = () => {
        console.log(`id: ${product.id}, название: ${product.name}`);
    };

    return (
        <div className="product-card">
            <img src={randomImage} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <button className="buy-button" onClick={handleBuy}>
                Buy now
            </button>
        </div>
    );
}

export default ProductCard;