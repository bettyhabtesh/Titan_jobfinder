/** @format */

import React from "react";

const Login = (props) => {
  return (
    <>
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <button
            type="button"
            onClick={props.onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="flex justify-center items-center text-textColor">
        Don't have an account{"      "}
        <button
          onClick={() => props.setMode("signup")}
          className="text-blue-500 hover:text-blue-700"
        >
          Create one now
        </button>
      </div>
    </>
  );
};

export default Login;
