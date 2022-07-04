import axios from "axios";
import { ReduxStore } from "../ReduxStore";
import { useUserData } from "../Store";

export const setUser = user =>{
        if(user!==undefined){
            localStorage.setItem('userId',user.id);
            ReduxStore.dispatch({
                type : "SET_USER",
                payload : {user},
            })
        }else{
            let id=localStorage.getItem('userId');
            axios.get(`https://dummyjson.com/users/${id}`).then(res=>{
                setUser(res.data)
            })
        }
    
};

export const delUser = () =>{
        ReduxStore.dispatch({
            type : "DEL_USER",
        })
};