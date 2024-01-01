"use client"
import Link from 'next/link';
export default function Navbar() {
  return (
<nav className="bg-gray-100 p-4 shadow-md position-sticky">
  <div className="container  mx-auto flex justify-center items-center">
    <div className="flex space-x-5">
      <Link href="/">
        <span className="text-gray-800 font-medium transition-colors hover:text-indigo-600 focus:text-indigo-600">
          Home
        </span>
      </Link>
      <Link href="/about">
        <span className="text-gray-800 font-medium transition-colors hover:text-indigo-600 focus:text-indigo-600">
          About
        </span>
      </Link>
      <Link href="/blog">
        <span className="text-gray-800 font-medium transition-colors hover:text-indigo-600 focus:text-indigo-600">
          Blog
        </span>
      </Link>
      <Link href="/contact">
        <span className="text-gray-800 font-medium transition-colors hover:text-indigo-600 focus:text-indigo-600">
          Contact
        </span>
      </Link>
      <hr className='text-blue-600'/>
    </div>
  </div>
</nav>
  )
}
