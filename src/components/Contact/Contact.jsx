import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="font-raleway"> 
      <div className="flex flex-col justify-center">
        <div className="mt-8 w-full">
          <form
            action="https://getform.io/f/afbf98aa-27a1-44d2-9ee4-03db94811b87"
            method="POST"
            className="flex flex-col space-y-4"
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
            {/* Budget Selection */}
            <select
              name="budget"
              className="w-full p-4 text-base mb-2 border border-gray-400 focus:border-sky-700 focus:ring focus:ring-sky-200 rounded-full transition duration-300 ease-in-out text-center text-black cursor-pointer"
              required
            >
              <option value="">Select Budget (USD)</option>
              <option value="<2500">Less than 2,500</option>
              <option value="2500-5000">2,500 - 5,000</option>
              <option value="5000-12000">5,000 - 20,000</option>
              <option value=">12000">More than 20,000</option>
            </select>
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
              placeholder="Project Description"
              className="w-full p-4 text-base mb-2 border border-gray-400 focus:border-sky-700 focus:ring focus:ring-sky-200 rounded-[1rem] transition duration-300 ease-in-out h-32 resize-none text-center text-black"
              required
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-4 bg-sky-700 text-white text-lg font-bold border-2 border-sky-700 hover:bg-white hover:text-sky-700 cursor-pointer duration-300"
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
