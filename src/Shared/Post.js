import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faThumbsUp, faHeart , faComment,faShare  } from '@fortawesome/fontawesome-free-solid'
import axios from "axios";
import { Collapse } from "react-bootstrap";
import { Loader } from "./Loader";
import { ProfileImage } from "./ProfileImage";
import { ProfileCard } from "./ProfileCard";
import { MyVerticallyCenteredModal } from "./imageModal";

fontawesome.library.add(faThumbsUp, faHeart , faComment , faShare);

export const Post = ({post,skip}) =>{
    //modal openers
    const [modalShow, setModalShow] = useState(false);
    const [profileImgModal,setProfileImgModal] = useState(false);
    const [profileModal,setProfileModal] = useState(false);
    //loader
    const [cmntLoad,setComntLoad] = useState(false);
    //for opening specific comment box in feed
    const [postId,setPostId] =useState(0);

    const [postData,setPostData] = useState([]);
    const [modalId,setModalId] = useState(-1);
    const [profileImageLink,setProfileImageLink] = useState('');
    const [comments,setComments] = useState();

    // console.log(skip,postData.length);

    // useEffect(()=>{
    //     if(postData.length>)
    //     setPostData(postData.concat(post));
    // },[])

    useEffect(()=>{
            setPostData(postData.concat(post));
    },[post])
    
    const showComment =(id)=>{
        // console.log(id,postId);
        if(id===postId){
            setPostId(-1);
        }else{
            setComntLoad(true);
            setPostId(id);
            axios.get(`https://dummyjson.com/comments/post/${id}`).then(res=>{
                setComntLoad(false);
                setComments(res.data.comments);
            })
        }
        
    }
    const postComment = (key,id) =>{
        if(key==="Enter"){
            fetch('https://dummyjson.com/comments/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                body: 'This makes all sense to me!',
                postId: id,
                userId: 5,
            })
            })
            .then(res => res.json())
            .then(console.log);
        }
    }
    // console.log(post);
    return(<>
        {
            postData.map(post=>{
                return(
                    <div className='card mb-3 rounded-12'>
                        <div className="card-body">
                            <div className="d-flex mb-3">
                                <a href="#!"><img src={post?.user?.image} style={{height:40+"px"}} onClick={()=>{setProfileImgModal(true);setProfileImageLink(post?.user?.image)}} className="border rounded-circle me-2"  alt="Avatar"  /></a>
                                <div>
                                <p data-dismiss="modal" data-toggle="modal" onClick={()=>{setProfileModal(true);setModalId(post.userId)}} className="text-dark mb-0"><strong>{post?.user?.firstName+' '+post?.user?.lastName}</strong></p>
                                <a href="" className="text-muted d-block" ><small>10h</small></a>
                                </div>
                            </div>
                            <div><p>{post?.body}</p></div>
                        </div>
                        <div className="bg-image hover-overlay ripple rounded-0 mx-2 text-center" data-mdb-ripple-color="light">
                            <img src={`https://source.unsplash.com/random/${post.id}`}style={{height:75+'vh'}} className="img-fluid" onClick={() => setModalShow(true)}/>
                            <a href="#!">
                                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                            </a>
                        </div>
                        <div className="card-body ">
                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                <a href="">
                                    <FontAwesomeIcon icon="fa-solid fa-thumbs-up text-primary" />
                                    <FontAwesomeIcon color="red" icon="fa-solid fa-heart text-danger" />
                                    <span className="text-decoration-none">{post?.reactions}</span>
                                </a>
                                </div>
                                <div>
                                <a href="" className="text-muted"> 8 comments </a>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between text-center border-top border-bottom mb-4 flex-wrap">
                                <button type="button" className="btn btn-link btn-lg text-decoration-none" data-mdb-ripple-color="dark">
                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up text-primary" /> Like
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-link btn-lg text-decoration-none"  
                                    data-mdb-ripple-color="dark"
                                    onClick={() => {showComment(post.id)}}
                                    aria-controls="example-collapse-text"
                                    >
                                <FontAwesomeIcon icon="fa-solid fa-comment" /> Comment
                                </button>
                                <button type="button" className="btn btn-link btn-lg text-decoration-none" data-mdb-ripple-color="dark">
                                <FontAwesomeIcon icon="fa-solid fa-share" /> Share
                                </button>
                            </div>
                            <div className="d-flex mb-3">
                                <a href="">
                                <img src={post?.user?.image} className="border rounded-circle me-2"
                                    style={{height:40+"px"}} alt="Avatar" />
                                </a>
                                <div className="form-outline w-100">
                                <input className="form-control" onKeyUp={e=>{postComment(e.code,post.id)}} placeholder="Write a comment" rows="2"></input> 
                                </div>
                            </div>
                            <Collapse key={post?.id} in={postId===post?.id}>
                                <div id="example-collapse-text">
                                    {!cmntLoad && comments?.map(comment=>{
                                        return(
                                        <div className="d-flex mb-3">
                                            <a href="">
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="border rounded-circle me-2"
                                                style={{height:40+"px"}} alt="Avatar"  />
                                            </a>
                                            <div>
                                            <div className="bg-light rounded-3 px-3 py-1">
                                                <a href="" className="text-dark mb-0">
                                                <strong>{comment.user.username}</strong>
                                                </a>
                                                <a href="" className="text-muted d-block">
                                                <small>{comment.body}</small>
                                                </a>
                                            </div>
                                            <a href="" className="text-muted small ms-3 me-2"><strong>Like</strong></a>
                                            <a href="" className="text-muted small me-2"><strong>Reply</strong></a>
                                            </div>
                                        </div>
                                        )
                                    })}
                                    {cmntLoad && <Loader></Loader>}
                                </div>
                            </Collapse>
                        </div>
                    </div>
                )
            })
        }
        <ProfileImage show={profileImgModal} image={profileImageLink} onHide={()=>setProfileImgModal(false)}></ProfileImage>
        <ProfileCard show={profileModal} userid={modalId} onHide={() => setProfileModal(false)}></ProfileCard>
        <MyVerticallyCenteredModal show={modalShow} image={'https://source.unsplash.com/random/500x500'} onHide={() => setModalShow(false)}    />
    </>)
}