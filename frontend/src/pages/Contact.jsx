import React from 'react';

const Contact = () => {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <section className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 space-y-8">
        {/* Page Header */}
        <header className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-4">
            Get in <span className="text-danger">Touch</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-600">
            We’d love to hear from you! Use the form below to reach out.
          </p>
        </header>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <label className="flex flex-col space-y-2">
            <span className="text-sm sm:text-base text-gray-800 font-semibold">Your Name</span>
            <input
              type="text"
              placeholder="Aishu"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              required
            />
          </label>

          {/* Email Input */}
          <label className="flex flex-col space-y-2">
            <span className="text-sm sm:text-base text-gray-800 font-semibold">Your Email</span>
            <input
              type="email"
              placeholder="doglienz@gmail.com"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              required
            />
          </label>

          {/* Subject Input */}
          <label className="flex flex-col space-y-2 md:col-span-2">
            <span className="text-sm sm:text-base text-gray-800 font-semibold">Subject</span>
            <input
              type="text"
              placeholder="Let us know how we can help"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              required
            />
          </label>

          {/* Message Input */}
          <label className="flex flex-col space-y-2 md:col-span-2">
            <span className="text-sm sm:text-base text-gray-800 font-semibold">Message</span>
            <textarea
              rows="5"
              placeholder="message here........"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              required
            ></textarea>
          </label>

          {/* Submit Button */}
          <footer className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-300 shadow-black drop-shadow-2xl text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition-all"
            >
              Send Message
            </button>
          </footer>
        </form>

        {/* Contact Info */}
        <aside className="text-center text-gray-600">
          <p className="text-sm sm:text-base">
            Or reach out to us directly at{' '}
            <a
              href="mailto:support@contactapp.com"
              className="text-primary underline font-medium"
            >
              doglienz@gmail.com
            </a>
          </p>
          <p className="text-sm sm:text-base">Call us at: +000000000000000</p>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
