import React from "react";

interface ProductCardDescProps {
  Price: string;
  Size: string;
  fontSize?: string;
  display?: string;
  marginRight?: string;
  color?: string;
}

export const ProductCardDesc: React.FC<ProductCardDescProps> = (props) => {
  const { Price, Size, fontSize, display, marginRight, color } = props;

  return (
    <div>
      <p
        style={{
          fontSize,
          display,
          marginRight,
          color,
        }}
      >
        Price: {Price},
      </p>
      <span style={{ fontSize }}>Size: {Size}</span>
    </div>
  );
};
