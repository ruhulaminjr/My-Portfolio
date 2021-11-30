import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import html from "../../images/html-5.png";
import css from "../../images/css.png";
import bootstrap from "../../images/bootstrap.png";
import tailwind from "../../images/tailwind.png";
import javascript from "../../images/javascript.png";
import reactjs from "../../images/react.png";
import nodejs from "../../images/nodejs.png";
import mongodb from "../../images/mongodb.png";
import mui from "../../images/mui.png";

const Hero = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="flex items-center justify-center mt-10 flex-col gap-3">
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-gray-100 font-bold">
          Hi,I'm <span className="text-yellow-400">Ruhul Amin</span>
        </h1>
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-gray-50 font-bold text-center">
          I’m a <span className="text-yellow-800">Mern</span> stack developer
        </h1>
        <div className="flex gap-4">
          {" "}
          <a href="/">
            <AiFillGithub className="text-white text-4xl" />
          </a>
          <a href="/">
            <AiFillLinkedin className="text-white text-4xl" />
          </a>
        </div>
        <div className="my-8">
          <button className="py-2 px-6 text-gray-50 font-bold border-2">
            My Skills
          </button>
        </div>
        <div className="flex gap-5 items-center justify-center flex-wrap">
          <img src={html} alt="html" width="60" height="40" />
          <img src={css} alt="html" width="60" height="40" />
          <img src={bootstrap} alt="html" width="60" height="40" />
          <img src={tailwind} alt="html" width="60" height="40" />
          <img src={mui} alt="html" width="60" height="40" />
          <img src={javascript} alt="html" width="60" height="40" />
          <img src={reactjs} alt="html" width="60" height="40" />
          <img src={nodejs} alt="html" width="60" height="40" />
          <img src={mongodb} alt="html" width="60" height="40" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
