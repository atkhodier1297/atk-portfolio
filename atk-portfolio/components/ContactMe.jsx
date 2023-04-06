import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceID = "service_5xxwtta";
    const templateID = "template_d4kltkf";
    const userID = "9tPIv3fnug7XFk5Sm";

    emailjs.send(serviceID, templateID, {
      from_name: name,
      from_email: email,
      message: message,
    }, userID)
      .then((result) => {
        console.log(result.text);
        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="rounded-xl mx-auto shadow-xl shadow-teal-500 my-20">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-teal-500">Contact Me</h2>
        <div className="mb-4">
          <label className="block text-teal-500 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-teal-500 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-teal-500 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className='hover:opacity-50 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md '
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;