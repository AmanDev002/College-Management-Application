import React from "react";
import { Link } from "react-router-dom";

const LoginRequired = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-2xl shadow-lg text-center">
        {/* Lock Icon */}
        <div className="text-6xl mb-6">🔒</div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Access Restricted!
        </h1>

        <h3 className="text-lg font-semibold text-gray-500 mb-4">
          Login Required
        </h3>

        {/* Description */}
        <p className="text-gray-500 leading-relaxed mb-8">
          You need to log in to access this page. Please sign in to your account
          to continue.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login Now
          </Link>

          <Link
            to="/"
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg transition duration-300"
          >
            Go to Home
          </Link>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-7">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline ml-1"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginRequired;
