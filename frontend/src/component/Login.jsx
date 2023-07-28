import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate()

    async function submit(e){
        e.preventDefault();
        await axios.post("http://localhost:8000/",{email,password})
        .then(res =>{
            if(res.data === "yes"){
                navigate('/home')
            }
            else{
                navigate('/signup')
            }
        })


    }

    return <div className="Login">
        <img src="https://tse3.mm.bing.net/th?id=OIP.-MDzY2pY8EXrnGHXGInZIwAAAA&pid=Api&P=0&h=180" alt="" />
        <form action="POST">
            <label htmlFor="email">EMAIL</label><br /><br />
            <input type="email" name="email" id="email" onChange={(event)=>{
                setEmail(event.target.value)
            }} /><br /><br />
            <label htmlFor="passward">PASSWORD</label><br /><br />
            <input type="password" name="password" id="password" onChange={(event)=>{
                setPassword(event.target.value)
            }} /><br /><br />
            <button onClick={submit}>SIGN UP IN</button>
        </form>
        <a href="">Forgot ur password?</a>
    </div>
}

export default Login;