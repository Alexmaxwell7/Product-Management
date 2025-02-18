export default function ProductCard({ product }) {
  return (
    <div className="flex flex-1 flex-col p-8">
      <img alt="" src={product.thumbnail} className="mx-auto h-40 shrink-0 rounded-md" />
      <h2 className="mt-6 text-lg font-medium">{product.name}</h2>
      <dl className="mt-1 flex grow flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-lg font-semibold mb-3">{product.title}</dd>
        <dd className="text-sm font-semibold text-gray-500">{product.description}</dd>
        <dt className="sr-only">Price</dt>
        <dd className="mt-3">
          <span className="inline-flex items-center px-2 py-1 text-lg font-semibold">
            ${product.price}
          </span>
        </dd>
      </dl>
    </div>
  );
}
