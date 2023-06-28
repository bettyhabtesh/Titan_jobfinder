/** @format */

import React from "react";

const Account = () => {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden">
        <div class="relative h-40 bg-gray-200">
          <img
            class="absolute w-full h-full object-cover"
            src="https://via.placeholder.com/640x360"
            alt="Profile Image"
          />
          <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <label
              for="profile-image"
              class="px-4 py-2 bg-white rounded-md shadow-md cursor-pointer"
            >
              Choose Image
            </label>
            <input id="profile-image" type="file" class="hidden" />
          </div>
        </div>
        <div class="p-6">
          <h1 class="text-2xl font-bold mb-4">My Account</h1>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">
              Bethelhem Habtamu
            </label>
            {/* <input
              id="name"
              type="text"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            /> */}
          </div>
          <div class="mb-4">
            <label for="username" class="block text-gray-700 font-bold mb-2">
              @betty_habtesh
            </label>
            {/* <input
              id="username"
              type="text"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            /> */}
          </div>
          <div className="mb-4">
            Software Engineering Student @AASTU Addis Ababa, Ethiopia
          </div>
          <div className="mb-4">
            <li className="text-blueColor">Contact info</li>
          </div>
          <div className="mb-4">
            <label htmlFor="cv" class="block text-gray-700font-bold mb-2">
              CV:
              <input type="file" />
            </label>
          </div>
          <button class="bg-blueColor text-white px-4 py-2 rounded-md hover:bg-indigo-600">
            Add other infos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
