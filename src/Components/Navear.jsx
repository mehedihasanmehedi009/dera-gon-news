import React from "react";
import { NavLink } from "react-router";
import Img from "../../src/assets/user.png";

const Navear = () => {
  return (
    <div className="flex justify-between  items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Career</NavLink>
      </div>
      <div className=" flex gap-3">
        <img src={Img} alt="" />
        <button className="btn btn-primary px-10">Log In</button>
      </div>
    </div>
  );
};

export default Navear;
