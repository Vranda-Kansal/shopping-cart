"use client";
import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import Products from "./Products";
import SearchInput from "./SearchInput";
import UICart from "./UICart";

export default function ShoppingCart({ res }) {
  console.log(res);
  const [allCartItems, setAllCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    document.documentElement.style.overflow = showCart ? "hidden" : "auto";
  }, [showCart]);
  return (
    <>
      <div className="flex justify-between">
        <SearchInput />
        {!showCart && (
          <AddToCart
            setAllCartItems={setAllCartItems}
            allCartItems={allCartItems}
            setCartTotal={setCartTotal}
            cartTotal={cartTotal}
            setShowCart={setShowCart}
            showCart={showCart}
          />
        )}
      </div>
      <div
        className={`${showCart && "overflow-hidden"} relative w-full h-screen `}
      >
        <Products
          className=" absolute top-0 right-0 z-10"
          allproducts={res}
          setAllCartItems={setAllCartItems}
          setCartTotal={setCartTotal}
        />
        {showCart && (
          <>
            <div className="fixed bg-black/60 inset-0 z-20 w-full h-screen"></div>
            <UICart
              className="fixed top-0 right-0 z-50 h-screen"
              cartItems={allCartItems}
              total={cartTotal}
              setShowCart={setShowCart}
            />
          </>
        )}
      </div>
    </>
  );
}
