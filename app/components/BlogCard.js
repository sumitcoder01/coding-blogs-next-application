"use client"
const BlogCard = ({ title, author, description}) => {
  return (
    <div className="bg-white mx-5 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 focus:scale-105">
      <div className="p-6 mx-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">By <span className="font-semibold">{author}</span></p>
        <p className="text-gray-700 leading-snug">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
