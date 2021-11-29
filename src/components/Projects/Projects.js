import React from "react";
import sunglassimg from "../../images/sunglass.png";
import { AiOutlineEye } from "react-icons/ai";

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
        <div className="w-full md:w-3/4 bg-primary flex flex-col space-y-1 p-2 items-center justify-center">
          <span className="text-md font-semibold text-gray-400 justify-self-start">
            Mern Stack
          </span>
          <h3 className="font-black text-gray-50 md:text-2xl lg:text-3xl text-xl">
            EyeCare Sunglass | Niche Product Website
          </h3>
          <p className="md:text-lg hidden md:block text-gray-100">
            This is a EyeCare Sunglass product Selling website,Website has many
            Features including Admin panel ,User Authentication System With
            Firebase.Orders Managment System ,Adding Products To Website etc.
          </p>
          <div className="my-8 flex gap-3 flex-wrap">
            <a
              href="https://sunglass-26d38.web.app/"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 font-bold px-3 py-2 cursor-pointer border border-green-600 flex gap-2 items-center"
            >
             <AiOutlineEye className="text-green-400"/> View site
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
    </div>
  );
};

export default Projects;
