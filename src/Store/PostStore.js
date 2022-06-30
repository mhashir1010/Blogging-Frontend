import React, { createContext, useContext, useState } from "react"

const PostData = createContext();

export const PostStore = ({children}) =>{
    const [posts,setPosts]=useState();
    const newPosts =setPosts;
    return <PostData.Provider value={{newPosts,posts}} >{children}</PostData.Provider>
}

export const usePostData = () => useContext(PostData);