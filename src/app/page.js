import ShoppingCart from "./components/ShoppingCart";

export default async function Home() {
  const data = await fetch("https://dummyjson.com/products");
  const res = await data.json();
  return <ShoppingCart res={res} />;
}
