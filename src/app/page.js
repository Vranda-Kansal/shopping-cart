import AddToCart from "./components/AddToCart";
import Products from "./components/Products";
import SearchInput from "./components/SearchInput";

export default async function Home() {
  const data = await fetch("https://dummyjson.com/products");
  const res = await data.json();
  return (
    <>
      <div className="flex justify-between">
        <SearchInput />
        <AddToCart />
      </div>
      <Products allproducts={res} />
    </>
  );
}
