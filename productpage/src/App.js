import { useState, useMemo, useCallback } from "react";
import products from "./products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="container">
      <h2>Product List</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={handleSearchChange}
        />

        <select value={category} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
        </select>
      </div>

      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-card">
            <span>{product.name}</span>
            <span className="product-category">{product.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;