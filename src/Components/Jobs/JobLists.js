/** @format */

import React from "react";
import { BiTimeFive } from "react-icons/bi";
const JobLists = () => {
  const Data = [
    {
      id: 1,
      title: "Web Developer",
      time: "now",
      location: "Canada",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "Novac Linus Co..",
    },
    {
      id: 2,
      title: "UI Designer",
      time: "14hrs",
      location: "Manchister",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "Liquid accessments",
    },
    {
      id: 3,
      title: "Software Eng",
      time: "10hrs",
      location: "London",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "Web dev Agency",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      time: "7Hrs",
      location: "Germany",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "Government",
    },
    {
      id: 5,
      title: "Product Designer",
      time: "now",
      location: "Manchester",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "NewCastle",
    },
    {
      id: 6,
      title: "Researcher",
      time: "2Days",
      location: "Manchester",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "Nin Co..",
    },
    {
      id: 7,
      title: "Lead Developer",
      time: "now",
      location: "Manchester",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "Nimeloi - UK",
    },
    {
      id: 8,
      title: "Data Scientist",
      time: "5hrs",
      location: "Manchester",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "Name and Sons",
    },
    {
      id: 9,
      title: "Backend Eng",
      time: "2hrs",
      location: "Manchester",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab.",
      company: "Selam PLC...",
    },
  ];

  return (
    <>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg  "
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#5959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white ">
                {desc}
              </p>
              <div className="compnay flex items-center gap-2 ">
                <img src="" alt="" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white ">
                  {company}
                </span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black ">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
      <div className="post border-[2px]"></div>
    </>
  );
};

export default JobLists;
