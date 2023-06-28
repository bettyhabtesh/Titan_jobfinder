/** @format */

import React from "react";
import Sample from "../../Assets/Sample.avif";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem] ">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block ">
        The value that hold us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center jusify-center">
              <img src={Sample} alt="company" className="w-[70%] mr-5" />
              <span className="font-semiBold text-textColor text-[18px]">
                Simplicity
              </span>
            </div>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] ">
            Things being made beautiful made simple are at the heart of
            everything to do
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center jusify-center">
              <img src={Sample} alt="company" className="w-[70%] mr-5" />
              <span className="font-semiBold text-textColor text-[18px]">
                Simplicity
              </span>
            </div>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] ">
            Things being made beautiful made simple are at the heart of
            everything to do
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center jusify-center">
              <img src={Sample} alt="company" className="w-[70%] mr-5" />
              <span className="font-semiBold text-textColor text-[18px]">
                Simplicity
              </span>
            </div>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] ">
            Things being made beautiful made simple are at the heart of
            everything to do
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
