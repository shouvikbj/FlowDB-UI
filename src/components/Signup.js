import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.getElementById("signup-form");
    await fetch(`${API}/signup`, {
      method: "POST",
      body: new FormData(form),
      mode: "cors",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          alert(data.message);
          navigate("/login");
        } else {
          alert(data.message);
        }
      });
  };

  useEffect(() => {
    document.title = "FlowDB | Signup";
    return () => {
      document.title = "FlowDB";
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        id="signup-form"
        className="bg-gray-800 p-8 rounded-xl shadow-md w-96 text-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-400"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-full bg-gray-700"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-full bg-gray-700"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-400"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-full bg-gray-700"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 float-right"
        >
          Sign Up
        </button>
        <div>
          <Link to={"/login"} className="text-slate-400 mx-auto">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
