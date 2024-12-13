import { ProductCardContainer } from "./Components/MainPage/ProductCardContainer/ProductCardContainer";
import React from "react";

export default async function Home(): Promise<JSX.Element> {
  return (
    <>
      <ProductCardContainer />
    </>
  );
}
