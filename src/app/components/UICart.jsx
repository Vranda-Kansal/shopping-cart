import Image from "next/image";

export default function UICart({ cartItems, total, setShowCart }) {
  console.log(cartItems);
  function handleToggle() {
    setShowCart((prev) => !prev);
  }
  return (
    <div className="md:max-w-[40%] p-4 m-2">
      <section className="flex gap-2">
        <Image
          src="/arrow.png"
          alt="back to products"
          width="22"
          height="16"
          onClick={handleToggle}
          className="cursor-pointer"
        />
        <span className="font-semibold">My Cart</span>
      </section>
      <section className="bg-[#f7f7f7] p-2 mmax-w-full">
        {cartItems.map((item) => (
          <section
            key={item.product.id}
            className="flex items-center bg-white rounded-sm m-1"
          >
            <Image
              src={item.product.thumbnail}
              alt="back to products"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="text-xs grow-1">
              <div className="font-medium">{item.product.title}</div>
              <span>{item.product.description.slice(0, 50) + "..."}</span>
              <div className="font-bold">${item.product.price}</div>
            </div>
            <button className="bg-[#e4f1cc] border-green-400 border-2 text-green-500 font-semibold p-1 rounded-sm cursor-pointer">
              {item.quantity}
            </button>
          </section>
        ))}
      </section>
      <section className="w-full bg-green-600 text-white font-semibold p-2 flex justify-between text-sm rounded-sm">
        <div>
          <div>${total.toFixed(2)}</div>
          <div>Grand Total</div>
        </div>
        <button className="cursor-pointer">Buy Now</button>
      </section>
    </div>
  );
}
