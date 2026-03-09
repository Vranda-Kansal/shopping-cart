import Products from "./components/Products";

export default async function Home() {
  const data = await fetch("https://dummyjson.com/products");
  const res = await data.json();
  return <Products allproducts={res}>Hello</Products>;
}
