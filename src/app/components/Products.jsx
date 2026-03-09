import Product from "./Product";

export default function Products({ allproducts }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {allproducts.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
