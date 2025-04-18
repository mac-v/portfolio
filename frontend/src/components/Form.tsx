import { useState, ChangeEvent, FormEvent } from 'react';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = {
  name?: string[];
  email?: string[];
  message?: string[];
};

const MyForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        setResponseMessage('Message sent!');
        setErrors({});
      } else {
        const errorData = await response.json();
        setErrors(errorData);
      }
    } catch (error) {
      const errorMessage = (error as Error).message
      setResponseMessage(`Error: ${errorMessage}, try again`);
    }
  };

  return (
    <div id="contact" className="mx-5 sm:mx-8 lg:mx-12 mb-10 lg:mb-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-custom-black-4 rounded-md lg:p-11 shadow-lg shadow-custo-black-6"
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-custom-white-87 mb-4 lg:mb-8">
          Contact
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-custom-white-67 font-medium mb-2 text-lg lg:text-xl"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-custom-black-20'} bg-custom-black-10 text-custom-white-67 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-light-green-67`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-custom-white-67 font-medium mb-2 text-lg lg:text-xl"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-custom-black-20'} bg-custom-black-10 text-custom-white-67 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-light-green-67`}
            placeholder="Enter your e-mail"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-custom-white-67 font-medium mb-2 text-lg lg:text-xl"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-custom-black-20 bg-custom-black-10 text-custom-white-67 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-light-green-67"
            placeholder="Enter your message"
            rows={4}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-4/5 hover:scale-105 bg-custom-light-green-67 text-custom-white-87 p-2 mt-2 lg:mt-5 text-lg lg:text-xl rounded-full hover:bg-custom-light-green-87 transition"
          >
            Send
          </button>
        </div>

        {responseMessage && (
          <p className="text-custom-white-87 mt-4">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default MyForm;