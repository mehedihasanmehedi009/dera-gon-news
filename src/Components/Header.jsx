import React from "react";
import logo from "../../src/assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className=" mt-5 flex justify-center flex-col gap-3 items-center ">
      <img className="w-[400px]" src={logo} alt="" />

      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE  dd  MMMM  yyyy")}
      </p>
    </div>
  );
};

export default Header;
