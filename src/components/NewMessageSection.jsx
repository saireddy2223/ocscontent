import { Link } from "react-router-dom";

export default function NewMessageSection() {
    return (
        <>
            {/* New Message Section */}
            <div className="w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1400px] mx-auto mt-10 px-4 md:px-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <h2 className="text-2xl font-bold text-green-700 mb-2">
                        Additional Storage Security services for medium enterprises
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        You now can freely deploy our secure, cross-cloud storage gateway, that is built upon Zero Trust Cloud Storage principle,
                        with invisible data foundation model, with no data being stored in any cloud location in a way that makes sense to an attacker –
                        even with a quantum compute attack – powered by our market pioneering US patent - <strong>US 9128626</strong> and backed by <strong>3 more Granted US patents</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-6">
                        {/* External form redirecting to /login_AMG.php */}
                        {/* <a href={'https://www.onecloudstorage.com/login_AMG.php'}>
                            <button className="bg-[#59A033] hover:bg-[#4a8a2a] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md transition cursor-pointer">
                                Join us now!
                            </button>
                        </a> */}

                        {/* Internal form */}
                        <Link to={'/enquiry'}>
                            <button className="bg-[#59A033] hover:bg-[#4a8a2a] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md transition cursor-pointer">
                                Join us now!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}