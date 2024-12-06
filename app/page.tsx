"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams();
        if (query) params.append("q", query);
        if (category) params.append("category", category);

        const res = await axios.get(`/api/products?${params.toString()}`);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Fetch data only if query length is 0 or greater than 1
    if (query.length === 0 || query.length > 1) fetchData();
  }, [query, category]);

  const handleCategoryClick = (cat) => {
    setCategory(cat === "All" ? "" : cat);
  };

  const categories = [
    "All",
    "Electronics",
    "Furniture",
    "Home Appliances",
    "Accessories",
    "Footwear",
    "Fitness",
    "Books",
    "Clothing",
    "Kitchen",
  ];

  return (
    <div className="app">
      <h1 className="heading">MySearch</h1>
      <input
        className="search-bar"
        placeholder="Search for product names..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <h6 className="filter-label">Filter by Category:</h6>
      <div className="category-buttons">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`category-button ${
              category === cat || (cat === "All" && !category) ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="product-cards">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
