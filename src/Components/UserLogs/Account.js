/** @format */

import React, { useState } from "react";
import { FaTimes, FaPen, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Account = (props) => {
  const [image, setImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Bethelhem Habtamu");
  const [username, setUsername] = useState("@betty_habtesh");
  const [description, setDescription] = useState(
    "A passionate software engineer who have experience on frontend web development. I am highly interested in solving the real-life problems of the society using different tech solutions."
  );
  const [skills, setSkills] = useState([
    "Communication",
    "Web Page Designing",
    "Frontend Web development",
  ]);
  const [email, setEmail] = useState("bethelhem.habtamu@example.com");
  const [linkedin, setLinkedin] = useState(
    "https://www.linkedin.com/in/bethelhem-habtamu/"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSkillsChange = (event, index) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value);
  };

  const handleEditModeToggle = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full bg-white rounded-md overflow-hidden">
        <div className="relative h-40 bg-gray-200">
          {image ? (
            <img
              className="absolute w-full h-full object-cover"
              src={image}
              alt="Profile Image"
            />
          ) : (
            <img
              className="absolute w-full h-full object-cover"
              src="https://via.placeholder.com/640x360"
              alt="Profile Image"
            />
          )}
          <div className="absolute top-0 right-0 mr-4 mt-4">
            <FaTimes
              className="text-gray-600 hover:text-gray-800"
              onClick={props.onClose}
            />
          </div>
          <div className="absolute bottom-0 right-0 mr-4 mb-4">
            {(!image || editMode) && (
              <div>
                <label
                  htmlFor="profile-image"
                  className="px-4 py-2 bg-white rounded-md shadow-md cursor-pointer"
                >
                  Choose Image
                </label>
                <input
                  id="profile-image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            )}
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between">
            {!editMode ? (
              <h1 className="text-2xl text-blueColor font-bold">{name}</h1>
            ) : (
              <input
                type="text"
                className="text-2xl font-bold w-full"
                value={name}
                onChange={handleNameChange}
              />
            )}
            {!editMode && (
              <FaPen
                className="text-gray-500 hover:text-gray-800"
                onClick={handleEditModeToggle}
              />
            )}
          </div>
          <div className="mb-4">
            {!editMode ? (
              <p className="text-gray-500">{username}</p>
            ) : (
              <input
                type="text"
                className="text-gray-500 w-full"
                value={username}
                onChange={handleUsernameChange}
              />
            )}
          </div>
          <div className="mb-4">
            {!editMode ? (
              <p className="text-gray-700">{description}</p>
            ) : (
              <textarea
                className="text-gray-700 w-full"
                value={description}
                onChange={handleDescriptionChange}
              />
            )}
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">
              Skills {!editMode && `(${skills.length})`}
            </h2>
            {!editMode ? (
              <ul>
                {skills.map((skill, index) => (
                  <span key={index} className="block text-gray-500 ml-10 ">
                    {skill}
                  </span>
                ))}
              </ul>
            ) : (
              <div>
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      className="text-gray-500 w-full"
                      value={skill}
                      onChange={(event) => handleSkillsChange(event, index)}
                    />
                  </div>
                ))}
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                  onClick={() => setSkills([...skills, ""])}
                >
                  Add Skill
                </button>
              </div>
            )}
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Contact Information</h2>
            {!editMode ? (
              <div>
                <p className="text-gray-500">
                  <FaEnvelope className="text-blueColor ml-10 inline font-bold" />{" "}
                  : {email}
                </p>
                <p className="text-gray-500">
                  <FaLinkedin className="text-blueColor ml-10 inline font-bold" />{" "}
                  : {linkedin}
                </p>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  className="text-gray-500 w-full mb-2"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  type="text"
                  className="text-blue-600 w-full mb-2"
                  value={linkedin}
                  onChange={handleLinkedinChange}
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="cv" className="block text-gray-700 mb-2">
              <span className="text-gray-700 font-bold mb-2">
                CV:{"        "}
              </span>
              <input type="file" />
            </label>
          </div>
          <div className="flex justify-end">
            {editMode && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleEditModeToggle}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
