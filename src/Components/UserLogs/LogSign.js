/** @format */

import { useState } from "react";
// import "./AuthForm.css";

const LogSign = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          {props.mode === "Login" ? "Login" : "SignUp"}
        </h2>
        {props.mode === "signup" && (
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}
        {props.mode === "signup" && (
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={props.onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="flex justify-center items-center text-textColor">
        {props.mode === "Login" ? (
          <>
            Don't have an account{" "}
            <button
              onClick={() => props.setMode("signup")}
              className="text-blue-500 hover:text-blue-700"
            >
              Create one now
            </button>
          </>
        ) : (
          <>
            Already have an account{" "}
            <button
              onClick={() => props.setMode("Login")}
              className="text-blue-500 hover:text-blue-700"
            >
              Login
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default LogSign;
