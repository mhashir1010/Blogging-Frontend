import { Footer } from "../Layout/Footer"
import { Header } from "../Layout/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import { Loader } from '../Shared/Loader'
import { Post } from '../Shared/Post'



export const Home = () =>{
    //loader variables
    const [isLoading,setIsLoading] = useState(false);
    //core variables
    const [posts,setPosts] = useState([]);
    const [completePosts,setCompletePosts] = useState();
    //not working
    const [users,setUsers] = useState([]);
    const uss=[];

    useEffect(()=>{
        posts.forEach((e,i) => {
            axios.get(`https://dummyjson.com/users/${e.userId}`).then(res=>{
                posts[i].user=res.data;
            });
        setCompletePosts(posts);
            
        });
        console.log(posts);
        setIsLoading(false);
    },[posts])
    const getData = (posts) => {
        console.log(posts);
        posts.forEach((e,i) => {
            console.log(i);
            axios.get(`https://dummyjson.com/users/${e.userId}`).then(res=>{
                posts[i].user=res.data;
            });
            
        });
        console.log(posts);
        // setPosts(postz);
        setIsLoading(false);

    }
    useEffect(()=>{
        setIsLoading(true);
        axios.get(`https://dummyjson.com/posts?limit=10`).then(res=>{
            setPosts(res.data.posts);
        });
    },[]);

    return (
        <>
            <Header />
                <div>
                    <div className="card m-5 shadow-lg p-0 p-md-5 bg-white rounded" style={{height:isLoading?`69vh`:``}}>
                        {
                            !isLoading && <span>
                                {completePosts?.map(post=>{
                                    console.log(post);
                                    return(<>
                                    <Post key={post.id} post={post} user={post.user}></Post>
                                    </>)
                                })}
                            </span>
                        }
                        {
                            isLoading && <Loader></Loader>
                        }
                    </div>
                </div>
                {/* <Button variant="primary" onClick={() => setModalShow(true)}>Launch vertically centered modal</Button> */}
            <Footer />
        </>
    )
}