"use client";
import { useState } from "react";
import AddToCart from "./AddToCart";
import Products from "./Products";
import SearchInput from "./SearchInput";

export default function ShoppingCart({ res }) {
  console.log(res);
  const [allCartItems, setAllCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <>
      <div className="flex justify-between">
        <SearchInput />
        <AddToCart
          setAllCartItems={setAllCartItems}
          allCartItems={allCartItems}
          setCartTotal={setCartTotal}
          cartTotal={cartTotal}
        />
      </div>
      <Products
        allproducts={res}
        setAllCartItems={setAllCartItems}
        setCartTotal={setCartTotal}
      />
    </>
  );
}
