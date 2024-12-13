import React from "react";

interface ProductListCardTitleProps {
  title: string;
}

export const ProductListCardTitle: React.FC<ProductListCardTitleProps> = ({ title }) => {
  return (
    <div>
      <h4 className="mb-2 text-center text-black text-2xl">{title}</h4>
    </div>
  );
};

