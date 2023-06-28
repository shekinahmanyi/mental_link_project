import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    // Perform login logic here
    if (email === 'example@example.com' && password === 'password') {
      // Successful login
      navigate('/dashboard');
    } else {
      // Failed login
      alert('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="pt-4 flex items-center justify-center h-screen ">
      <div className="max-w-md w-full p-6 bg-green-100 rounded-lg shadow-lg mb-24">
        <h2 className="text-3xl text-green-500 font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-green-500 text-lg">
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
            <label htmlFor="password" className="text-green-500 text-lg">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-3 py-2 rounded-lg bg-white focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-lg bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition duration-300"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-green-500 mt-4">
          Not created an account yet?{' '}
          <a href="/signup" className="underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
