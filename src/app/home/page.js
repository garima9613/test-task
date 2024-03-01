"use client";
import "../../app/globals.css";
import Header from "../components/header/page.js";

export default function HomePage() {
  return (
    <div className="container mx-auto mb-8 px-8">
      <Header />
      <h1 className="text-3xl font-bold underline">This is the Dashboard</h1>
    </div>
  );
}
