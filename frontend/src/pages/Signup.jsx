import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    // Perform signup logic here
    if (email && password) {
      // Successful signup
      alert("Signup successful");
    } else {
      // Failed signup
      alert("Please provide email and password");
    }

    // Reset the form
    setEmail("");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="pt-24 flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-3xl text-blue-500 font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-blue-500 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-blue-500 text-lg">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-lg bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-blue-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
