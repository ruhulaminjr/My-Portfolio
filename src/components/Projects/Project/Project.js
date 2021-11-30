import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { BiCodeCurly } from "react-icons/bi";

const Project = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const location = useLocation();
  const pathid = location.pathname.split("/")[2];
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/ruhulaminjr/My-Portfolio/main/fakedata.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.find((item) => item.id.toString() === pathid);
        setData(filteredData);
        console.log(filteredData);
        setLoading(false);
      });
  }, [pathid]);
  if (loading) {
    return <h1 className="text-center mt-16 text-3xl text-white">Loading</h1>;
  }
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="container mx-auto bg-primary shadow-xl rounded-xl py-8 px-3 ">
        <div>Back</div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-white text-center lg:text-4xl font-bold">
            {data.title}
          </h1>
          <div className="flex gap-4  items-center justify-center my-6 flex-wrap">
            {data.pictures?.map((pic) => (
              <img
                src={pic}
                alt=""
                style={{ maxWidth: "300px", maxHeight: "350px" }}
                key={pic}
              />
            ))}
          </div>
          <p className="text-white text-base text-center md:w-2/3 lg:w-1/3">
            {data.desc}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={data.live}
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <AiOutlineEye className="text-yellow-400" /> View site
            </a>
            <a
              href={data.client}
              target="_blank"
              rel="noreferrer"
              className="text-yellow-400 font-bold px-3 py-2 cursor-pointer border border-yellow-600 flex gap-2 items-center"
            >
              <AiOutlineCode className="text-yellow-400" /> Client Code
            </a>
            <a
              href={data.server}
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
      </div>
    </div>
  );
};

export default Project;
