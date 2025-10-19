 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
 

export const AuthContext = createContext();

const Authprovider = ({children}) => {

    const creatuser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const Login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

     const SinOut = () =>{
      return  signOut(auth)
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
        setUser,
        creatuser,
        SinOut,
        Login 

    }
    return <AuthContext value={authdata}>{children}</AuthContext>
};

export default Authprovider;