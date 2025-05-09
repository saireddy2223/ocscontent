import React, { useContext, useState } from "react";
import homeIcon from '../assets/home_icon.png';
import { Link, useLocation } from "react-router-dom";
import { OneCloudContext } from "../store/context";
import medicalnew from '../assets/medicalnew.png';
import businessnew from '../assets/businessnew.png';
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6LeSXJYqAAAAAHc5DiEhSnHGcKtWxiIWoS6kS_cO";

export default function Signin() {
  const { login } = useContext(OneCloudContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const countryFromURL = searchParams.get("country");
  

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: countryFromURL || "",
    projectType: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEmailError("");
  
    // Email Validation
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      alert("Invalid email address. Please enter a valid email.");
      return;
    }
  
    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }
  
    if (!formData.projectType || !formData.country) {
      setError("Please select both project type and country.");
      return;
    }
  
    setLoading(true);
    const result = await login(formData);
    setLoading(false);
  
    if (!result.success) {
      setError(result.message);
    }
  };
  

  return (
    <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center h-full p-8 rounded-xl">
          <img src={homeIcon} alt="Security Icon" className="rounded-full mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Welcome to your <span className="text-green-600 font-bold">Security Dashboard</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3 text-center max-w-xs">
            Manage and monitor your files securely across cloud platforms.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Sign in to OneCloudStorage
          </h3>

          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full py-3 bg-[#f5f6f0] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Medical Vault Card */}
              <div
                onClick={() => setFormData({ ...formData, projectType: "Medical" })}
                className={`cursor-pointer border rounded-xl p-4 w-full text-center shadow transition ${
                  formData.projectType === "Medical"
                    ? "border-green-600 ring-2 ring-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={medicalnew}
                  alt="Medical Vault"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Business Vault Card */}
              <div
                onClick={() => setFormData({ ...formData, projectType: "Business" })}
                className={`cursor-pointer border rounded-xl p-4 w-full text-center shadow transition ${
                  formData.projectType === "Business"
                    ? "border-green-600 ring-2 ring-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={businessnew}
                  alt="Business Vault"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <select
              name="country"
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-1 focus:ring-green-500"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="India">India</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-center">
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptcha} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition cursor-pointer"
          >
            {loading ? "Logging in..." : "Submit"}
          </button>

          <div className="text-center text-sm text-[#374151]">
            <Link to="/forgotpassword" className="text-[#15803d] hover:underline font-medium">
              Forgot Password?
            </Link>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>
              Don’t have an account?{" "}
              <Link
                to="/getonboard"
                className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
              >
                Get OnBoard
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
