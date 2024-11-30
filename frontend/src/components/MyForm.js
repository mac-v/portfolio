import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);

  };

  return (
    <div className="mx-5 sm:mx-8 lg:mx-12 mb-10 lg:mb-16 ">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-customBlack4 rounded-md lg:p-11 shadow-lg shadow-customBlack6"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-customWhite87 mb-4 lg:mb-8">
          Contact
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-customWhite87 font-medium mb-2 text-lg lg:text-xl"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-customLightGreen67 bg-customBlack10 rounded-lg focus:outline-none focus:ring-2 focus:ring-customLightGreen87"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-customWhite87 font-medium mb-2 text-lg lg:text-xl"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-customLightGreen67 bg-customBlack10 text-customWhite67 rounded-lg focus:outline-none focus:ring-2 focus:ring-customLightGreen87"
            placeholder="Enter your e-mail"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-customWhite87 font-medium mb-2 text-lg lg:text-xl "
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-customLightGreen67 bg-customBlack10 text-customWhite67 rounded-lg focus:outline-none focus:ring-2 focus:ring-customLightGreen87"
            placeholder="Enter your message"
            rows="4"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-4/5 hover:scale-105 bg-customLightGreen67 text-customWhite87 p-2 mt-2 lg:mt-5 text-lg lg:text-xl  rounded-full hover:bg-customLightGreen87 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
