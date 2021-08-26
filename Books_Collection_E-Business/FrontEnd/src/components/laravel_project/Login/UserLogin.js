import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import NavBar from '../Common_Compo/NavBar'

export default function UserLogin() {

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
        const result = await fetch('http://localhost:8000/api/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data != null) {
                    localStorage.setItem("userid", data.id)
                    history.push("/user/my/profile")
                } else {
                    setErrorMsg("Email or Password is incorrect")
                }
            });

        console.log(email, password);
        console.log(localStorage.getItem("userid"))
    }


    return (
        <>
            <NavBar />
            <div class="main">
                <div class="col-md-6 col-sm-12">
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
                            <button type="submit" class="btn btn-black">Login</button>

                            <Link to="/user/signup" class="btn btn-secondary">Sign Up</Link>
                        </form>
                        <Link to="/home/books/list" class="btn btn-link">Back to Book List</Link>
                        <h3 className="text-danger">{errorMsg}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
