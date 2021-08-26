import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import NavBar from '../Common_Compo/NavBar';


export default function MyProfile() {
    const [userDetails, setUserDetails] = useState()

    const history = useHistory()



    useEffect(async () => {
        if (!localStorage.getItem("userid")) {
            history.push("/user/login")
            return
        }
        let data = await fetch('http://localhost:8000/api/user/myaccount/?userid=' + localStorage.getItem("userid"));
        data = await data.json()
        console.log(data)
        setUserDetails(data)
    }, [])

    if (!userDetails) {
        return <div>data is loading...</div>
    } else {

        return (
            <>
                <NavBar />
                <div>
                    <Link to="/user/address/list" className="btn m-1 p-1 btn-sm btn-primary">User Address</Link>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">*****</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Full Name</th>
                                <td>{userDetails.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{userDetails.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gender</th>
                                <td>{userDetails.gender}</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone Number</th>
                                <td>{userDetails.phone_number}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link className="btn btn-primary btn-sm" to="/user/profile/update">Edit Profile Details</Link>
                    <Link className="btn btn-secondary btn-sm m-1" to="/user/password/change">Change Password</Link>
                </div>
            </>
        )
    }
}
