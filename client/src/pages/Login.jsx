import { Link } from "react-router-dom";
import { useUserContext } from "../context/user-context";

export default function Login() {
   const { loginHandler } = useUserContext();

  return (
    <div className="bg-white p-8 mr-60 ml-60 shadow-md rounded-md mt-20">
    <div className="flex items-center justify-between mb-20">
      <div className="flex items-center">
      <h3 className="text-[30px] font-bold text-[#0077b7] mr-1">Linked</h3>
      <img src="/assets/linkedin.png" alt="Logo" className="w-8 h-8" />
      </div>
      <div className="flex space-x-4 items-center">
        <Link to="/register">
        <button className="font-bold">Join now</button>
        </Link>
        <button className="border border-blue-600 rounded-full font-bold text-blue-600 px-5 py-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">Sign in</button>
      </div>
    </div>

    <div className="flex justify-between relative">
      <div className="w-1/3">
        <h1 className="mb-5 text-[54px] text-[#C06A47] font-thin">Welcome to your professional community</h1>
        <form onSubmit={loginHandler}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />

          <input
            type="password"
            name="password"
            placeholder="Password (8+ characters)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
          <p className="text-[12px] text-gray-500 mb-2">By clicking Agree & Join, you agree to the LinkedIn <span className="text-blue-600 font-bold">User Agreement</span>, <span className="text-blue-600 font-bold">Privacy Policy</span>, and <span className="text-blue-600 font-bold">Cookie Policy</span>. </p>
          <div className="flex items-center justify-between mb-4">
            
              <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">Agree & Join</button>
          </div>
        </form>
      </div>

      <div className="w-1/3">
        <img src="/assets/login.svg" alt="Image" className="w-1/3 h-auto absolute right-48" />
      </div>
    </div>
  </div>
  );
}
