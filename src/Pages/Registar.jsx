import React from "react";
import { Link } from "react-router";

const Registar = () => {
  return (
    <div className="flex  justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold">
            Register your account
          </h1>
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Photo URL</label>
            <input type="Photo" className="input" placeholder="Photo URL" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <p>Accept Term & Conditions</p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <Link to="/auth/Login" className="text-center font-bold">
            Allready Have An Account ?{" "}
            <span className="  underline cursor-pointer text-blue-700  hover:text-blue-600">
              {" "}
              Log In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registar;
