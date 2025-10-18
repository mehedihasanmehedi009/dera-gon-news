import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
const FindUs = () => {
  return (
    <div className="">
      <h1 className="font-bold">Find Us On</h1>

      <div className="  ">
        <button className="btn bg-base-100 join-item w-full justify-start">
          <FaFacebook />
          Facebook
        </button>
        <button className="w-full btn bg-base-100 join-item justify-start">
          <FiTwitter /> <span className="">Twitter</span>
        </button>
        <button className=" w-full btn bg-base-100 join-item justify-start">
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
