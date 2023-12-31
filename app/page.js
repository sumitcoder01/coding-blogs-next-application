import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
<div className="p-4 min-h-[527px] bg-gray-100 rounded-xl shadow-lg">
  <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-center">
    <div className="relative w-36 h-32 overflow-hidden rounded-2xl">
      <Image src='/image/home1.png' className="rounded-2xl" layout='fill' objectFit='cover' alt='Home Image' />
    </div>
    <h2 className="text-xl font-italic text-gray-700">{'< Coding Blogs />'}</h2>
    <h1 className="text-3xl font-bold text-gray-800">Latest Blogs</h1>
    <div className="flex flex-col items-center space-y-2">
      <Link href='/blogPost/how-to-learn-flask'>
        <div className="p-4 w-full sm:w-96 flex flex-col justify-between">
          <span className="text-blue-500 hover:underline focus:underline text-lg mb-4">
            How to Learn Flask
          </span>
          <div className="flex justify-end text-gray-600 text-sm">
            <span className="flex-grow">By: jk Raman</span>
          </div>
        </div>
      </Link>
      <Link href='/blogPost/how-to-learn-react'>
        <div className="p-4 w-full sm:w-96 flex flex-col justify-between">
          <span className="text-blue-500 hover:underline focus:underline text-lg mb-4">
            How to Learn React
          </span>
          <div className="flex justify-end text-gray-600 text-sm">
            <span className="flex-grow">By: Raman N</span>
          </div>
        </div>
      </Link>
      <Link href='/blogPost/how-to-learn-next'>
        <div className="p-4 w-full sm:w-96 flex flex-col justify-between">
          <span className="text-blue-500 hover:underline focus:underline text-lg mb-4">
            How to Learn Next
          </span>
          <div className="flex justify-end text-gray-600 text-sm">
            <span className="flex-grow">By: Raman Naadi</span>
          </div>
        </div>
      </Link>
      <div className="bg-indigo-500 p-2 rounded-md text-white cursor-pointer transition-transform transform hover:scale-105 focus:scale-105">
        <Link href="/blog" tabIndex={0}>Explore More</Link>
      </div>
    </div>
  </div>
</div>
  )
}
