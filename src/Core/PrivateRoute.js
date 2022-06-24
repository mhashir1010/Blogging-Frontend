// import { Outlet , Navigate } from "react-router-dom";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import { Home } from "../Home/Home";

export const PrivateRoute =(props) =>{
    let token= localStorage.getItem('token');
    if(token!==null){
        console.log(token);
        return  <Outlet />
    }else{
        return  <Navigate to='/auth' />
    }
}

export const Private2Route = ({children}) =>{
    const authed = localStorage.getItem('token') // isauth() returns true or false based on localStorage
    console.log(authed);
    return authed ? children : <Navigate to="/Home" />;
}

export const NoAuthGaurd =(props)=>{
    let token = localStorage.getItem('token');
    console.log(token[0]);
    if(token!==null){
        return <Navigate to='/home' />
    }else{
        return  <Auth />

    }
}