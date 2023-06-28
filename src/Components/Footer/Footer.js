/** @format */

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer p-[5rem] mb-4 bg-slate-300 rounded-[10px gap-[8] grid grid-cols-5 m-auto items-center justify-center ">
        <div>
          <div className="logoDiv">
            <h1 className="logo text-[25px] text-[#DDA0DD] pb-[1.5rem] ">
              <strong>Titan</strong>Job Finder
            </h1>
          </div>
          <p className="text-slate-700 pb-[13px] opacity-70 leading-7 ">
            <h3 id="about">About</h3>
            <p>
              <a href="About.html">About us</a>
            </p>
            <p>
              <a href="About.html">How it works</a>
            </p>
            <p>
              <a href="About.html">Careers</a>
            </p>
            <p>
              <a href="About.html">Accessibility</a>
            </p>
            <p>
              <a href="About.html">Advertising</a>
            </p>
          </p>
        </div>

        <div className="grid">
          <h3>Terms</h3>
          <p>
            <a href="terms.html">Privacy Policy</a>
          </p>
          <p>
            <a href="terms.html"> Terms and Conditions</a>
          </p>
          <p>
            <a href="terms.html"> Copyright Policy</a>
          </p>
          <p>
            <a href="terms.html"> Code of Conduct</a>
          </p>
        </div>

        <div className="grid">
          <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-slate-700">
            Company
          </span>
          <div className="grid gap-3">
            <p>
              <h3 id="about">Contact Us</h3>
              <p>
                <a href="titan">titan1212@gmail.com</a>
              </p>
              <p>
                <a href="About.html">+251940851866/+251989596357</a>
              </p>
              <p>
                <a href="About.html">
                  {" "}
                  AASTU, Tulu Dimtu, Addis Ababa, Ethiopia
                </a>
              </p>
            </p>
          </div>
        </div>
        <div className="grid">
          <p>
            <h3 id="about">Job seekers</h3>
            <p>
              <a href="About.html">Find Jobs</a>
            </p>
            <p>
              <a href="About.html">Register</a>
            </p>
            <p>
              <a href="About.html">post CV</a>
            </p>
            <p>
              <a href="About.html">Job Alerts</a>
            </p>
          </p>
        </div>
      </div>
      <div className="copyright pl-[25rem] bg-slate-300">
        <p>
          Placeholder ® is a registered Trademark of Placeholder Technology Pty
          Limited ()
        </p>
        <p>Copyright &copy; 2022 Placeholder Technology Pty Limited ()</p>
      </div>
    </>
  );
};

export default Footer;
