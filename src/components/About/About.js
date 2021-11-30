import React from "react";
import ruhulimg from "../../images/ruhul.jpg";
import Navbar from "../Navbar/Navbar";
const About = () => {
  return (
    <div>
        <Navbar/>
      <div class="container mx-auto mt-24">
        <div class="md:flex no-wrap md:-mx-2 ">
          <div class="w-full md:w-3/12 md:mx-2">
            <div class="bg-primary p-2 border-t-4 border-green-400">
              <div class="image overflow-hidden">
                <img
                  class="h-auto w-full mx-auto"
                  src={ruhulimg}
                  alt="ruhul amin"
                />
              </div>
              <h1 class="text-gray-100 font-bold text-xl leading-8 my-1">
                Ruhul Amin
              </h1>
              <h3 class="text-gray-200 font-lg font-bold leading-6">
                Fornt-End Webdeveloper
              </h3>
              <p class="text-sm text-gray-200 hover:text-gray-300 leading-6">
                I have been interested in technology since childhood. That's why
                I became interested in coding and I learned the basics of coding
                from YouTube and Udemy. Then complete the Complete Web
                Development Course from Programming Hero.
              </p>
            </div>
            <div class="my-4"></div>
          </div>
          <div class="w-full md:w-9/12 mx-2 h-64">
            <div class="bg-primary p-2 shadow-sm rounded-sm">
              <div class="flex items-center font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-100">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">Ruhul</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">Amin</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">Male</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">+8801881344947</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Current Address</div>
                    <div class="px-4 py-2">Jamalpur,Bangladesh</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-2 py-2">
                      <a
                        class="text-yellow-400"
                        href="mailto:ruhuldevs@gmail.com"
                      >
                        ruhuldevs@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
