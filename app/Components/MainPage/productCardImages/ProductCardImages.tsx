
import React from "react";

interface ProductCardImagesProps {
  imageUrl: string;
}

export const ProductCardImages: React.FC<ProductCardImagesProps> = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="Bombers" className="w-[200px] h-[200px]" />
    </div>
  );
};
