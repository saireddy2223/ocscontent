import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const OneCloudContext = createContext();

export default function OneCloudProvider({ children }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    async function login({ email, password, country, projectType }) {
        if (!email || !password || !country || !projectType) {
            return { success: false, message: "Missing login information." };
        }

        const domainMap = {
            US: "us.onecloudstorage.com",
            UK: "uk.onecloudstorage.com",
            India: "www.onecloudstorage.com",
        };

        const domain = domainMap[country];
        const isMedical = projectType === "Medical";
        const pathPrefix = isMedical ? "medicaldatavault/" : "";

        const loginURL = `https://${domain}/${pathPrefix}CDTLoginProcess.php`;
        const redirectURL = `https://${domain}/${pathPrefix}home.php`;

        try {
            const formData = new URLSearchParams();
            formData.append("user", email);
            formData.append("pass", password);
            formData.append("branch", "");
            formData.append("company", "");

            const response = await axios.post(loginURL, formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true,
            });

            if (response.data.success) {
                setUser({ email, projectType, country });
                window.location.href = redirectURL;
                return { success: true, message: response.data.msg };
            } else {
                return { success: false, message: response.data.msg };
            }
        } catch (error) {
            console.error("Login error:", error);
            return { success: false, message: "Network error or server unavailable." };
        }
    }

    // Submit Enquiry Form
    async function submitAccessRequest({ email, ccode, number, recaptchaToken }) {
        const url = "https://www.onecloudstorage.com/verifyAMS.php";
        const formData = new URLSearchParams();

        formData.append("email1", email);
        formData.append("ccode", ccode);
        formData.append("number1", number);
        formData.append("g-recaptcha-response", recaptchaToken);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            });

            if (!response.ok) {
                throw new Error(`Server returned ${response.status}`);
            }

            const html = await response.text();
            const extractedEmail = extractEmailFromHTML(html);
            return { html, extractedEmail };
        } catch (error) {
            console.error("Error submitting request:", error);
            throw error;
        }
    }

    // Helper to extract email from HTML
    function extractEmailFromHTML(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const text = doc.body.textContent;
        const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/);
        return match ? match[0] : null;
    }

    // Get On Board Submission
    async function getOnBoard(redirectURL, email, phone, name, recaptchaToken, ransomwareAgent) {
        try {
            const formData = new URLSearchParams();
            formData.append("email", email);
            formData.append("number", phone); // full phone with country code
            formData.append("cname", name);
            formData.append("g-recaptcha-response", recaptchaToken);
            formData.append("ransomware_agent", ransomwareAgent); // "enable" or "disable"

            const response = await fetch(redirectURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            });

            if (!response.ok) {
                throw new Error(`Server responded with status ${response.status}`);
            }

            const html = await response.text();
            const extractedEmail = extractEmailFromHTML(html);

            if (extractedEmail) {
                console.log(`✅ Thank you for onboarding: ${extractedEmail}`);
                navigate("/getonboard-thankyou", {
                    state: { email: extractedEmail },
                });
            } else {
                console.warn("⚠️ Could not extract email from server response.");
            }

            return { html, extractedEmail };
        } catch (err) {
            console.error("❌ Error in getOnBoard:", err.message);
            return null;
        }
    }


    // Reset Password
    const sendResetRequest = async (url, email) => {
        try {
            const formData = new URLSearchParams();
            formData.append("user", email);
            formData.append("btnLogin", "Submit");

            const response = await axios.post(url, formData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            const html = response.data;
            const successMessage = "Password reset link is sent to your registered email id";

            if (html.includes(successMessage)) {
              
                return true;
            } else {
                alert("Email not found !!.");
                return false;
            }
        } catch (err) {
            console.error("Error occurred:", err);
            return { success: false, message: "An unexpected error occurred." };
        }
    };

    return (
        <OneCloudContext.Provider
            value={{
                login,
                user,
                submitAccessRequest,
                getOnBoard,
                sendResetRequest,
            }}
        >
            {children}
        </OneCloudContext.Provider>
    );
}
