import React from "react";
import sunglassimg from "../../images/sunglass.png";
import meddical from "../../images/meddical.png";
import touresite from "../../images/destination.png";
import { AiOutlineLink } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
          <img
            src={sunglassimg}
            alt="projects thumbnail"
            style={{ width: "100%", height: "100%" }}
            className="rounded-xl object-cover	"
          />
        </div>
        <div className="w-full md:w-3/4 bg-primary flex flex-col space-y-1 p-2 items-center justify-center gap-3">
          <h3 className="font-black text-gray-50 md:text-2xl lg:text-3xl text-xl text-center">
            EyeCare Sunglass | Niche Product Website
          </h3>
          <NavLink
            to="/view/111"
            className="py-3 px-6 text-base bg-white text-gray-800 font-bold rounded-xl flex gap-2 items-center"
          >
            View Details <AiOutlineLink className="text-gray-800 test-base" />
          </NavLink>
        </div>
      </div>
      {/* Projects 2  */}
      <div className="relative flex flex-col-reverse md:flex-row  md:space-y-0 rounded-xl shadow-lg p-2 max-w-xs md:max-w-4xl mx-auto bg-primary my-10">
        <div className="w-full md:w-3/4 bg-primary flex flex-col space-y-1 p-2 items-center justify-center gap-3">
          <h3 className="font-black text-gray-50 md:text-2xl lg:text-3xl text-xl text-center">
            Tourism Destination Booking Site
          </h3>
          <NavLink
            to="/view/222"
            className="py-3 px-6 text-base bg-white text-gray-800 font-bold rounded-xl flex gap-2 items-center"
          >
            View Details <AiOutlineLink className="text-gray-800 test-base" />
          </NavLink>
        </div>
        <div className="w-full md:w-1/2 bg-primary grid place-items-center">
          <img
            src={touresite}
            alt="projects thumbnail"
            style={{ width: "100%", height: "350px" }}
            className="rounded-xl object-cover	"
          />
        </div>
      </div>
      {/* Projects 3  */}
      <div className="relative flex flex-col md:flex-row  md:space-y-0 rounded-xl shadow-lg p-2 max-w-xs md:max-w-4xl mx-auto bg-primary">
        <div className="w-full md:w-1/2 bg-primary grid place-items-center">
          <img
            src={meddical}
            alt="projects thumbnail"
            style={{ width: "100%", height: "350px" }}
            className="rounded-xl object-cover	"
          />
        </div>
        <div className="w-full md:w-3/4 bg-primary flex flex-col space-y-1 p-2 items-center justify-center gap-3">
          <h3 className="font-black text-gray-50 md:text-2xl lg:text-3xl text-xl text-center">
            Meddical Health Care Services Website
          </h3>
          <NavLink
            to="/view/333"
            className="py-3 px-6 text-base bg-white text-gray-800 font-bold rounded-xl flex gap-2 items-center"
          >
            View Details <AiOutlineLink className="text-gray-800 test-base" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Projects;
