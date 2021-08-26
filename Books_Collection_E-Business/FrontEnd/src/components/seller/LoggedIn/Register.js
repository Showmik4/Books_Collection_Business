import React, { useState } from 'react'
import {Link,  useHistory } from 'react-router-dom'
import Header from '../Home/Header'

export default function Register() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
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
                    name: name,
                    password: password,
                    email:email
                   
                })
            };
            const result = await fetch('http://localhost:8000/api/register', requestOptions)
                .then(response => {
                    console.log();
                    if (response.status == 200) {
                        history.push("/books")
                    }
                    setStatusCode(response.status);
                    return response.json();
                })
                .then(data => {
                    console.log(JSON.stringify({
                        name: name,
                        password: password,
                        email:email
                    }));
                    setErrorMsg(data);
                    console.log(errorMsg);
                    console.log(statusCode);

                });
        }
    }

    return (
        <>
        <Header/>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Register as an User</h3>
                <form action method="post" onSubmit={handleSignUp}>

                    <div className="row register-form">
                        <div className="col-sm-6 offset-sm-3">
                            <div className="form-group">
                                <input onChange={(e) => { setName(e.target.value) }} value={name} type="text" className="form-control" name="name" placeholder=" Name *" />
                            </div>

                            <div className="form-group">
                                <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" className="form-control" name="password" placeholder="Password *" />
                            </div>
                            
                            
                        
                        
                            <div className="form-group">
                                <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" className="form-control" name="email" placeholder="Your Email *" />
                            </div>
                         

                            <input type="submit" className="btnRegister" defaultValue="Register" />
                        </div>
                     </div>
                </form>

            </div>





            <h4 className="text-danger">{errorMsg.name}</h4>
            <h4 className="text-danger">{errorMsg.email}</h4>
          
            <h4 className="text-danger">{errorMsg.password}</h4>
           





        </div>
        </>
    )
}

