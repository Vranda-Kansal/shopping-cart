import Product from "./Product";

export default function Products({
  allproducts,
  setAllCartItems,
  setCartTotal,
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {allproducts.products.map((product) => (
        <Product
          key={product.id}
          product={product}
          setAllCartItems={setAllCartItems}
          setCartTotal={setCartTotal}
        />
      ))}
    </div>
  );
}
