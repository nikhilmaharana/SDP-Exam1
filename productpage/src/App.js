import { useState } from "react";
import products from "./products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h2>Product List</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
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
