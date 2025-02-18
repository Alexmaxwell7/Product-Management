"use client";
import { useState } from "react";
import useProductStore from "../store/useProductStore";

export default function SearchBar() {
  const { searchProducts } = useProductStore();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    searchProducts(query);
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 flex-1 rounded-md"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
}
