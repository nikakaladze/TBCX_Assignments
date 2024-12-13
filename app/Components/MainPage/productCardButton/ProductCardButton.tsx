import React from "react";

interface ProductCardButtonProps {
  padding?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  cursor?: string;
  margin?: string;
}

export const ProductCardButton: React.FC<ProductCardButtonProps> = ({
  padding,
  backgroundColor,
  color,
  border,
  borderRadius,
  fontSize,
  cursor,
  margin,
}) => {
  return (
    <button
      style={{
        padding,
        backgroundColor,
        color,
        border,
        borderRadius,
        fontSize,
        cursor,
        margin,
      }}
    >
      Add to cart
    </button>
  );
};
