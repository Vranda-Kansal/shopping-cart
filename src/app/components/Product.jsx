"use client";

export default function Product({ product }) {
  return (
    <section>
      <section>
        <span>{product.discountPercentage}</span>
        <img src={product.thumbnail} alt="product Image" />
      </section>
      <section>
        <div>{product.rating}</div>
        <div>{product.reviews.length}</div>
        <div>
          <div>{product?.brand}</div>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <div>{product.price}</div>
        </div>
        <button>Add</button>
      </section>
    </section>
  );
}
