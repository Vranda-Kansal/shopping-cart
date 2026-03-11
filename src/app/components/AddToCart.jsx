"use client";
import Image from "next/image";
import UICart from "./UICart";
import { useEffect, useState } from "react";

export default function AddToCart({
  setAllCartItems,
  allCartItems,
  setCartTotal,
  cartTotal,
  showCart,
  setShowCart,
}) {
  function handleToggle() {
    setShowCart((prev) => !prev);
  }
  useEffect(() => {
    const cartAllItems = JSON.parse(localStorage.getItem("items"));
    const total = JSON.parse(localStorage.getItem("total"));
    const items = cartAllItems && Object.values(cartAllItems);
    // console.log(items);
    setAllCartItems(items);
    setCartTotal(total);
  }, []);
  return (
    <>
      <button
        className="border-2 border-green-500 bg-green-50 p-2 cursor-pointer"
        onClick={handleToggle}
      >
        <Image
          src="/grocery-store.png"
          alt="addtoCart"
          width="20"
          height="20"
        />
      </button>
    </>
  );
}
