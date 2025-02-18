"use client";
import { useEffect, useState } from "react";
import useProductStore from "../store/useProductStore";

export default function CategoryDropdown() {
  const { categories, fetchByCategory, loading } = useProductStore();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 rounded-md mb-4"
      >
        <option value="all">All Categories</option>
        {categories.map((category, index) => (
          <option
            key={index}
            value={typeof category === "object" ? category.name : category}
          >
            {typeof category === "object" ? category.name : category}
          </option>
        ))}
      </select>
    </>
  );
}
