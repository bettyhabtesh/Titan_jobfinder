/** @format */

import { useRef } from "react";

const AuthForm = (props) => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const birthDateRef = useRef();
  const genderRef = useRef();
  const educationRef = useRef();
  const photoRef = useRef();
  const skillsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;
    const birthDate = birthDateRef.current.value;
    const gender = genderRef.current.value;
    const education = educationRef.current.value;
    const photo = photoRef.current.files[0];
    const skills = skillsRef.current.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">
          {props.mode === "Login" ? "Login" : "SignUp"}
        </h2>
        {props.mode === "signup" && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="full-name">
                Full Name:{" "}
              </label>
              <input
                ref={fullNameRef}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="full-name"
                type="text"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address:{" "}
              </label>
              <input
                ref={emailRef}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="phone-number"
              >
                Phone Number:{" "}
              </label>
              <input
                ref={phoneNumberRef}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone-number"
                type="number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="phone-number"
              >
                Password:{" "}
              </label>
              <input
                ref={passwordRef}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone-number"
                type="number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="birth-date">
                Birth Date
              </label>
              <input
                ref={birthDateRef}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="birth-date"
                type="date"
                placeholder="Enter birth date"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2"> Gender</label>
              <div className="flex">
                <div className="mr-4">
                  <input
                    className="mr-2 leading-tight"
                    type="radio"
                    id="check-male"
                    name="gender"
                    checked
                  />
                  <label className="text-sm" htmlFor="check-male">
                    Male
                  </label>
                </div>
                <div>
                  <input
                    className="mr-2 leading-tight"
                    type="radio"
                    id="check-female"
                    name="gender"
                  />
                  <label className="text-sm" htmlFor="check-female">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Education</label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option hidden>Education</option>
                <option value="">Highschool</option>
                <option value="">Undergraduate</option>
                <option value="">Postgraduate</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Photo</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                name="name"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Skills</label>
              <div className="flex flex-wrap">
                <div className="mr-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value="webdevelopment"
                      className="form-checkbox"
                    />
                    <span className="ml-2">Communication</span>
                  </label>
                </div>
                <div className="mr-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value="accounting"
                      className="form-checkbox"
                    />
                    <span className="ml-2">Web Development</span>
                  </label>
                </div>
                <div className="mr-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value="sales"
                      className="form-checkbox"
                    />
                    <span className="ml-2">Sales</span>
                  </label>
                </div>
                <div className="mr-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value="law"
                      className="form-checkbox"
                    />
                    <span className="ml-2">Team Work</span>
                  </label>
                </div>
                <div className="mr-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value="law"
                      className="form-checkbox"
                    />
                    <span className="ml-2">Graphics Design</span>
                  </label>
                </div>
                <div className="mr-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="skills"
                      value="other"
                      className="form-checkbox"
                    />
                    <span className="ml-2">Web Design</span>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
        {props.mode === "Login" && (
          <>
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
          </>
        )}

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {props.mode === "Login" ? "Login" : "SignUp"}
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
        {props.mode === "Login" ? (
          <>
            Don't have an account{"      "}
            <button
              onClick={() => props.setMode("signup")}
              className="text-blue-500 hover:text-blue-700"
            >
              Create one now
            </button>
          </>
        ) : (
          <>
            Already have an account{"     "}
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

export default AuthForm;
