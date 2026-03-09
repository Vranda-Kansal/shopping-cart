"use client";

export default function Product({ product }) {
  return (
    <section className="p-2">
      <section className="bg-[#f7f7f7] max-w-full">
        <span>{product.discountPercentage}</span>
        <img src={product.thumbnail} alt="product Image" />
      </section>
      <section>
        <section className="flex text-sm items-center">
          <div className="bg-[#e4f1cc] text-[#476f00] px-1 rounded-full my-1 inline-flex items-center gap-1">
            <span>{product.rating}</span>

            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M5.99967 9.23762L3.95958 10.357C3.34224 10.6957 2.93339 10.4129 3.04766 9.7176L3.44489 7.3004L1.78365 5.61036C1.29016 5.10832 1.45737 4.61531 2.15478 4.50955L4.42073 4.16591L5.45629 1.976C5.75639 1.34137 6.24292 1.3413 6.54305 1.976L7.5786 4.16591L9.84456 4.50955C10.543 4.61547 10.71 5.10744 10.2157 5.61036L8.55444 7.3004L8.95168 9.7176C9.06537 10.4095 8.65717 10.6958 8.03975 10.357L5.99967 9.23762Z"></path>
            </svg>
          </div>
          <div className="text-[#837f7f] ml-1 ">({product.reviews.length})</div>
        </section>
        <section>
          <div className="text-[#959191] font-medium">{product?.brand}</div>
          <div className="text-black font-mono font-semibold">
            {product.title}
          </div>
          <div className="text-[#323232] font-semibold text-md">
            {product.description.slice(0, 85) + "..."}
          </div>
          <div className="flex w-full justify-between mt-2">
            <div className="text-black font-medium text-md">
              ${product.price}
            </div>
            <button className="bg-[#e4f1cc] border-green-400 border-2 text-green-500 font-semibold p-1 rounded-sm">
              Add
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
