import React, {useContext, useState} from 'react';
import loggedContext from '../../utils/userContext'
import './Login.css'
import axios from 'axios';
import{ BrowserRouter as Router, Redirect} from "react-router-dom";

export default function ({logIn, setLogIn}) {

    const {user, login, signUp} = useContext(loggedContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [userName, setUserName] = useState('')


    const handleSignUp =()=>{
        password === passwordConfirm ? signUp({username: userName, email: email, password: password}) : console.log('passwords not matching!')
    }
    

    // function register(){
    //     if (!userName || !email || !password || !password2){
    //         return alert("Please enter all feilds");
    //     }
    //     if(password !== password2){
    //         return alert ("Passwords need to match");
    //     }
    //     axios.post('/user/register', {
    //         username: userName,
    //         email: email,
    //         password: password
    //     }).then(function (res){
    //         return res.data;
    //     }).catch(function (err){
    //         console.log(err);
    //     })  
    // }
    return (
        <div>
            <div className='card-body'>
                {logIn? <><div className='card-title'><h5 >Log In<button onClick={()=> setLogIn(false)} className='btn btn-primary btn-switch'>Sign Up</button></h5></div></> : 
                <><div className='card-title'><h5>Sign Up<button onClick={()=> setLogIn(true)} className='btn btn-primary btn-switch'>Login</button></h5></div></>}
                {!logIn ? <div className="form-group">
                    <label>User Name</label>
                    <input onChange={(e)=>setUserName(e.target.value)} type="text" className="form-control" id="userName" aria-describedby="emailHelp" />
                </div> : ''}
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                {!logIn ? <div className="form-group">
                    <label>Re-enter Password</label>
                    <input onChange={(e)=>setPasswordConfirm(e.target.value)} type="password" className="form-control" id="password2" aria-describedby="emailHelp" />
                </div> : ''}
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Remember Me</label>
                </div>
                <button onClick={(e)=>{e.preventDefault(); logIn ? login({email:email,password:password}) : 
               handleSignUp()}} className="btn btn-primary">{logIn ? "Log In" : "Sign Up" }</button>
            </div>
        </div>
    )
}