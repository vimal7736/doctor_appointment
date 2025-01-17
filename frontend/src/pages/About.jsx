import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex  justify-center p-6 ">
      <div className="max-w-5xl w-full bg-white/90 shadow-2xl rounded-3xl overflow-hidden p-8">
        <header className="flex flex-col items-center text-center mb-10">
          <h1 className="text-4xl font-extrabold text-primary">
            About <span className="text-danger">Us</span>
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover what makes us the leading healthcare app in Kozhikode.
          </p>
        </header>

        <section className="space-y-8">
          {/* Mission Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              🌟 Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To bring affordable, accessible, and high-quality healthcare services to everyone in Kozhikode through seamless and efficient booking experiences.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              ❤️ Why Choose Us?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-gray-300 to-gray-900 text-white p-4 rounded-xl shadow-md">
                <p>✔️ Easy and convenient booking</p>
              </div>
              <div className="bg-gradient-to-r from-gray-300 to-gray-900 text-gray-50 p-4 rounded-xl shadow-md">
                <p>✔️ Access to top doctors</p>
              </div>
              <div className="bg-gradient-to-r from-gray-300 to-gray-900 text-white p-4 rounded-xl shadow-md">
                <p>✔️ 24/7 customer support</p>
              </div>
              <div className="bg-gradient-to-r from-gray-300 to-gray-900 text-white p-4 rounded-xl shadow-md">
                <p>✔️ Secure & confidential</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gradient-to-r  from-gray-300 to-gray-900 text-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-3">📞 Contact Us</h2>
            <p className="leading-relaxed">
              Have questions? Need help? Email us at{' '}
              <a
                href="mailto:support@doctorapp.com"
                className="underline font-medium text-yellow-200"
              >
                docclientz@gmail.com
              </a>{' '}
              or call us at{' '}
              <span className="font-semibold">00000000000</span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
