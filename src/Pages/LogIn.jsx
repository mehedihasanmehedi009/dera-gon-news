import { Link } from "react-router";

const LogIn = () => {
  return (
    <div className="flex  justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
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
        </div>
      </div>
    </div>
  );
};

export default LogIn;
