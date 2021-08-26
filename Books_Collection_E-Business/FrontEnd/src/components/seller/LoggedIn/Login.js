import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../Home/Header'

export default function Login() {

    const [email, setEmail] = useState("j@mail.com")
    const [password, setPassword] = useState("12345")
    const [userDetails, setUserDetails] = useState()

    const [errorMsg, setErrorMsg] = useState()

    const history = useHistory()

    const handleLogin = async (e) => {
        e.preventDefault();


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };
        const result = await fetch('http://localhost:8000/api/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    localStorage.setItem("user-info", data.id)
                    history.push("/books")
                } else {
                    setErrorMsg("Email or Password is incorrect")
                }
            });

        console.log(email, password);
        console.log(localStorage.getItem("user-info"))
    }


    return (
        <>
        <Header/>
        <div class="main">
            <div class="col-sm-6 offset-sm-3">
                <div class="login-form">
                    <form autocomplete="on" onSubmit={handleLogin}>
                        <div class="form-group">
                            <label>Your Email</label>
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" name="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" name="password" class="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-black">Login</button>

                       
                    </form>
                 
                    <h3 className="text-danger">{ errorMsg}</h3>
                </div>
            </div>
        </div>
        </>
    )
}
