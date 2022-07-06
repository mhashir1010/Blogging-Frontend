import { useEffect, useState } from 'react';
import { Footer } from '../Layout/Footer';
import { Header } from '../Layout/Header';
import '../Profile/profile.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Post } from '../Shared/Post';
import { Loader } from '../Shared/Loader';
import  ReduxStore  from '../Store/ReduxStore';
import { setUser, updateUser } from '../Store/Actions/UserActions';
export const Profile = () =>{
    const [isEdit,setIsEdit] = useState(false);
    var editableData = {};
    const [page,setPage] = useState(1);
    const [userData,setUserData] = useState(undefined);
    const params = useLocation();

    const user = ReduxStore.getState().user;
    const [posts,setPosts] = useState(undefined);
    
    useEffect(()=>{
        params.state!==null ? getData(params.state.userid) : getCurrentUser();
    },[params]);


    const getCurrentUser = () =>{
        if(user.id===undefined){
            getData(localStorage.getItem('userId'));
        }else{
            setUserData(user);
        }
    }

    const showData=() =>{
        updateUser({...userData,...editableData})
        setUserData({...userData,...editableData});
    }

    const getData =(id)=>{
        axios.get(`https://dummyjson.com/users/${id}`).then(res=>{
            setUserData(res.data);
            editableData=res.data;
            console.log(editableData);
        })
    }
    const getPosts = (id) =>{
        axios.get(`https://dummyjson.com/posts/user/${id}`).then(res=>{
            const tempPosts = res.data.posts;
            setPosts(tempPosts.map(obj=>({...obj,user:userData})));
            })
    }

    return(
    <>
    <Header />
        <div className=''>
            <div className="card m-50 container emp-profile" style={{height:!userData?`69vh`:``}}>
                {userData && <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={userData?.image} alt=""/>
                                {params.state===null && <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file"/>
                                </div>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                        <h5>
                                            {userData?.firstName+' '+userData?.lastName}
                                        </h5>
                                        <h6>
                                            {userData.company.name}
                                        </h6>
                                        <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className={"nav-link "+(page===1?'active':'')} id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" onClick={()=>setPage(1)}>About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={"nav-link "+(page===2?'active':'')} id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false" onClick={()=>{setPage(2);getPosts(userData.id)}}>Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {params.state === null && <div className="col-md-2">
                            <input type="button" className="profile-edit-btn" 
                            onClick={()=>{
                                if (isEdit) { showData(); }
                                setIsEdit(!isEdit);
                            }
                            }
                            name="btnAddMore" value={isEdit?"Save Changes":"Edit Profile"}/>
                        </div>}
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="">Website Link</a><br/>
                                <a href="">Bootsnipp Profile</a><br/>
                                <a href="">Bootply Profile</a>
                                <p>SKILLS</p>
                                <a href="">Web Designer</a><br/>
                                <a href="">Web Developer</a><br/>
                                <a href="">WordPress</a><br/>
                                <a href="">WooCommerce</a><br/>
                                <a href="">PHP, .Net</a><br/>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="tab-content" id="myTabContent">
                                <div className={"tab-pane profile-tab fade " +(page===1?'show active':'')} id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Username</label>
                                                </div>
                                                <div className="col-md-6">
                                                    {isEdit && <input value={editableData?.company?.department} onChange={(e)=>{editableData.username = e.target.value}} ></input>}
                                                    {!isEdit && <p>@{userData?.username}</p>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label >{isEdit?'First Name':'Name'}</label>
                                                </div>
                                                <div className="col-md-6">
                                                    {isEdit && <input value={editableData?.firstName} onChange={(e)=>{editableData.firstName =e.target.value}} ></input>}
                                                    {!isEdit && <p>{userData?.firstName+' '+userData?.lastName}</p>}
                                                </div>
                                            </div>
                                            {isEdit && <div className="row">
                                                <div className="col-md-6">
                                                    <label>Last Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    {isEdit && <input value={editableData?.lastName} onChange={(e)=>{editableData.lastName = e.target.value}} ></input>}
                                                </div>
                                            </div>}
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    {isEdit && <input type='email' value={editableData.email} onChange={(e)=>{editableData.email = e.target.value;}} ></input>}
                                                    {!isEdit && <p>{userData?.email}</p>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div className="col-md-6">
                                                    {isEdit && <input value={editableData?.phone} onChange={(e)=>{editableData.phone = e.target.value;}} ></input>}
                                                    {!isEdit && <p>{userData.phone}</p>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Profession</label>
                                                </div>
                                                <div className="col-md-6">
                                                    {isEdit && <input value={editableData?.company?.department} onChange={(e)=>{editableData['company'] ={ department:e.target.value}}} ></input>}
                                                    {!isEdit && <p>{userData.company.department}</p>}
                                                </div>
                                            </div>
                                </div>
                                <div className={"tab-pane fade"+(page===2?'show active':'')} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    {posts && posts.map(post=>{
                                        return(<Post post={post} />)
                                    })}
                                    {
                                        !posts && <Loader />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form> }
                {!userData && <Loader />}          
            </div>
        </div> 
    <Footer />
    </>
    )
}