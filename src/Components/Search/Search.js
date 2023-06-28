/** @format */

import React from "react";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const Search = () => {
  /*  const [loggedIn, setLoggedIn] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  if (loggedIn) {
    return <Loginpage />;
  }
  const handleSignup = () => {
    setSignup(true);
  };
  if (signup) {
    return <SignupUser />;
  } */
  return (
    <>
      <div className="searchDiv grid gap-10 bg-slate-300 rounded-[10px] p-[3rem]">
        <form action="">
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-slate-400 ">
            <div className="flex gap-2 items-center">
              <AiOutlineSearch className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent tet-blue-500 focus:outline-none w-[100%]"
                placeholder="Search Job here...."
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            <div className="flex gap-2 items-center">
              <BsHouseDoor className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent tet-blue-500 focus:outline-none w-[100%]"
                placeholder="Search By Company...."
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            <div className="flex gap-2 items-center">
              <CiLocationOn className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent tet-blue-500 focus:outline-none w-[100%]"
                placeholder="Search By Location..."
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
              Search
            </button>
          </div>
        </form>

        <div className="secDiv flex items-center  gap-10 justify-center">
          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[808080] font-semibold ">
              Sort by:{" "}
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option>Relevance</option>
              <option>Inclusive</option>
              <option>Starts with</option>
              <option>Contains</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="type" className="text-[808080] font-semibold ">
              Type:{" "}
            </label>
            <select
              name=""
              id="type"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option>Full-time</option>
              <option>Remote</option>
              <option>Contrat</option>
              <option>Part-time</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="level" className="text-[808080] font-semibold ">
              Level:{" "}
            </label>
            <select
              name=""
              id="level"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option>Senior</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advocate</option>
            </select>
          </div>
          <span className="text-[#a1a1a1] cursor-pointer ">Clear All</span>
        </div>
      </div>
      <div class="text-[#483D8B] flex m-2 items-center justify-center">
        <h1 className="text-[20px] ">
          <strong>Connecting you to your dream job</strong>
        </h1>
      </div>

      <div className="choicesDiv m-2 flex items-center justify-center">
        <span>Be a member</span>
        <button
          /* onClick={handleSignup} */ className="bg-blueColor h-full p-2 px-5 rounded-[10px] text-white cursor-pointer hover:bg-blue-400"
        >
          Sign up
        </button>
        <span className="">Already have an Account?</span>
        <button
          /* onClick={handleLogin} */ className="bg-blueColor  p-2 px-5 rounded-[10px] text-white cursor-pointer hover:bg-blue-400"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Search;
