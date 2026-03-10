import Image from "next/image";

export default function AddToCart() {
  return (
    <button className="border-2 border-green-500 bg-green-50 p-2">
      <Image src="/grocery-store.png" alt="addtoCart" width="20" height="20" />
    </button>
  );
}
