"use client"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async () => {
    const res = await fetch(`http://localhost:3000/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...formData}),
    })
    const response = await res.json();
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
    if (response.success) {
      toast.success(response.message);
    }
    else {
      toast.error(response.error);
    }

  }
  return (
    <div className='p-4 min-h-[527px]'>
      <div className="container mx-auto mt-10 p-6">
        <ToastContainer />
        <h1 className="text-3xl text-center font-bold mb-6">Contact Us</h1>
        <form onSubmit={(e)=>e.preventDefault()} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
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
              value={formData.email}
              onChange={handleOnChange}
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
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleOnChange}
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
              value={formData.message}
              onChange={handleOnChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            type="submit"
            onClick={handleOnSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
