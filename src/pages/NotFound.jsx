import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col flex-grow justify-center items-center text-center py-20">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-xl mt-4 text-gray-600">
                Oops! The page you're looking for doesn't exist.
            </p>
            <div className="mt-10 text-center">
                <Link
                    to="/"
                    className="inline-block px-5 py-2 bg-[#21a045] text-white rounded hover:bg-[#45a049] transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
