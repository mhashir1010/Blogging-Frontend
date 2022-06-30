import { Footer } from "../Layout/Footer"
import { Header } from "../Layout/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import { Loader } from '../Shared/Loader'
import { Post } from '../Shared/Post'

// let skip=0;

export const Home = () =>{
    //loader variables
    const [isLoading,setIsLoading] = useState(false);
    const [loadMoreLoader,setLoadMoreLoader] = useState(false);
    //core variables
    const [posts,setPosts] = useState([]);
    const [completePosts,setCompletePosts] = useState([]);
    //post index
    const [skip,setSkip]=useState(0);
    // var skip=0;
    
    const getPosts = () =>{
        axios.get(`https://dummyjson.com/posts?limit=10&skip=${skip}`).then(res=>{
            setPosts(res.data.posts);
        });
    }
    useEffect(()=>{
        setIsLoading(true);
        getPosts();
    },[]);
    useEffect(()=>{
        getPosts();
    },[skip])

    useEffect(()=>{
        const tempPosts = posts;
        const promisesArray = [];
        tempPosts.forEach((e,i) => {
            promisesArray.push(axios.get(`https://dummyjson.com/users/${e.userId}`));
        });
        Promise.all(promisesArray).then(values => {
            values.map((res, index) => {
                tempPosts[index].user = res.data;
            });
            setCompletePosts(tempPosts);
            }).catch(error => {
                console.log(error);
            });
    },[posts]);

    useEffect(()=>{
        setLoadMoreLoader(false);
        completePosts.length>0 &&setIsLoading(false);
    },[completePosts])

    const getMorePosts = () =>{
        setLoadMoreLoader(true);
        setSkip(skip+10);
        // skip+=10;
        // getPosts();
    }
    return (
        <>
            <Header />
                    <div className="card m-5 shadow-lg p-0 p-md-5 bg-white rounded" style={{height:isLoading?`69vh`:``}}>
                        {
                            !isLoading &&<Post post={completePosts} skip={skip}/>
                            //  <span>
                            //     {completePosts.map((post, index)=>{
                            //         return(<>
                            //             <Post key={post.id + index} post={post} ></Post>
                            //         </>)
                            //     })}
                            // </span>
                        }
                        {
                            isLoading && <Loader></Loader>
                        }
                        { !loadMoreLoader&& !isLoading &&<div className="text-center" onClick={getMorePosts}>
                            <a className="p-3 mb-2 bg-primary text-white">Load more...</a>
                        </div>}
                        {   loadMoreLoader && <Loader />}
                    </div>
            <Footer />
        </>
    )
}