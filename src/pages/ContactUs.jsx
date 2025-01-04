import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <section className="py-12 px-6 md:px-20 bg-gray-50 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-lg font-semibold">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-lg font-semibold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="text-lg font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  required
                ></textarea>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">
              <strong>Location:</strong> Vaniyamkulam, Palakkad, Kerala, India
            </p>
            <p className="mb-4">
              <strong>Contact:</strong> +91 9633072907
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@SoukhyaAyurveda.com
            </p>

            <div className="mt-6">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=10.79206848812278,76.3298634887585"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Google Map with Directions */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8543.245092245545!2d76.3298634887585!3d10.79206848812278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ3JzI5LjgiTiA3NsKwMTknNTkuMCJF!5e0!3m2!1sen!2sin!4v1735998848296!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
