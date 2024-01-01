const getBlog = async (slug) => {
  let blog = null
  try {
    const API = process.env.API;
    const res = await fetch(API + "/blog/" +slug, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await res.json();
    if (response.success) {
      blog = response.blogs;
    }
  } catch (error) {
    console.log("Server Error!");
  }
  return blog;
}
export default async function BlogPost({ params }) {
  const blog = await getBlog(params.blog);
  if (!blog) {
    return (
      <div className="p-4 min-h-[527px] text-center">
        <p className="text-red-500">Blog not found</p>
      </div>
    );
  }

  const { title, description, author } = blog;

  return (
    <div className='p-4 min-h-[527px]'>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 focus:scale-105">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">By <span className="font-semibold">{author}</span></p>
          <p className="text-gray-700  leading-snug">{description}</p>
        </div>
      </div>
    </div>
  )
}
