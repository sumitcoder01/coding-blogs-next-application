import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { BASE_URL } from "@/confiq/apiurl";

export const dynamic = 'force-dynamic';

const getBlogs = async () => {
  let blogs = []
  try {
    const API = BASE_URL;
    const res = await fetch(API + "/blog", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await res.json();
    if (response.success) {
      blogs = response.blogs;
    }
  } catch (error) {
    console.log("Server Error!");
  }
  return blogs;
}
export default async function page() {
  let blogs = await getBlogs();
  return (
    <div className='p-4 min-h-[527px] mx-5'>
      <div className="flex mx-5 flex-col items-center space-y-2">
        {
          blogs ? blogs.map(blog => {
            return <Link key={blog._id} href={`/blogPost/${blog.slug}`}>
              <BlogCard title={blog.title} description={blog.description} author={blog.author} />
            </Link>
          }) : <div className="text-center text-3xl text-blue-800">No Blogs are available</div>
        }
      </div>
    </div>
  )
}
