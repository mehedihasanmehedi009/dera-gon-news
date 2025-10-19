import { use } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/loading";
 

const PrivateRoute = ({ children }) => {
  const { users,loding } = use(AuthContext);
const loaction = useLocation()
console.log(loaction)

if(loding){
  return <Loading></Loading>
}
//   console.log(users);
  if (users && users.email) {
    return children;
  }
  return <Navigate state={loaction.pathname} to="/auth/Login"></Navigate>;
};
export default PrivateRoute;
