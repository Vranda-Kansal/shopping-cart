import Product from "./Product";

export default function Products({ allproducts }) {
  return (
    <div>
      {allproducts.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
