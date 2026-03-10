import Image from "next/image";

export default function SearchInput() {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search the Product eg.Radha"
        className="bg-gray-100 text-gray-500 border-2 border-gray-200"
      />
      <Image src="/search.png" alt="addtoCart" width="14" height="14" />
    </div>
  );
}
