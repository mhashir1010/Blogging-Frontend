import React, { createContext, useContext } from "react"
import { useLocalStorage } from "react-use";

const UserData = createContext();

export const Store = ({children}) =>{
    const [user,setUser,del]=useLocalStorage('user',undefined);
    const login =setUser;
    const logout = del;
    return <UserData.Provider value={{login,logout,user}} >{children}</UserData.Provider>
}

export const useUserData = () => useContext(UserData);