import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="font-raleway">
      <h2 className="text-3xl flex justify-center md:text-3xl font-bold  mb-6">Contact Us</h2>
      <form
        action="https://getform.io/f/afbf98aa-27a1-44d2-9ee4-03db94811b87"
        method="POST"
        className="space-y-3"
      >
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3C78FF] transition duration-300"
            placeholder="Full Name"
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3C78FF] transition duration-300"
            placeholder="Email Address"
            required
          />
        </div>

        {/* Budget Selection */}
        <div className="relative">
          <select
            id="budget"
            name="budget"
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3C78FF] transition duration-300 appearance-none"
            required
          >
            <option value="">Select Budget (USD)</option>
            <option value="<1500">Less than $1,500</option>
            <option value="1500-5000">$1,500 - $5,000</option>
            <option value="5000-20000">$5,000 - $20,000</option>
            <option value=">20000">More than $20,000</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>

        {/* Phone (Optional) */}
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3C78FF] transition duration-300"
            placeholder="Phone Number (Optional)"
          />
        </div>

        {/* Company (Optional) */}
        <div className="relative">
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3C78FF] transition duration-300"
            placeholder="Company Name (Optional)"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#3C78FF] transition duration-300 resize-none h-40"
            placeholder="Describe your project and requirements. We will get in touch with you for more details."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-[#60007C] to-[#3C78FF] rounded-lg hover:from-[#3C78FF] hover:to-[#60007C] focus:outline-none focus:ring-4 focus:ring-[#3C78FF] focus:ring-opacity-50 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;