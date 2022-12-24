import React, { useState } from "react";
import { validEmail, validPassword } from './regex.js';
import { Alert } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [flag, setFlag] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        if (!validEmail.test(email)) {
            setEmailErr(true);
        }
        if (!validPassword.test(password)) {
            setPwdError(true);
        }

        if (!name || !email || !password || !phone || !address) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));     
        }
    }


    return (
        <div>
            <div className="container pt-3">
                <form onSubmit={handleSubmit}>
                    <h1>REGISTER</h1>
                    <div className="form-group">
                        <label htmlFor="name">Full name</label>
                        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="name">Phone Number</label>
                        <input value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} id="name" placeholder="Phone Number" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    </div>
                    {emailErr && <p>Your email is invalid</p>}
                    <br />
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input value={address} name="address" onChange={(e) => setAddress(e.target.value)} id="address" placeholder="address" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    </div>
                    {pwdError && <p>Your password is invalid</p>}
                </form>
                <div className='login-btn'>
                    <Link to='/home'>
                        <button type="submit">Register</button>
                    </Link>
                 </div>
                <div className='reg-link'>
                    <p>If Account exist then</p><Link className='link' to='/login'><li>Login!!!</li></Link>
                </div>
                {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
                )}
            </div>
        </div>
    )
}