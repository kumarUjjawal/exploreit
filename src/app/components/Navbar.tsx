"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-xl font-bold text-gray-800">
          <Image src="/logo.svg" alt="Explore It Logo" width={30} height={30} />
          <span className="ml-2">explore it!</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="/destinations" className="text-gray-700 hover:text-blue-500">
            Tourist List
          </Link>
          <Link href="/destinations" className="text-gray-700 hover:text-blue-500">
            Tour Serach
          </Link>
          <Link href="/destinations" className="text-gray-700 hover:text-blue-500">
            Destinations
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-500">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
