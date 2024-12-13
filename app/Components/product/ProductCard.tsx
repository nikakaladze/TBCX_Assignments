import React from "react";
import Link from "next/link";


interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  description: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <Link href={`/products/${product.id}`}>
        <a>
          <img src={product.images[0]} alt={product.title} />
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;

