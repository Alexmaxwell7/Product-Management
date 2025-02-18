"use client";
import useProductStore from "../store/useProductStore";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { filteredProducts, loading } = useProductStore();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow">
          <ProductCard key={product.id} product={product} />
          </div>
        ))
      ) : (
        <p className="text-center col-span-3 text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
}
