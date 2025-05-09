import React, { useContext, useState } from "react";
import homeIcon from "../assets/home_icon.png";
import ReCAPTCHA from "react-google-recaptcha";
import { OneCloudContext } from "../store/context";
import medicalnew from "../assets/medicalnew.png";
import businessnew from "../assets/businessnew.png";

const RECAPTCHA_SITE_KEY = "6LeSXJYqAAAAAHc5DiEhSnHGcKtWxiIWoS6kS_cO";

export default function GetOnBoard() {
  const { getOnBoard } = useContext(OneCloudContext);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    country: "",
    projectType: "",
    ransomware_agent: "enable",
  });

  const redirectMap = {
    India: {
      Medical: 'https://www.onecloudstorage.com/medicaldatavault/verifysendmail.php',
      Business: 'https://www.onecloudstorage.com/verifysendmail.php',
    },
    US: {
      Medical: 'https://us.onecloudstorage.com/medicaldatavault/verifysendmail.php',
      Business: 'https://us.onecloudstorage.com/verifysendmail.php',
    },
    UK: {
      Medical: 'https://uk.onecloudstorage.com/medicaldatavault/verifysendmail.php',
      Business: 'https://uk.onecloudstorage.com/verifysendmail.php',
    },
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmailError("");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectTypeSelect = (type) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleCaptcha = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      alert("Invalid email address. Please enter a valid email.");
      return;
    }

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const redirectUrl = redirectMap[formData.country]?.[formData.projectType];
    if (!redirectUrl) {
      alert("Please select valid Country and Project Type.");
      return;
    }

    setLoading(true);
    try {
      await getOnBoard(
        redirectUrl,
        formData.email,
        formData.countryCode + formData.phone,
        formData.name,
        recaptchaToken,
        formData.ransomware_agent // pass agent status
      );
    } catch (error) {
      console.error("Error during getOnBoard:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="flex flex-col items-center justify-center h-full p-8 rounded-xl">
          <img src={homeIcon} alt="Cloud Icon" className="rounded-full mb-6" />
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Get <span className="text-green-600 font-bold">On Board</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3 text-center max-w-xs">
            Start protecting your cloud vaults with ransomware defense.
          </p>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            GetOnBoard
          </h3>

          <div className="space-y-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>

            {/* Phone with Country Code */}
            <div className="flex space-x-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
                className="w-1/3 py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Enter 10 digit Mobile Number"
                maxLength="10"
                pattern="\d{10}"
                value={formData.phone}
                onChange={handleChange}
                className="w-2/3 py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            {/* Country Selection */}
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer"
            >
              <option value="">Select Your Country</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="India">India</option>
            </select>

            {/* Project Type Cards */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {[{ type: "Medical", img: medicalnew }, { type: "Business", img: businessnew }].map(({ type, img }) => (
                <div
                  key={type}
                  onClick={() => handleProjectTypeSelect(type)}
                  className={`cursor-pointer border rounded-xl p-4 w-full text-center shadow transition ${formData.projectType === type
                      ? "border-green-600 ring-2 ring-green-500 bg-green-50"
                      : "border-gray-300"
                    }`}
                >
                  <img src={img} alt={`${type} Vault`} className="w-full h-auto object-contain" />
                </div>
              ))}
            </div>

            {/* Ransomware Monitoring Agent */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800 text-center">
                Ransomware Monitoring Agent
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className={`flex items-center w-full sm:w-1/2 p-4 border rounded-lg cursor-pointer transition hover:shadow-md
      ${formData.ransomware_agent === "enable" ? "border-green-600 bg-green-50" : "border-gray-300"}`}>
                  <input
                    type="radio"
                    name="ransomware_agent"
                    value="enable"
                    checked={formData.ransomware_agent === "enable"}
                    onChange={handleChange}
                    className="form-radio text-green-600"
                  />
                  <span className="ml-3 text-gray-800 font-medium">Enable</span>
                </label>

                <label className={`flex items-center w-full sm:w-1/2 p-4 border rounded-lg cursor-pointer transition hover:shadow-md
      ${formData.ransomware_agent === "disable" ? "border-green-600 bg-green-50" : "border-gray-300"}`}>
                  <input
                    type="radio"
                    name="ransomware_agent"
                    value="disable"
                    checked={formData.ransomware_agent === "disable"}
                    onChange={handleChange}
                    className="form-radio text-green-600"
                  />
                  <span className="ml-3 text-gray-800 font-medium">Disable</span>
                </label>
              </div>
            </div>


            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleCaptcha}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {/* Back to Signin Link */}
          <div className="text-center text-sm text-[#374151]">
            <a href="/signin" className="text-[#15803d] hover:underline font-medium">
              Back to Signin
            </a>
          </div>
          
        </form>
        
      </div>
    </section>
    
  );
}
