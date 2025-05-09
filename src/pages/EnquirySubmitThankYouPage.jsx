export default function EnquirySubmitThankYouPage() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f5f6f0] px-4">
        <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
          <p className="text-gray-700 text-lg">
            Your access request to the <strong>Cross Cloud Data Gateway</strong> has been received.
            We’ll get back to you shortly via email or phone.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-block mt-4 bg-[#59A033] hover:bg-[#4a8a2a] text-white px-6 py-3 rounded-md font-medium transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    );
  }
  