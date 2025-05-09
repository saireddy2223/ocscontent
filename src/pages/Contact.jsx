import React, { useState } from "react";

const ContactUs = () => {
  return (
    <section className="bg-[#f5f6f0] min-h-screen flex items-center justify-center px-6 md:px-12 py-16">
      <div className="max-w-4xl w-full grid md:grid-cols-1 gap-10 items-center">

        {/* Left Side Image & Text */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            We’d love to <span className="text-green-600 italic">hear from you</span>
          </h2>
          <p className="text-gray-600">
            Reach out with any questions, concerns, or business inquiries. Our team is here to help you secure your data.
          </p>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Email:</strong> support@neridio.com</p>
            <p><strong>Address:</strong> Neridio Systems Ltd, Tramshed Tech Innovation Station,<br />Old station building, Queensway, Newport, Wales, NP20 4AX</p>
          </div>

          {/* Google Maps Iframe */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Neridio Systems Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.0269336161314!2d-3.000276843240977!3d51.58995184047372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871e77d4962410f%3A0x2698fbeab82e1dc9!2sNeridio%20Systems%20Ltd.!5e0!3m2!1sen!2sin!4v1744892953643!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
