import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const service = import.meta.env.VITE_SERVICE_ID;
    const template = import.meta.env.VITE_TEMPLATE_ID;
    const Public = import.meta.env.VITE_PUBLIC_KEY;
if (!service || !template || !Public) {
      alert("EmailJS environment variables are missing!");
      return;
    }

    emailjs.sendForm(service, template, form.current, Public)
      .then(
        () => {
          alert("✅ Your message was sent successfully!");
          form.current.reset(); // optional: clear the form
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
      <p className="text-lg text-gray-600 mb-8">
        We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
      </p>
    </div>

    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
      <form ref={form} onSubmit={sendEmail}>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="youremail@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your message here"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Contact
