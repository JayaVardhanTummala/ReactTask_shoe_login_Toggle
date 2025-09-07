import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [pw, setPW] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function userNameChange(e) {
    setUserName(e.target.value);
    if (error) setError("");
  }

  function pwChange(e) {
    setPW(e.target.value);
    if (error) setError("");
  }

  function loginClick() {
    if (userName === "jaya" && pw === "12345") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Glassmorphism card */}
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h2>

        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-600 bg-gray-700 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            onChange={userNameChange}
            type="text"
            placeholder="Username"
            value={userName}
          />
          <input
            className="border border-gray-600 bg-gray-700 text-white p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            onChange={pwChange}
            type="password"
            placeholder="Password"
            value={pw}
          />

          {error && (
            <p role="alert" className="text-red-400 text-sm font-medium animate-pulse">
              {error}
            </p>
          )}

          <button
            onClick={loginClick}
            className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transform transition-all text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Login
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
