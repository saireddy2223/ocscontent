import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OneCloudContext } from "../store/context";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6LeSXJYqAAAAAHc5DiEhSnHGcKtWxiIWoS6kS_cO";

export default function EnquiryForm() {
  const { submitAccessRequest } = useContext(OneCloudContext);
  const [formData, setFormData] = useState({
    email: "",
    countryCode: "+91",
    phone: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    recaptcha: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptcha = (token) => {
    setRecaptchaToken(token);
    setErrors((prev) => ({ ...prev, recaptcha: "" }));
  };

  const validateForm = () => {
    const newErrors = { email: "", phone: "", recaptcha: "" };
    let isValid = true;

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }

    // Phone number validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    }

    // reCAPTCHA validation
    if (!recaptchaToken) {
      newErrors.recaptcha = "Please complete the CAPTCHA.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", phone: "", recaptcha: "" });

    if (!validateForm()) return;

    setLoading(true);
    try {
      const { html, extractedEmail } = await submitAccessRequest({
        email: formData.email,
        ccode: formData.countryCode,
        number: formData.phone,
        recaptchaToken,
      });

      if (extractedEmail) {
        navigate("/thank-you");
      } else {
        setErrors((prev) => ({
          ...prev,
          email: "Unexpected response. Please try again.",
        }));
      }
    } catch (err) {
      console.error(err);
      setErrors((prev) => ({
        ...prev,
        email: "Submission failed. Try again later.",
      }));
    }
    setLoading(false);
  };

  return (
    <section className="bg-[#f5f6f0] pt-16 pb-25">
      <div className="w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Side */}
        <div className="w-full lg:w-[50%] space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-tight text-gray-900">
            Neridio <span className="text-green-600 italic">Cross Cloud</span> Data Gateway
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Neridio cross-cloud gateway is the implementation of our market pioneering invention –
            Multi-cloud storage virtualization – realizing cloud-level RAID, making data un-breachable,
            as unintelligible pieces of data spread across multiple cloud providers.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            This solution makes the data invisible and unavailable for any hacker to breach as there’s no single point-of-breach.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-[50%]">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
              Enter your details to get Access
            </h3>

            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Id"
                  className="w-full py-3 bg-[#f5f6f0] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <div className="flex space-x-2">
                  <select
                    name="countryCode"
                    className="w-1/3 py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10 digit Mobile Number"
                    maxLength="10"
                    pattern="\d{10}"
                    className="w-2/3 py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptcha} />
              </div>
              {errors.recaptcha && (
                <p className="text-red-500 text-sm text-center">{errors.recaptcha}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
