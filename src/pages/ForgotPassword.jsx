import React, { useContext, useState } from "react";
import homeIcon from "../assets/home_icon.png";
import { OneCloudContext } from "../store/context";
import medicalnew from "../assets/medicalnew.png";
import businessnew from "../assets/businessnew.png";
import { Link } from "react-router-dom";

const redirectMap = {
    India: {
        Medical: 'https://www.onecloudstorage.com/medicaldatavault/submitEmail.php',
        Business: 'https://www.onecloudstorage.com/submitEmail.php',
    },
    US: {
        Medical: 'https://us.onecloudstorage.com/medicaldatavault/submitEmail.php',
        Business: 'https://us.onecloudstorage.com/submitEmail.php',
    },
    UK: {
        Medical: 'https://uk.onecloudstorage.com/medicaldatavault/submitEmail.php',
        Business: 'https://uk.onecloudstorage.com/submitEmail.php',
    },
};

export default function ForgotPassword() {
    const { sendResetRequest } = useContext(OneCloudContext);
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [projectType, setProjectType] = useState("");
    const [loading, setLoading] = useState(false);

    const [sentEmail, setSentEmail] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        country: "",
        projectType: "",
    });

    const validateForm = () => {
        const newErrors = { email: "", country: "", projectType: "" };
        let isValid = true;

        if (!email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (!country) {
            newErrors.country = "Please select your country.";
            isValid = false;
        }

        if (!projectType) {
            newErrors.projectType = "Please select your vault type.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const redirectUrl = redirectMap[country]?.[projectType];
        if (!redirectUrl) {
            alert("Invalid combination of country and project type.");
            return;
        }

        setLoading(true);
        try {
            const res = await sendResetRequest(redirectUrl, email);
            setSentEmail(res);
        } catch (error) {
            console.error("Error during forgot password:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#f5f6f0] py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div className="flex flex-col items-center justify-center h-full p-8 rounded-xl">
                    <img src={homeIcon} alt="Security Icon" className="rounded-full mb-6" />
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
                        Reset your <span className="text-green-600 font-bold">Password Securely</span>
                    </h2>
                    <p className="text-sm text-gray-500 mt-3 text-center max-w-xs">
                        We'll email you a link to reset your password for secure access.
                    </p>
                </div>

                {/* Right Side Form */}
                {sentEmail ? (

                    <div className="bg-white shadow-xl rounded-xl p-8 md:p-10 text-center">
                        <h3 className="text-2xl font-bold text-green-700 mb-4">
                            Reset instructions sent!
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Please check your inbox for the password reset link.
                        </p>
                        <Link
                            to="/signin"
                            className="inline-block bg-[#59A033] hover:bg-[#4a8a2a] text-white px-6 py-3 rounded-md font-medium transition"
                        >
                             Back to signin
                        </Link>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow-xl rounded-xl p-8 md:p-10 space-y-6 w-full"
                    >
                        <h3 className="text-3xl font-bold text-gray-800 text-center">Forgot Password</h3>

                        <div className="space-y-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                            <select
                                name="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full py-3 px-4 bg-[#f5f6f0] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                                required
                            >
                                <option value="">Select Your Country</option>
                                <option value="UK">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="India">India</option>
                            </select>
                            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                {[{ type: "Medical", img: medicalnew }, { type: "Business", img: businessnew }].map(({ type, img }) => (
                                    <div
                                        key={type}
                                        onClick={() => setProjectType(type)}
                                        className={`cursor-pointer border rounded-xl p-4 w-full text-center shadow transition ${projectType === type
                                            ? "border-green-600 ring-2 ring-green-500 bg-green-50"
                                            : "border-gray-300"
                                            }`}
                                    >
                                      <img src={img} alt={`${type} Vault`} className="..." />

                                    </div>
                                ))}
                            </div>
                            {errors.projectType && <p className="text-red-500 text-sm">{errors.projectType}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#59A033] hover:bg-[#4a8a2a] text-white py-3 rounded-md font-semibold transition"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>

                        <div className="text-center text-sm text-[#374151]">
                            <Link to="/signin" className="text-[#15803d] hover:underline font-medium">
                                Back to Signin
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

                )}
            </div>
        </section>
    );
}