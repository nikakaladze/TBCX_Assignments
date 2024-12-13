import React from "react";
import { ProductListCardTitle } from "../productListCardTitle/ProductListCardTitle";
import { ProductCardImages } from "../productCardImages/ProductCardImages";
import { ProductCardDesc } from "../productCardDesc/ProductCardDesc";
import { ProductCardButton } from "../productCardButton/ProductCardButton";



interface ProductListCardProps {
  title: string;
  marginBottom?: string;
  color?: string;
  imageUrl: string;
  Price: string;
  Size: string;
}

export const ProductListCard: React.FC<ProductListCardProps> = (props) => {
  return (
    <div className="border-none p-5 rounded-lg w-[300px] bg-white flex flex-col gap-2 shadow-lg cursor-pointer h-full">
      <ProductListCardTitle
        title={props.title}
        marginBottom={props.marginBottom}
        color={props.color}
      />
      <ProductCardImages
        max-width="120px"
        borderRadius="5px"
        imageUrl={props.imageUrl}
      />
      <ProductCardDesc
        Price={props.Price}
        Size={props.Size}
        display="inline"
        fontSize="18px"
        marginRight="30px"
        color={props.color}
      />
      <ProductCardButton
        padding="10px 32px"
        fontSize="18px"
        backgroundColor="blue"
        color="white"
        border="none"
        borderRadius="5px"
        cursor="pointer"
      />
    </div>
  );
};
