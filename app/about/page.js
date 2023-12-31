import Image from 'next/image';
export default function About() {
  return (
<div className='min-h-[527px] py-10 text-center'>
  <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-md p-8 rounded-md shadow-md">
          <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
            <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
              About Us
            </h1>
          </div>
          <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
            Coding Blogs is a platform dedicated to providing high-quality coding tutorials, articles, and
            resources. Our mission is to empower developers and learners with valuable content to enhance their
            skills and stay updated with the latest trends in the world of coding.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
