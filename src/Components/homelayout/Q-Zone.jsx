import React from "react";
import swimm from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import play from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-300 p-5 ">
      <h1 className="font-bold text-lg mb-5">Q-Zone</h1>
      <div className="flex flex-col items-center space-y-5">
        <img src={swimm} alt="Swimming" className="" />
        <img src={classImg} alt="Class" className="" />
        <img src={play} alt="Playground" className="" />
      </div>
    </div>
  );
};

export default QZone;
