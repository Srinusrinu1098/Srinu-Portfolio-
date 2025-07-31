import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import MenuBar from "../MenuBar/MenuBar";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const whatsappMessage = `New message from portfolio:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/917204859169?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-500
 flex flex-col pb-48"
    >
      <div className="flex justify-center shadow-2xl md:justify-end p-2 sm:p-4">
        <MenuBar />
      </div>
      <div className="flex justify-center items-center flex-1 px-4">
        <div className="w-full max-w-xl p-6 bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Full Name"
                className="w-full bg-white/10 text-white placeholder-white border border-white/30 rounded-md p-2 focus:outline-none focus:ring focus:ring-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full bg-white/10 text-white placeholder-white border border-white/30 rounded-md p-2 focus:outline-none focus:ring focus:ring-cyan-400"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Type your message"
                className="w-full bg-white/10 text-white placeholder-white border border-white/30 rounded-md p-2 focus:outline-none focus:ring focus:ring-cyan-400"
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition"
            >
              Send on WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
