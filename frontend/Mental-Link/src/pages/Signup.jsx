import React from 'react';

function Signup() {
  return (
    <div className="pt-24 flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-3xl text-blue-500 font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-blue-500 text-lg">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-blue-500 text-lg">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-lg bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-blue-500 mt-4">
          Already have an account? <a href="/login" className="underline">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
