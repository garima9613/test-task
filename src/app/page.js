"use client";
import Header from "./components/header/page";

export default function Home() {
  return (
    <div className="container mx-auto mb-8 px-8">
      <Header />
      <h1 className="mt-8 text-center text-3xl font-bold">
        Hamburger menu in Tailwind & React
      </h1>
    </div>
    // <ul className="divide-y divide-gray-200">
    //   <li>
    //     <Link href="/list">List</Link>
    //   </li>
    //   <li>
    //     <Link href="/about">About</Link>
    //   </li>
    //   <li>
    //     <Link href="/contact-us">Contact Us</Link>
    //   </li>
    // </ul>
  );
}
