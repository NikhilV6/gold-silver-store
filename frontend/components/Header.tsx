'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 border-b bg-white">
      <Link href="/" className="text-xl font-bold">Golden Silver</Link>
      <div className="flex flex-wrap gap-4 text-sm font-medium mt-2 sm:mt-0">
        <span className="cursor-pointer hover:underline">New & Featured</span>
        <span className="cursor-pointer hover:underline">Men</span>
        <span className="cursor-pointer hover:underline">Women</span>
        <span className="cursor-pointer hover:underline">Kids</span>
      </div>
    </nav>
  );
}
