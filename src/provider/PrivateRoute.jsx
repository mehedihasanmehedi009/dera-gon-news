import { use } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { users } = use(AuthContext);
//   console.log(users);
  if (users && users.email) {
    return children;
  }
  return <Navigate to="/auth/Login"></Navigate>;
};
export default PrivateRoute;
