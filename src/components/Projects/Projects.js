import React from "react";
import sunglassimg from "../../images/sunglass.png";
import meddical from "../../images/meddical.png";
import touresite from "../../images/destination.png";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-10">
        <button className="py-2 px-6 text-gray-50 font-bold border-2">
          My Projects
        </button>
      </div>
      <div className="relative flex flex-col md:flex-row  md:space-y-0 rounded-xl shadow-lg p-2 max-w-xs md:max-w-4xl mx-auto bg-primary">
        <div className="w-full md:w-1/3 bg-primary grid place-items-center">
          <img src={sunglassimg} alt="tailwind logo" className="rounded-xl" />
        </div>
        <div className="w-full md:w-3/4 bg-primary flex flex-col space-y-1 p-2 items-center justify-center gap-3">
          <span className="text-md font-semibold text-gray-400 justify-self-start">
            Mern Stack
          </span>
          <h3 className="font-black text-gray-50 md:text-2xl lg:text-3xl text-xl">
            EyeCare Sunglass | Niche Product Website
          </h3>
          <p className="md:text-lg hidden md:block text-gray-100 mb-2">
            This is a EyeCare Sunglass product Selling website,Website has many
            Features including Admin panel ,User Authentication System With
            Firebase.Orders Managment System ,Adding Products To Website etc.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://sunglass-26d38.web.app/"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <AiOutlineEye className="text-yellow-400" /> View site
            </a>
            <a
              href="https://github.com/ruhulaminjr/Sunglass-website-Client"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <AiOutlineCode className="text-yellow-400" /> Client Code
            </a>
            <a
              href="https://github.com/ruhulaminjr/Sunglass-Website-Server"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <BiCodeCurly className="text-yellow-400" /> Server Code
            </a>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="listitem">React Js</span>
            <span className="listitem">Material Ui</span>
            <span className="listitem">Firebase</span>
            <span className="listitem">NodeJs</span>
            <span className="listitem">Mongodb</span>
          </div>
        </div>
      </div>
      {/* Projects 2  */}
      <div className="relative flex flex-col-reverse md:flex-row  md:space-y-0 rounded-xl shadow-lg p-2 max-w-xs md:max-w-4xl mx-auto bg-primary my-10">
        <div className="w-full md:w-3/4 bg-primary flex flex-col space-y-1 p-2 items-center justify-center gap-3">
          <span className="text-md font-semibold text-gray-400 justify-self-start">
            Mern Stack
          </span>
          <h3 className="font-black text-gray-50 md:text-2xl lg:text-3xl text-xl">
            Tourism Destination Booking Site
          </h3>
          <p className="md:text-lg hidden md:block text-gray-100 mb-2">
            Tour Destination Booking Features Added.Implemented Add To Cart ,manage Cart ,Login ,Registration System with Firebase.Add Destination To Homepage Features.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://happy-destination-d6da3.web.app/"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <AiOutlineEye className="text-yellow-400" /> View site
            </a>
            <a
              href="https://github.com/ruhulaminjr/Tourism-Site-Client"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <AiOutlineCode className="text-yellow-400" /> Client Code
            </a>
            <a
              href="https://github.com/ruhulaminjr/Tourism-Server-Side"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <BiCodeCurly className="text-yellow-400" /> Server Code
            </a>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="listitem">React Js</span>
            <span className="listitem">Tailwind Css</span>
            <span className="listitem">Firebase</span>
            <span className="listitem">NodeJs</span>
            <span className="listitem">Mongodb</span>
            <span className="listitem">React Hook Form</span>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-primary grid place-items-center">
          <img src={touresite} alt="tailwind logo" className="rounded-xl" />
        </div>
      </div>
      {/* Projects 3  */}
      <div className="relative flex flex-col md:flex-row  md:space-y-0 rounded-xl shadow-lg p-2 max-w-xs md:max-w-4xl mx-auto bg-primary">
        <div className="w-full md:w-1/3 bg-primary grid place-items-center">
          <img src={meddical} alt="tailwind logo" className="rounded-xl" />
        </div>
        <div className="w-full md:w-3/4 bg-primary flex flex-col space-y-1 p-2 items-center justify-center gap-3">
          <span className="text-md font-semibold text-gray-400 justify-self-start">
            Mern Stack
          </span>
          <h3 className="font-black text-gray-50 md:text-2xl lg:text-3xl text-xl">
            Meddical Health Care Services Website
          </h3>
          <p className="md:text-lg hidden md:block text-gray-100 mb-2">
            Health Care Website With Firebase Authentication System
            Implemented.Services Booking ,Private Route ,Form Validation Added.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://meddical-c1cd1.web.app/"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <AiOutlineEye className="text-yellow-400" /> View site
            </a>
            <a
              href="https://github.com/ruhulaminjr/Meddical-Heatlcare-Website"
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <AiOutlineCode className="text-yellow-400" /> Client Code
            </a>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="listitem">React Js</span>
            <span className="listitem">Tailwind Css</span>
            <span className="listitem">Firebase</span>
            <span className="listitem">React Router</span>
            <span className="listitem">Hook Form</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
