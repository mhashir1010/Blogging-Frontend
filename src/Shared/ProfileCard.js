import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faFacebookF ,faTwitter , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid'
import axios from "axios"
import { Modal } from "react-bootstrap";
import { Loader } from "./Loader";
import '../Shared/shared.css'
import { useNavigate } from "react-router-dom";


fontawesome.library.add(faFacebookF,faTwitter,faInstagram,faArrowRight);


export const ProfileCard = (props) => {
    const navigate = useNavigate();
    const [profile,setProfile] = useState();
    const [isLoading,setIsLoading] = useState(false);

    const getData = () =>{
        if(props.userbody){
            setProfile(props.userbody)
        }else if(props.userid!==-1){
            setIsLoading(true);
            axios.get(`https://dummyjson.com/users/${props.userid}`).then(res=>{
                setIsLoading(false);
                // console.log('*',res);
                setProfile(res.data);
        })
        }else{
            console.log('Neither user id or user object found');
        }
        
    }
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onEnter={()=>getData()}
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body className="card p-0 inset-y-20" style={{height:isLoading?`55vh`:``,width:isLoading?`75vh`:``}}>
            {!isLoading && <section className="rounded-pill" style={{backgroundColor:'#f4f5f7'}} >
             <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col px-0 py-0 col-lg-6 mb-4 mb-lg-0" style={{width: "-webkit-fill-available"}}>
                <div className="card rounded-lg">
                    <div className="row g-0 rounded-pill">
                    <div className="col-md-4 gradient-custom text-center text-white rounded-t-lg rounded-b-lg">
                        <img src={profile?.image}
                        alt="Avatar" className="img-fluid my-5" style={{width: 80+'px'}} />
                        <h5>{profile?.firstName+' '+profile?.lastName}</h5>
                        <p>{profile?.company.department}</p>
                        <div onClick={()=>navigate('/profile',{state:{userid:profile.id}})}>see more <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-4">
                        <h6>Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                            <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{profile?.email}</p>
                            </div>
                            <div className="col-6 mb-3">
                            <h6>Phone</h6>
                            <p className="text-muted">{profile?.phone}</p>
                            </div>
                        </div>
                        <h6>Projects</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                            <div className="col-6 mb-3">
                            <h6>Recent</h6>
                            <p className="text-muted">Lorem ipsum</p>
                            </div>
                            <div className="col-6 mb-3">
                            <h6>Most Viewed</h6>
                            <p className="text-muted">Dolor sit amet</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <a href="#!"><FontAwesomeIcon icon="fa-brands fa-facebook-f fa-2xl me-3" /></a>
                            <a href="#!"><FontAwesomeIcon icon="fa-brands fa-twitter fa-lg me-3" /></a>
                            <a href="#!"><FontAwesomeIcon icon="fa-brands fa-instagram fa-lg me-3" /></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>}

            {isLoading && <Loader className="my-auto"></Loader>}
        </Modal.Body>
        {/* <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer> */}
      </Modal>  
    
  )
}