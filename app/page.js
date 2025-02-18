"use client";
import { useEffect } from "react";
import useProductStore from "./store/useProductStore";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import CategoryDropdown from "./components/CategoryDropdown";
import Loader from "./components/Loader";

export default function HomePage() {
  const { fetchProducts, fetchCategories, loading } = useProductStore();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Store</h1>

      <SearchBar />
      <CategoryDropdown />

      {loading ? <Loader /> : <ProductList />}
    </div>
  );
}
