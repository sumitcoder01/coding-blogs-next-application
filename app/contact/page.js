export default function Contact() {
  return (
    <div className='p-4 min-h-[527px]'>
       <div className="container mx-auto mt-10 p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-indigo-500"
            type="phone"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-indigo-500"
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}
