import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Img from "../../src/assets/user.png";
import { AuthContext } from "../provider/Authprovider";

const Navear = () => {  
  const{users ,SinOut}=use(AuthContext)

  const hendel = () =>{
    SinOut().then(()=>{
      alert("Log out Succseful")
    })
    .catch((error)=>{
        console.log(error)
  })
}
  return (
    <div className="flex justify-between  mx-auto  items-center p-7">
      <div className="">{users && users.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Career</NavLink>
      </div>
      <div className=" flex gap-3">
        <img src={Img} alt="" />
         {
          users?      <Link  onClick={hendel} className="btn btn-primary px-10">
          Log Out
        </Link> :<Link to="/auth/Login" className="btn btn-primary px-10">
          Log In
        </Link>
         }
      </div>
    </div>
  );
};

export default Navear;
