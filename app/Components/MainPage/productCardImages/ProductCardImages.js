import React from "react";

export const ProductCardImages = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="Bombers" className="w-[200px] h-[200px]"/>
    </div>
  );
};
