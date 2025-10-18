import React from "react";
import { Link, NavLink } from "react-router";
import Img from "../../src/assets/user.png";

const Navear = () => {
  return (
    <div className="flex justify-between  mx-auto  items-center p-7">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Career</NavLink>
      </div>
      <div className=" flex gap-3">
        <img src={Img} alt="" />
        <Link to="/auth/Login" className="btn btn-primary px-10">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navear;
