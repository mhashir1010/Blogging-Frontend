import { useState, useEffect } from "react"
import { Link ,useNavigate } from "react-router-dom";
import './Auth.css'

export const Auth = () => {
    const navigate = useNavigate();
    const [title,setTitle] = useState('Log In');
    var [isSignUp,setIsSignUp]=useState(false);
    
    const [fName,setfName] = useState('')
    const [lName,setlName] = useState('')
    const [email, seteMail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmPassword, setCnfrmPassword] = useState('');
    
    const [signUpData, setSignUpData] = useState();
    const [data, setData] = useState();

    
    const submitHandler = async (event) => {
        if(isSignUp){
        await setSignUpData({firstName:fName , lastName:lName, email: email, password: password })
        event.preventDefault();
        }else{
        await setData({ email: email, password: password })
        event.preventDefault();
        }
    }
    useEffect(() => {
        if(data || signUpData){
            navigate("/home")
        }
    }, [data,signUpData])
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
                        <input type="text" value={fName} onChange={(e)=>setfName(e.target.value)} className="form-control" placeholder="Enter Username" />
                        </div>
                        <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value={lName} onChange={(e)=>setlName(e.target.value)} className="form-control" placeholder="Enter Username" />
                        </div></span>
                        }
                        <div className="form-group">
                        <label>Email address</label>
                        <input type="email" value={email} onChange={(e)=>seteMail(e.target.value)} className="form-control" placeholder="Enter Username" />
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
                            <button type="submit" className="btn btn-primary">{title}</button>
                        </div>
                        <br/>
                        {!isSignUp &&<a href onClick={()=>{setIsSignUp(true);seteMail('');setPassword('');setTitle('Sign Up');}} >Didn't have an account? Sign Up</a>}
                        { isSignUp &&<a href onClick={()=>{setIsSignUp(false);seteMail('');setPassword('');setTitle('Log In');}} >Already Have an Account? Log In</a>}
                    </form>
                </div>
            </div>
        </>
    )
}