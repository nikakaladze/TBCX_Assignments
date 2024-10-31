"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "../Components/product/ProductCard";
// import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  // debounce ფუნქცია
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // პროდუქტების სიის გამოძახება API-დან
  const fetchProducts = async (
    searchTerm = "",
    sortBy = "title",
    sortOrder = "asc"
  ) => {
    setLoading(true);
    const productsUrl = `https://dummyjson.com/products/search?q=${searchTerm}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

    try {
      const response = await fetch(productsUrl);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  // ძებნის ღირებულების ცვლილების დამუშავება
  const handleSearch = debounce((value) => {
    setSearchTerm(value);
  }, 500); // 500 მილიწამი სიფრთხილის ფუნქციისთვის (debounce)

  // საწყისი მონაცემების ჩატვირთვა
  useEffect(() => {
    fetchProducts(searchTerm, sortBy, sortOrder);
  }, [searchTerm, sortBy, sortOrder]);

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <h1 className="text-center text-black mb-5 font-size text-4xl">
        Products
      </h1>
      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          placeholder="Search Products..."
          className="w-[60%] p-2 text-base rounded border border-gray-300"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="flex items-center">
          <label>Sort By: </label>
          <select
            className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          <button
            className="px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {loading ? (
            <p>Loading...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} className="border border-gray-300 rounded-lg p-4 text-center duration-300 ease-in-out shadow-sm"/>
            ))
          ) : (
            <p>No products found</p>
          )}
        
      </div>
    </div>
  );
};

export default Products;
