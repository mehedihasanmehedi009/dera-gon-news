import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/Authprovider";

const Registar = () => {
  const {creatuser,setUser}= use(AuthContext)
  const handelregistar = (e) => {
    e.preventDefault();
    // console.log("mehedi")
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, photo, email, password });
    creatuser(email,password)
    .then((res)=>{
      console.log(res.user)
      setUser(res.user)
    })
   .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });
  };

  return (
    <div className="flex  justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handelregistar} className="card-body">
          <h1 className="text-3xl text-center font-bold">
            Register your account
          </h1>
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="Photo"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
              
              />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required

            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required

            />
            <p>Accept Term & Conditions</p>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <Link to="/auth/Login" className="text-center font-bold">
            Allready Have An Account ?{" "}
            <span className="  underline cursor-pointer text-blue-700  hover:text-blue-600">
              {" "}
              Log In
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registar;
