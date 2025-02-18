"use client";
import useProductStore from "../store/useProductStore";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { filteredProducts, loading } = useProductStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center col-span-3 text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
}
