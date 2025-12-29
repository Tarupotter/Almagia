"use client";

import Link from "next/link";
import { useState } from "react";
import { Aboreto } from "next/font/google";

const aboreto = Aboreto({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
        <img src="/logo.png" className="h-16 md:h-20" />
        </Link>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul
          className={`flex-col md:flex md:flex-row md:space-x-6 absolute md:static top-22 left-0 w-full bg-[#DED0BC] md:w-auto md:bg-transparent transition-all duration-300 text-lg md:text-xl ${
            isOpen ? "flex" : "hidden"
          } ${aboreto.className}`}
        >
          <li>
            <Link href="/about" className="block px-4 py-2 hover:text-[#D4AEA4]">Om mig</Link>
          </li>
          <li>
            <Link href="/blog" className="block px-4 py-2 hover:text-[#D4AEA4]">Blogg</Link>
          </li>
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-[#D4AEA4]">Utbildningar</Link>
          </li>
          <li>
            <Link href="/contact" className="block px-4 py-2 hover:text-[#D4AEA4]">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}