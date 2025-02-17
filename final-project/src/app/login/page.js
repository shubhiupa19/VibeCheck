"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
            console.log("Login successful!", data);
            localStorage.setItem('token', data.token);
            router.push('/dashboard');
        }
        else {
            console.log("Error with logging in: ", data);
            setError("Login Credentials are Invalid");
        }
    } catch (error) {
        console.log(error);
        setError("Internal server error");
    }
    
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-black mb-6">Login</h1>
      <form
        onSubmit={handleLogin}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
      {
        error && (
          <div className="text-red-500 font-medium mt-4">
            {error}
          </div>
        )
      }
      <Link href="/register" className="text-green-500 hover:text-green-700 underline font-medium mt-4"> Not a user? Register here! </Link>
    </div>
  );
};

export default LoginPage;
