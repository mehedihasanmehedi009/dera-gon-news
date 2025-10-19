 
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
 

export const AuthContext = createContext();

const Authprovider = ({children}) => {

    const creatuser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const  unsubscribe = onAuthStateChanged(auth,(currenUser)=>{
            setUser(currenUser);
        })
        return()=>{
           unsubscribe()
        }
    },[])

    const [users,setUser]=useState( null);
  console.log(users)
    const authdata = {
        users,
        setUser
        ,creatuser

    }
    return <AuthContext value={authdata}>{children}</AuthContext>
};

export default Authprovider;