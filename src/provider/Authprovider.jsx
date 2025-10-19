import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [users, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

  const creatuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SinOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
      setLoding(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);




  const authdata = {
    users,
    setUser,
    creatuser,
    SinOut,
    Login,
    loding,
    setLoding
  };
  return <AuthContext value={authdata}>{children}</AuthContext>;
};

export default Authprovider;
