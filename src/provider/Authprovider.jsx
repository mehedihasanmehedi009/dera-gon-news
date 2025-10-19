 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase.config";
 

export const AuthContext = createContext();

const Authprovider = ({children}) => {
    const creatuser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const [user,setUser]=useState( null);
    const authdata = {
        user,
        setUser
        ,creatuser

    }
    return <AuthContext value={authdata}>{children}</AuthContext>
};

export default Authprovider;