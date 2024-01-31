import React from "react";

const Contact = () => {
  return (
    <div name="contact" >
      <div className="flex flex-col justify-center ">
        <div className="mt-8 w-full ">
          <form
            action="https://getform.io/f/afbf98aa-27a1-44d2-9ee4-03db94811b87"
            method="POST"
            className="flex flex-col space-y-4 "
          > 
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="w-full p-4 text-base mb-2 border border-gray-400 focus:border-sky-700 focus:ring focus:ring-sky-200 rounded-full transition duration-300 ease-in-out text-center text-black"
              required
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="w-full p-4 text-base mb-2 border border-gray-400 focus:border-sky-700 focus:ring focus:ring-sky-200 rounded-full transition duration-300 ease-in-out text-center text-black"
              required
            />
            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full p-4 text-base mb-2 border border-gray-400 focus:border-sky-700 focus:ring focus:ring-sky-200 rounded-full transition duration-300 ease-in-out text-center text-black"
              required
            />
            {/* Phone (Optional) */}
            <input
              type="text"
              placeholder="Phone Number (Optional)"
              name="phone"
              className="w-full p-4 text-base mb-2 border border-gray-400 focus:border-sky-700 focus:ring focus:ring-sky-200 rounded-full transition duration-300 ease-in-out text-center text-black"
            />
            {/* Company (Optional) */}
            <input
              type="text"
              placeholder="Company Name (Optional)"
              name="company"
              className="w-full p-4 text-base mb-2 border border-gray-400 focus:border-sky-700 focus:ring focus:ring-sky-200 rounded-full transition duration-300 ease-in-out text-center text-black"
            />
            {/* Message */}
            <textarea
              name="message"
              className="w-full p-4 text-base mb-2 border border-gray-400 focus:border-sky-700 focus:ring focus:ring-sky-200 rounded-full transition duration-300 ease-in-out h-32 resize-none text-center text-black"
              required
              placeholder="Project Description"
            ></textarea>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full p-4  bg-sky-700 text-white text-lg font-bold border-2 border-sky-700 hover:bg-white hover:text-sky-700 cursor-pointer duration-300"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
