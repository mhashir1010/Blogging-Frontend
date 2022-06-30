import axios from "axios"
import { useEffect, useState } from "react"
import { Footer } from "../Layout/Footer"
import { Header } from "../Layout/Header"
import { Loader as Lloader } from "../Shared/Loader"
import { ProfileCard } from "../Shared/ProfileCard"
import './Requests.css'

export const Requests = () =>{
    const [requests,setRequests] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const [query,setQuery] = useState('');
    const [userBody,setUserBody] = useState();
    const [profileModal,setProfileModal] = useState(false);


    // useEffect(()=>{
    //     setIsLoading(true)
    //     axios.get(`https://dummyjson.com/users?limit=6`).then(res=>{
    //         setRequests(res.data.users);
    //         console.log(res.data.users);
    //         setIsLoading(true)
    //     })

    // },[]);
    useEffect(()=>{
        setIsLoading(true);
        axios.get(`https://dummyjson.com/users/search?q=${query}&limit=6`).then(res=>{
            setRequests(res.data.users);
            setIsLoading(false)
        })
    },[query])

    return (
        <>
            <Header />
            <div className="card m-5 p-0 p-md-5 text-center shadow-lg mb-5 bg-white rounded" >
                <div className="row row-cols-1 justify-content-between row-cols-md-3">
                    <div></div>
                    <div><h1 className="col">Requests</h1></div>
                    <div><input className="cols-3 my-2 rounded-3" onChange={(e)=>{setQuery(e.target.value)}} value={query} placeholder="search..."></input></div>
                </div>
                <div className="card-group">
                    <div className="card inset-y-20" style={{height:isLoading?`45vh`:``}}>
                        {!isLoading && <div className="row row-cols-1 row-cols-md-3">
                                {
                                    requests?.map((request,i)=>{
                                        return (
                                        <div key={i} className="col m-auto p-4">
                                        <div className="card h-100" onClick={()=>{setUserBody(request);setProfileModal(true)}}>
                                        <div><img className="card-img-top margin-left: 25% w-16 md:w-32 lg:w-5 max-width:50%" style={{maxWidth:50+'%'}} src={request.image} alt="Hollywood Sign on The Hill"/></div>
                                        <div className="card-body">
                                            <h5 className="card-title">{`${request.firstName} ${request.lastName}`}</h5>
                                            <p className="card-text">
                                            This is a longer card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                            </p>
                                        </div>
                                        <div className="row row-cols-4 justify-content-evenly">
                                            <button className="btn btn-danger m-2 width: max-content;">Reject</button>
                                            <button className="btn btn-primary m-2 width: max-content;">Accept</button>
                                        </div>
                                        </div>
                                        </div>)
                                         
                                    })
                                }
                        </div>}
                        {isLoading && <Lloader></Lloader>}
                    </div>
                </div>
                <ProfileCard show={profileModal} userbody={userBody} onHide={() => setProfileModal(false)}></ProfileCard>
            </div>
                
            <Footer />
        </>
    )
}