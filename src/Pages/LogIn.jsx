import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/Authprovider";

const LogIn = () => {
    const { Login } = use(AuthContext)
  const hanedelLogin = e =>{
     e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({  email, password });
    Login(email,password)
    .then((res)=>{
      console.log(res.user)
    })
    .catch((error)=>{
      console.log(error)
    })
     
  }
  return (
    <div className="flex  justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={hanedelLogin} className="card-body">
          <h1 className="text-3xl text-center font-bold">Login your account</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <Link to="/auth/Registar" className="text-center font-bold">
            Dont’t Have An Account ?{" "}
            <span className="  underline cursor-pointer text-blue-700  hover:text-blue-600">
              {" "}
              Register
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
