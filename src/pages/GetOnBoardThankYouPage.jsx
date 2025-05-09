import { useLocation } from "react-router-dom";

export default function GetOnBoardThankYouPage() {
    const location = useLocation();
    const email = location.state?.email || "Your email";

    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 text-center max-w-2xl w-full mx-auto border border-green-100">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-6 drop-shadow-sm">
            🎉 Thank You!
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            <span className="font-semibold text-green-700">{email}</span>, your access request to the <strong>One Cloud storage</strong> has been received.<br />
            We’ll get back to you shortly via email or phone.
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-block bg-[#59A033] hover:bg-[#4a8a2a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </section>
    );
}
