import React from "react";
import myImg from "../components/cover.PNG";
const About = () => {
  return (
    <>
   <h1 className="p-4 text-primary d-flex justify-content-center">Hi , We are Best Buy</h1>
   <dev className="w-100 d-inline-flex p-4 m-2"><p className="">Best Buy began with a simple vision where innovative technology can be combined with inspirational design to help people access pristine products easily and sustainably..</p></dev>
   <img className="w-100 h-100 p-5 m-3 " src={myImg}  /> 
   </>
  );
};

export default About;
