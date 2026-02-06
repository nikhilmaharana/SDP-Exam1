import { useState } from "react";
import products from "./products";

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
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="All">All</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
      </select>

      {/* Product List */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
