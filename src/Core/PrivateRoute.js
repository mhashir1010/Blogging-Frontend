// import { Outlet , Navigate } from "react-router-dom";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../Auth/Auth";
import { Home } from "../Home/Home";

export const PrivateRoute =(props) =>{
    let token= localStorage.getItem('token');
    if(token!=null){
        console.log('dfsfd');
        return  <Outlet />
    }
    // else{
    //     return  <Navigate to='/auth' />
    // }
    // <Navigate to='/requests' />
}

export const Private2Route = ({children}) =>{
    const authed = localStorage.getItem('x-access-token') // isauth() returns true or false based on localStorage
    console.log(authed);
    return authed ? children : <Navigate to="/home" />;
}

export const NoAuthGaurd =(props)=>{
    let token = localStorage.getItem('x-access-token');
    // console.log(token[0]);
    // if(token!==null){
    //     return <Navigate to='/home' />
    // }else{
    //     return  <Auth />

    // }
    return token ? <Navigate to="/home" /> : <Auth />;
}