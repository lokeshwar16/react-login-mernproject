import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import './Login.css';

function Login(){

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCPassword]=useState('');
    const navigate = useNavigate()

    async function submit(e){
        e.preventDefault();
        if(password===cpassword){
            await axios.post("http://localhost:8000/register",{email,password})
            .then(navigate('/home'))
        }
          

        
        else{
            window.alert("password and confirm password are not equal");
        };

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
            <label htmlFor="cpassward">CONFIRM PASSWORD</label><br /><br />
            <input type="password" name="cpassword" id="cpassword" onChange={(event)=>{
                setCPassword(event.target.value)
            }} /><br />
            <button onClick={submit}>SIGN UP IN</button>
        </form>
    </div>
}

export default Login;