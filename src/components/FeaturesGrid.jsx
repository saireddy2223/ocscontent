import React from "react";
import { Link } from "react-router-dom";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Secure, cross cloud storage gateway",
      description:
        "Welcome to secure, cross-cloud backup and archiving as a service purpose built for small businesses!"
    },
    {
      title: "100% cloud vendor lock-in",
      description:
        "Purpose-built, community storage clouds, built with data residency and cross-country governance. 100% cloud vendor lock-in must be decoupled from users."
    },
    {
      title: "SaaS based security automation",
      description:
        "World's most reliable, GDPR-compliant, long-term data preservation and management services on a SaaS model."
    },
    {
      title: "Hack-proof data service paired with data sovereignty",
      description:
        "Your data is completely vaulted, hack-proof, and protected with zero cloud provider lock-in. Ransomware attack protection included."
    }
  ];

  return (
    <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg border border-[#f5f6f0] hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-[#59A033] mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">

        {/* External form redirecting to /login_AMG.php */}
        {/* <a href='https://www.onecloudstorage.com/login_AMG.php'>
        <button className="bg-[#59A033] hover:bg-[#4a8a2a] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md transition cursor-pointer">
          JOIN US NOW!
        </button></a> */}

        {/* Internal Form redirecting to /signupform */}
        <Link to={'/enquiry'}>
          <button className="bg-[#59A033] hover:bg-[#4a8a2a] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md transition cursor-pointer">
            Join us now!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturesGrid;
