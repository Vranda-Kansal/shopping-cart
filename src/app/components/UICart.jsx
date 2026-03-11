import Image from "next/image";

export default function UICart({ cartItems, total }) {
  console.log(cartItems);
  return (
    <div>
      <section>
        <Image src="/arrow.png" alt="back to products" width="22" height="22" />
        <span>My Cart</span>a
      </section>
      <section>
        {cartItems.map((item) => (
          <section key={item.product.id}>
            <Image
              src={item.product.thumbnail}
              alt="back to products"
              width="22"
              height="22"
            />
            <div>
              <div>{item.product.title}</div>
              <div>{item.product.description.slice(0, 85) + "..."}</div>
              <div>{item.product.price}</div>
            </div>
            <button>{item.quantity}</button>
          </section>
        ))}
      </section>
      <section>{total}</section>
    </div>
  );
}
