export default function ProductCard({ product }) {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded-md" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    );
  }
  