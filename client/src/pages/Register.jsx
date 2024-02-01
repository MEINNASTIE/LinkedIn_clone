import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useUserContext } from "../context/user-context";

export default function Register() {
  const { registerHandler } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if email, password, and username are not empty
    if (!email.trim() || !password.trim() || !username.trim()) {
      setShowErrorMessage(true);
      return;
    }

    // Clear form and error message
    setEmail('');
    setPassword('');
    setUsername('');
    setShowErrorMessage(false);
    registerHandler(e)
  };

  return (
    <div className="p-8 mr-60 ml-60">
      <div className="flex items-center">
        <h3 className="text-[30px] font-bold text-[#0077b7] mr-1">Linked</h3>
        <img src="/assets/linkedin.png" alt="Logo" className="w-8 h-8" />
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[32px] mb-6">Make the most of your professional life</h1>
          <div className="w-full max-w-md">
            <div className="bg-white p-8 shadow-md rounded-md">
              {showErrorMessage && (
                <p className="text-red-500 mb-4">Please enter email, username, and password.</p>
              )}

              <form onSubmit={handleRegister}>

                <div className="mb-4">
                  <label htmlFor="username" className="block text-sm mb-2">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4 relative">
                  <label htmlFor="password" className="block text-sm mb-2">Password (6+ characters)</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <div
                    className="absolute top-9 right-3 cursor-pointer text-blue-500"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[12px] text-gray-500 mb-2">
                    By clicking Agree & Join, you agree to the LinkedIn{' '}
                    <span className="text-blue-600 font-bold">User Agreement</span>,{' '}
                    <span className="text-blue-600 font-bold">Privacy Policy</span>, and{' '}
                    <span className="text-blue-600 font-bold">Cookie Policy</span>.
                  </p>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full w-full hover:bg-blue-600 transition duration-300 ease-in-out"
                  >
                    Agree & Join
                  </button>
                </div>

                <p className="text-center">
                  Already on LinkedIn?{' '}
                  <Link to="/" className="text-blue-600 font-bold">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


