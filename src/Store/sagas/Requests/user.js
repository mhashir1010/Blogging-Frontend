import axios from "axios";

export const requestUpdateUser = user =>{
    debugger;
    return fetch(`https://dummyjson.com/users/${user.user.id}`, {
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' },
        body: {...user.user}
      })
    // axios.request({
    //     method:'get',
    //     url:'https://dummyjson.com/products'
    // }).then(res=>{return res})
}