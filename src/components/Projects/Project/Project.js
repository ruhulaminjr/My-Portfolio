import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

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
        const filteredData = data.find((item) => item.id == pathid);
        setData(filteredData);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container mx-auto bg-primary shadow-xl rounded-xl h-screen py-8">
      <div>Back</div>
      <div>
        <h1 className="text-white text-center lg:text-4xl font-bold">
          {data.title}
        </h1>
      </div>
    </div>
  );
};

export default Project;
