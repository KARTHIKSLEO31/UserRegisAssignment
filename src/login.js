import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Alert } from "react-bootstrap";

export const Login = () => {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
  
    const [flag, setFlag] = useState(false);
  


    const handleSubmit = (e) => {
        e.preventDefault();
        let pass = localStorage.getItem("Password").replace(/"/g, "");
        let mail = localStorage.getItem("Email").replace(/"/g, "");

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setFlag(false);
        }
    }


    return (
        <div>
            <div className="container pt-3">
                <form onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>
                    <div className="form-group">
                        <input onChange={(e) => setEmaillog(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input onChange={(e) => setPasswordlog(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    </div>
                    <button type="button">Login</button>
                    {flag && (
                        <Alert color="primary" variant="warning">
                            Fill correct Info else keep trying.
                        </Alert>
                    )}
                </form>
                <div className='reg-link'>
                    <Link className='link' to='/register'>
                        <li>If not Registered,Register Now</li>
                    </Link>
                </div>
                <br />
                <div className="forgot-link">
                    <Link className='link' to='/forgot'>
                        <li>forgot Password</li>
                    </Link>
                </div>
                <br />
                <div className="forgot-link">
                    <Link className='link' to='/change'>
                        <li>change Password</li>
                    </Link>
                </div>
            </div>
        </div>
    )
}