"use client";

import Link from "next/link";
import { useState } from "react";
import { aboreto, cormorant, cormorantSC, inter } from "@/app/fonts";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // funderar ännu på färg med Sara.
    <header className="p-4 shadow-md bg-gradient-to-r from-[#E3CDBE] to-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-center">
          <div>
            <div
              className={`${cormorantSC.className} text-2xl md:text-5xl tracking-wide`}
            >
              Almagia
            </div>
            <div
              className={`${cormorant.className} text-sm md:text-xl tracking-widest text-gray-600`}
            >
              en plats för själen
            </div>
          </div>
        </Link>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul
          className={`text-xl flex flex-col md:flex-row md:space-x-2 absolute md:static top-21 left-0 w-full bg-[#D1D6BF] md:w-auto md:bg-transparent overflow-hidden transition-all duration-300 ease-in-out ${
            aboreto.className
          }
    ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}
    md:opacity-100 md:max-h-none
  `}
        >
          <li>
            <Link
              href="/about"
              className="block px-4 py-2 hover:text-[#D4AEA4]"
            >
              Om mig
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block px-4 py-2 hover:text-[#D4AEA4]">
              Blogg
            </Link>
          </li>
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-[#D4AEA4]">
              Utbildningar
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:text-[#D4AEA4]"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
