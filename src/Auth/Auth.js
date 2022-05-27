import { useState, useEffect } from "react"
import './Auth.css'

export const Auth = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState({ user: '', pass: '' });
    const submitHandler = async (event) => {
        await setData({ user: userName, pass: password })
        event.preventDefault();
    }
    useEffect(() => {
        
    }, [data])
    return (
        <>
            <div className="auth-container">
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
                        <h1>Log In</h1>
                        <div className="form-group">
                        <label>Email address</label>
                        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} className="form-control" placeholder="Enter Username" />
                        </div>
                        <div className="form-group">
                        <label >Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Log In </button>
                    </form>
                </div>
            </div>
        </>
    )
}