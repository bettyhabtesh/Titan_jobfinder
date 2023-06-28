/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Account from "../Account/Account";

const NavBar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  // const handleMenuToggle = () => {
  //   setShowMenu(!showMenu);
  // }

  const handleMenuMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMenuMouseLeave = () => {
    setShowMenu(false);
  };
  const handleLinkClick = () => {
    <Account />;
  };
  return (
    <div className="navbar flex justify-between items-center p-6">
      <div className="logoDiv">
        <h1 className="logo text-blueColor text-3xl ">
          <strong className="text-bold">Titan</strong> Job Finder
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-gray-600 hover:text-blueColor">Jobs</li>
        <li className="menuList text-gray-600 hover:text-blueColor">
          Companies
        </li>
        <li className="menuList text-gray-600 hover:text-blueColor">About</li>
        <li className="menuList text-gray-600 hover:text-blueColor">Contact</li>
        <li className="menuList text-gray-600 hover:text-blueColor">Blog</li>
      </div>

      <div className="menu flex gap-8">
        {!props.isLoggedin && (
          <li
            className="menuList text-gray-600 hover:text-blueColor"
            onClick={props.onLogin}
          >
            Login
          </li>
        )}
        {!props.isLoggedin && (
          <li
            className="menuList text-gray-600 hover:text-blueColor"
            onClick={props.onSignup}
          >
            Register
          </li>
        )}
        {props.isLoggedin && (
          <div
            className="flex flex-row-reverse"
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
          >
            <FontAwesomeIcon
              className="text-blueColor cursor-pointer hover:text-blue-400 text-2xl"
              icon={faUser}
            />
            {showMenu && (
              <div className="bg-white border border-gray-300 py-2 px-4 rounded-md shadow-lg">
                <ul>
                  <li className="text-gray-700 hover:text-blueColor cursor-pointer py-1">
                    Settings
                  </li>
                  <li
                    onClick={handleLinkClick}
                    className="text-gray-700 hover:text-blueColor cursor-pointer py-1"
                  >
                    My Account
                  </li>
                  <li
                    className="text-gray-700 hover:text-blueColor cursor-pointer py-1"
                    onClick={props.onLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
