import axios from "axios";
import { useState    } from "react"
import {  useNavigate } from "react-router-dom";
import { setUser } from "../Store/Actions/UserActions";
import { ReduxStore } from "../Store/ReduxStore";
import { useUserData } from "../Store/Store";
import './Auth.css'


export const Auth = () => {
    // const {login} = useUserData();
    const navigate = useNavigate();
    const [title,setTitle] = useState('Log In');
    var [isSignUp,setIsSignUp]=useState(false);
    const [isLoading,setIsLoading] = useState(false);
    
    const [fName,setfName] = useState('')
    const [lName,setlName] = useState('')
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmPassword, setCnfrmPassword] = useState('');
    
    const submitHandler =  (event) => {
        if(isSignUp){
            event.preventDefault();
        }else{
            setIsLoading(true);
            axios.post('https://dummyjson.com/auth/login',{ username: userName, password: password }).then(res=>{
                    setIsLoading(false);
                    setUser(res.data);
                    localStorage.setItem(`x-access-token`, res.data.token);
                    navigate('/home');
                },err=>{
                    setIsLoading(false);
                }
            )         
        event.preventDefault();
        }
    }

    // useEffect(()=>{
        
    //     // console.log(data);
    //     },[data,signUpData])
    // useEffect(() => {
    //     console.log(signUpData);
    //     console.log(data);
    //     if(data || signUpData){
    //         navigate("/home")
    //     }
    // })
    return (
        <>
            <div className="col-xs-1 auth-container">
                <div className="auth-card">
                    {/* <form >
                        <h1>Log In</h1>
                        <label>User-Name : </label>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <br />
                        <label>Password : </label>
                        <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                        <button variant="primary" className="btn-primary"> Login </button>
                    </form> */}
                    <form onSubmit={submitHandler}>
                        <h1>{title}</h1>
                        {isSignUp && <span><div className="form-group">
                        <label>First Name</label>
                        <input type="text" value={fName} onChange={(e)=>setfName(e.target.value)} className="form-control" placeholder="Enter FirstName" />
                        </div>
                        <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value={lName} onChange={(e)=>setlName(e.target.value)} className="form-control" placeholder="Enter LastName" />
                        </div></span>
                        }
                        <div className="form-group">
                        <label>username address</label>
                        <input type="username" value={userName} onChange={(e)=>setUserName(e.target.value)} className="form-control" placeholder="Enter Username" />
                        </div>
                        <div className="form-group">
                        <label >Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
                        </div>
                        {isSignUp && <div className="form-group">
                        <label >Password</label>
                        <input type="password" value={cnfrmPassword} onChange={(e)=>setCnfrmPassword(e.target.value)} className="form-control" placeholder="Confirm Password"/>
                        </div>}
                        <div>
                            <button type="submit" className={"btn btn-primary"+(isLoading?'disabled':'')} >{title}</button>
                        </div>
                        <br/>
                        {!isSignUp &&<a href onClick={()=>{setIsSignUp(true);setUserName('');setPassword('');setTitle('Sign Up');}} >Didn't have an account? Sign Up</a>}
                        { isSignUp &&<a href onClick={()=>{setIsSignUp(false);setUserName('');setPassword('');setTitle('Log In');}} >Already Have an Account? Log In</a>}
                    </form>
                </div>
            </div>
        </>
    )
}