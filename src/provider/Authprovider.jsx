import { createContext, useState } from "react";

export const AuthContext = createContext()
const Authprovider = ({children}) => {
    const [user,setUser]=useState({
        name:"mehedi",
        email:"mehedihasan@gmail.com"
    })
    const authdata = {
        user,
        setUser

    }
    return <AuthContext value={authdata}>{children}</AuthContext>
};

export default Authprovider;