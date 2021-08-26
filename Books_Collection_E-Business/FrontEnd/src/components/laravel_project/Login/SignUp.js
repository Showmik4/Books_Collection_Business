import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import NavBar from '../Common_Compo/NavBar'

export default function SignUp() {

    const [fullName, setFullName] = useState()
    const [password, setPassword] = useState()
    const [passwordConf, setPasswordConf] = useState()
    const [gender, setGender] = useState()
    const [email, setEmail] = useState()
    const [phone_number, setPhone_number] = useState()
    const [errorMsg, setErrorMsg] = useState({})

    const [statusCode, setStatusCode] = useState()


    const history = useHistory()

    const handleSignUp = async (e) => {
        e.preventDefault();
        if ("val" == "val") {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    full_name: fullName,
                    fullName, password,
                    password_confirmation: passwordConf,
                    gender, email, phone_number
                })
            };
            const result = await fetch('http://localhost:8000/api/book/user/signup', requestOptions)
                .then(response => {
                    console.log();
                    if (response.status == 200) {
                        history.push("/user/home")
                    }
                    setStatusCode(response.status);
                    return response.json();
                })
                .then(data => {
                    console.log(JSON.stringify({
                        full_name: fullName,
                        password,
                        password_confirmation: passwordConf,
                        gender, email, phone_number
                    }));
                    setErrorMsg(data);
                    console.log(errorMsg);
                    console.log(statusCode);

                });
        }
    }

    return (
        <div className="tab-content" id="myTabContent">
            <NavBar/>
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Signup as an User</h3>
                <form action method="post" onSubmit={handleSignUp}>

                    <div className="row register-form">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input onChange={(e) => { setFullName(e.target.value) }} value={fullName} type="text" className="form-control" name="full_name" placeholder="Full Name *" />
                            </div>

                            <div className="form-group">
                                <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" className="form-control" name="password" placeholder="Password *" />
                            </div>
                            <div className="form-group">
                                <input onChange={(e) => { setPasswordConf(e.target.value) }} value={passwordConf} type="password" className="form-control" name="password_confirmation" placeholder="Confirm Password *" />
                            </div>
                            <div className="form-group">
                                <div className="maxl">
                                    <label className="radio inline">
                                        <input onChange={(e) => { setGender("Male") }} type="radio" name="gender" defaultValue="male" />
                                        <span> Male </span>
                                    </label>
                                    <label className="radio inline">
                                        <input onChange={(e) => { setGender("Female") }} type="radio" name="gender" defaultValue="female" />
                                        <span>Female </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" className="form-control" name="email" placeholder="Your Email *" />
                            </div>
                            <div className="form-group">
                                <input onChange={(e) => { setPhone_number(e.target.value) }} value={phone_number} type="text" minLength={10} maxLength={10} name="phone_number" className="form-control" placeholder="Your Phone *" />
                            </div>

                            <input type="submit" className="btnRegister" defaultValue="Register" />
                        </div>
                    </div>
                </form>

            </div>





            <h4 className="text-danger">{errorMsg.full_name}</h4>
            <h4 className="text-danger">{errorMsg.email}</h4>
            <h4 className="text-danger">{errorMsg.gender}</h4>
            <h4 className="text-danger">{errorMsg.password}</h4>
            <h4 className="text-danger">{errorMsg.phone_number}</h4>






        </div>
    )
}
